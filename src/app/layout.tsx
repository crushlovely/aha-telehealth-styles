import type { Metadata } from "next";

import "@/styles/styles.scss";

export const metadata: Metadata = {
  title: "AHA Telehealth",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
