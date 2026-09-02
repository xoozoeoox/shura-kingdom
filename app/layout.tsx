import type { Metadata } from "next";
import "./globals.css";
import ClientReady from "./ClientReady";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export const metadata: Metadata = {
  title: "修羅國系統導覽",
  description: "修羅國 Discord Bot 的完整系統與世界觀導覽。",
  icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><head><base href={`${basePath}/`} /></head><body><ClientReady />{children}</body></html>;
}
