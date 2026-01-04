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
  variable: "--font-diatype",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olderbakk — Designer",
  description: "Designer basert i Norge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={diatype.variable}>
        {children}
      </body>
    </html>
  );
}
