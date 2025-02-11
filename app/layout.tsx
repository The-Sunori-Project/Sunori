
import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Sunori",
  description: "The top-of-the-line games site Sunori",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
