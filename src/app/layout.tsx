import type { Metadata } from "next";
import "./globals.css";
import TanstackQueryProvider from "@/lib/tanstack-query-provider";


export const metadata: Metadata = {
  title: "TanStack Query x Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanstackQueryProvider>
      <html lang="ja">
        <body
          className={` antialiased`}
        >
          {children}
        </body>
      </html>
    </TanstackQueryProvider>
  );
}
