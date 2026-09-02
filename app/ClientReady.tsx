"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

export default function ClientReady() {
  useEffect(() => {
    document.documentElement.classList.add("client-ready");
    document.querySelectorAll<HTMLAnchorElement>('a[href="/"]').forEach((link) => {
      link.setAttribute("href", `${basePath}/`);
    });
  }, []);

  return null;
}
