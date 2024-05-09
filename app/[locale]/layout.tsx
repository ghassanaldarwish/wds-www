import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import useTextDirection from "@/hooks/useTextDirection";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { Toaster } from "@/components/ui/sonner";
import BASE_URL from "@/config/url";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const siteMetadata = {
  siteUrl: BASE_URL,
  title: "Webdrei",
  description:
    "We focus on problem-solving strategies before technology selection.",
  ogUrl: new URL("/api/og", BASE_URL),
};

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s | " + siteMetadata.title,
  },
  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,

    images: [
      {
        url: siteMetadata.ogUrl.toString(),
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogUrl.toString()],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  const direction = useTextDirection(locale);

  return (
    <html className="scroll-smooth" lang={locale} dir={direction}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="mt-16">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
