import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunori NextJS",
  description: "Top of the line games site rewritten from scratch in NextJS.",
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
