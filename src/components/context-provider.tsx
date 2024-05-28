"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { RootProvider } from "fumadocs-ui/provider";

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <RootProvider>
        {children}
        <Toaster />
      </RootProvider>
    </ThemeProvider>
  );
}
