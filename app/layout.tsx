import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const diatype = localFont({
  src: [
    {
      path: "./fonts/ABCDiatype-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elias Olderbakk",
  description: "Designer based in Oslo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={diatype.className}>
        {children}
      </body>
    </html>
  );
}
