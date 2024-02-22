import { headers } from "next/headers";
import { Providers } from "./providers";
import { cookieToInitialState, useConfig } from "wagmi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
