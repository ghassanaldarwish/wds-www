import Prose from "@/components/prose";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Us Welcome to Webdrei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <Prose>{children}</Prose>
    </div>
  );
}
