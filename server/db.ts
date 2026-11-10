import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, guidePreferences, GuidePreferencesRow, users } from "../drizzle/schema";
import { ENV } from "./_core/env";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch {
      console.warn("[Database] Failed to connect");
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = "admin";
      updateSet.role = "admin";
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user");
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export interface GuidePreferences {
  installationId: string;
  phoneType: "unknown" | "iphone" | "android";
  textSize: number;
  favorites: string[];
}

function parseFavorites(row: GuidePreferencesRow): string[] {
  try {
    const value: unknown = JSON.parse(row.favorites);
    if (Array.isArray(value)) return value.filter((item): item is string => typeof item === "string").slice(0, 100);
  } catch {
    // A malformed old preference should not prevent the rest of the profile from loading.
  }
  return [];
}

export async function getGuidePreferences(installationId: string): Promise<GuidePreferences | null> {
  const db = await getDb();
  if (!db) return null;
  const rows = await db.select().from(guidePreferences).where(eq(guidePreferences.installationId, installationId)).limit(1);
  const row = rows[0];
  if (!row) return null;
  return {
    installationId: row.installationId,
    phoneType: row.phoneType,
    textSize: row.textSize,
    favorites: parseFavorites(row),
  };
}

export async function saveGuidePreferences(preferences: GuidePreferences): Promise<void> {
  const db = await getDb();
  if (!db) return;
  const values = {
    installationId: preferences.installationId,
    phoneType: preferences.phoneType,
    textSize: preferences.textSize,
    favorites: JSON.stringify(preferences.favorites.slice(0, 100)),
    updatedAt: new Date(),
  };
  await db.insert(guidePreferences).values(values).onDuplicateKeyUpdate({
    set: {
      phoneType: values.phoneType,
      textSize: values.textSize,
      favorites: values.favorites,
      updatedAt: values.updatedAt,
    },
  });
}
