import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Welcome to Webdrei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container">{children}</div>;
}
