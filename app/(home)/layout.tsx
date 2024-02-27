import "@/styles/globals.css";
import type { Metadata } from "next";
import ThemeProvider from "@/components/providers/theme-provider";
import QueryProvider from "@/components/providers/query-provider";
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";
import { AuthProvider } from "@/context/auth-context";

//

export const metadata: Metadata = {
  referrer: "origin",
  title: "WDS",
  description: "Web drei pins. Create flexible and powerful presentations.",
  generator: "Next.js",
  manifest: "/manifest.json",
  authors: [
    { name: "Ghassan Aldarwish" },
    {
      name: "Ghassan Aldarwish",
      url: "https://www.linkedin.com/in/ghassan-aldarwish-029682172/",
    },
  ],

  themeColor: "#005cc5",

  icons: [
    { rel: "apple-touch-icon", url: "/icon-128x128.png" },
    { rel: "icon", url: "/logo.png" },
  ],
  appleWebApp: {
    capable: true,
    title: "WDS",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThemeProvider>
            <AuthProvider>{children}</AuthProvider>
          </ThemeProvider>
          <Toaster />
          <TailwindIndicator />
        </QueryProvider>
      </body>
    </html>
  );
}
