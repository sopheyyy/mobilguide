import { z } from "zod";

import {
  getSessionCookieName,
  getSessionCookieOptions,
} from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getGuidePreferences, saveGuidePreferences } from "./db";

const preferenceInput = z.object({
  installationId: z.string().min(8).max(64),
  phoneType: z.enum(["unknown", "iphone", "android"]),
  textSize: z.number().int().min(0).max(2),
  favorites: z.array(z.string().min(1).max(60)).max(100),
});

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(getSessionCookieName(ctx.req), {
        ...cookieOptions,
        maxAge: -1,
      });
      return {
        success: true,
      } as const;
    }),
  }),
  preferences: router({
    get: publicProcedure
      .input(z.object({ installationId: z.string().min(8).max(64) }))
      .query(({ input }) => getGuidePreferences(input.installationId)),
    save: publicProcedure
      .input(preferenceInput)
      .mutation(async ({ input }) => {
        await saveGuidePreferences(input);
        return { saved: true } as const;
      }),
  }),
});

export type AppRouter = typeof appRouter;
