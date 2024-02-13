"use client";

import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({ children }: any) {
  return (
    <Provider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Provider>
  );
}
