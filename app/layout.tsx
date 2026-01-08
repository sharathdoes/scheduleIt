// app/layout.tsx
import "./globals.css";
import { Header } from "@/components/header";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Schedule",
  description: "Create your group's event",
};

const outfit = localFont({
  src: "../fonts/Outfit/Outfit-VariableFont_wght.ttf",
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <>
      <html lang="en" suppressHydrationWarning>
        <head />
      <body  suppressHydrationWarning={true} className={`${outfit.className} ${outfit.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <>   <Header/>
            {children}</>
          
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
