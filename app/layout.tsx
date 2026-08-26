import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const base = new URL(`${protocol}://${host}`);
  const title = "杨天韵｜游戏交互设计师";
  const description = "杨天韵的游戏交互与 UI 设计作品集。";
  return {
    metadataBase: base,
    title,
    description,
    icons: {
      icon: [{ url: "/assets/avatar.png", type: "image/png" }],
      shortcut: "/assets/avatar.png",
      apple: "/assets/avatar.png",
    },
    openGraph: { title, description, type: "website", images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024 }] },
    twitter: { card: "summary_large_image", title, description, images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const preferenceScript = `try{const q=new URLSearchParams(location.search).get("lang");const s=localStorage.getItem("portfolio-language");const l=q==="zh"||q==="en"?q:s;const t=localStorage.getItem("portfolio-theme");if(l==="zh"||l==="en"){document.documentElement.lang=l==="zh"?"zh-CN":"en";if(l==="en")document.documentElement.setAttribute("data-restoring-preferences","")}if(t==="light"||t==="dark")document.documentElement.dataset.theme=t;setTimeout(()=>document.documentElement.removeAttribute("data-restoring-preferences"),2000)}catch{}`;
  return <html lang="zh-CN" suppressHydrationWarning><head><link rel="icon" type="image/png" href="/assets/avatar.png"/><link rel="shortcut icon" type="image/png" href="/assets/avatar.png"/><link rel="apple-touch-icon" href="/assets/avatar.png"/><script dangerouslySetInnerHTML={{ __html: preferenceScript }}/></head><body>{children}</body></html>;
}
