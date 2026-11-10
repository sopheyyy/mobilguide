import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

import { trpc } from "@/lib/trpc";
import type { PhoneType } from "@/lib/mobile-guides";

export type TextSize = 0 | 1 | 2;
export interface AppPreferences {
  phoneType: PhoneType;
  textSize: TextSize;
  favorites: string[];
}
interface AppPreferencesContextValue extends AppPreferences {
  ready: boolean;
  setPhoneType: (phoneType: PhoneType) => void;
  setTextSize: (textSize: TextSize) => void;
  toggleFavorite: (guideId: string) => void;
  resetPreferences: () => void;
}

const PREFERENCES_KEY = "mobilguide.preferences.v1";
const INSTALLATION_KEY = "mobilguide.installation.v1";
const DEFAULT_PREFERENCES: AppPreferences = {
  phoneType: "unknown",
  textSize: 0,
  favorites: [],
};

const AppPreferencesContext = createContext<AppPreferencesContextValue | null>(null);

function makeInstallationId(): string {
  const randomPart = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
  return `mg-${Date.now().toString(36)}-${randomPart}`.slice(0, 60);
}

function normalizePreferences(input: { phoneType?: PhoneType; textSize?: number; favorites?: unknown }): AppPreferences {
  const phoneType: PhoneType = input.phoneType === "iphone" || input.phoneType === "android" ? input.phoneType : "unknown";
  const textSize: TextSize = input.textSize === 1 || input.textSize === 2 ? input.textSize : 0;
  const favorites = Array.isArray(input.favorites) ? [...new Set(input.favorites.filter((item): item is string => typeof item === "string"))].slice(0, 100) : [];
  return { phoneType, textSize, favorites };
}

export function AppPreferencesProvider({ children }: { children: React.ReactNode }) {
  const [installationId, setInstallationId] = useState<string | null>(null);
  const [preferences, setPreferences] = useState<AppPreferences>(DEFAULT_PREFERENCES);
  const [ready, setReady] = useState(false);
  const remote = trpc.preferences.get.useQuery(
    { installationId: installationId ?? "" },
    { enabled: Boolean(installationId), staleTime: 30_000, retry: 1 },
  );
  const saveRemote = trpc.preferences.save.useMutation({
    onError: () => {
      // Offline use still works through AsyncStorage; the next app visit retries sync.
    },
  });

  useEffect(() => {
    let cancelled = false;
    async function loadLocal() {
      try {
        const [existingId, savedPreferences] = await Promise.all([
          AsyncStorage.getItem(INSTALLATION_KEY),
          AsyncStorage.getItem(PREFERENCES_KEY),
        ]);
        const id = existingId ?? makeInstallationId();
        if (!existingId) await AsyncStorage.setItem(INSTALLATION_KEY, id);
        let next = DEFAULT_PREFERENCES;
        if (savedPreferences) {
          try {
            next = normalizePreferences(JSON.parse(savedPreferences) as Partial<AppPreferences>);
          } catch {
            await AsyncStorage.removeItem(PREFERENCES_KEY);
          }
        }
        if (!cancelled) {
          setInstallationId(id);
          setPreferences(next);
          setReady(true);
        }
      } catch {
        if (!cancelled) {
          setInstallationId(makeInstallationId());
          setReady(true);
        }
      }
    }
    void loadLocal();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!ready || !remote.isFetched) return;
    if (remote.data) setPreferences(normalizePreferences(remote.data));
  }, [ready, remote.isFetched, remote.data]);

  useEffect(() => {
    if (!ready || !installationId || !remote.isFetched) return;
    const normalized = normalizePreferences(preferences);
    void AsyncStorage.setItem(PREFERENCES_KEY, JSON.stringify(normalized));
    saveRemote.mutate({ installationId, ...normalized });
  }, [ready, installationId, remote.isFetched, preferences]);

  const value = useMemo<AppPreferencesContextValue>(() => ({
    ...preferences,
    ready,
    setPhoneType: (phoneType) => setPreferences((current) => ({ ...current, phoneType })),
    setTextSize: (textSize) => setPreferences((current) => ({ ...current, textSize })),
    toggleFavorite: (guideId) => setPreferences((current) => ({
      ...current,
      favorites: current.favorites.includes(guideId)
        ? current.favorites.filter((item) => item !== guideId)
        : [...current.favorites, guideId],
    })),
    resetPreferences: () => setPreferences(DEFAULT_PREFERENCES),
  }), [preferences, ready]);

  return <AppPreferencesContext.Provider value={value}>{children}</AppPreferencesContext.Provider>;
}

export function useAppPreferences(): AppPreferencesContextValue {
  const context = useContext(AppPreferencesContext);
  if (!context) throw new Error("useAppPreferences must be used within AppPreferencesProvider");
  return context;
}
