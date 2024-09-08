import "./globals.css";
import { Rubik as FontSans } from "next/font/google";

import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

import { cn } from "@/lib/utils";
import { BASE_URL } from "@/lib/metadata";

import { ContextProvider } from "@/components/context-provider";
import NextTopLoader from "nextjs-toploader";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(BASE_URL),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ContextProvider>
          <div className="relative flex min-h-screen flex-col bg-background">
            <NextTopLoader showSpinner={false} />
            {children}
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
