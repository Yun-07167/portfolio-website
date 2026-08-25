"use client";

import { useEffect, useState } from "react";

type NavId = "projects" | "notes" | "connect" | "resume" | "about";

const markupRequests = new Map<string, Promise<string>>();

function loadRing(source: string) {
  let request = markupRequests.get(source);
  if (!request) {
    request = fetch(source)
      .then(response => {
        if (!response.ok) throw new Error(`Unable to load header ring: ${response.status}`);
        return response.text();
      })
      .then(markup => markup.replace("animation:draw-ring .5s", "animation:draw-ring .3s"));
    markupRequests.set(source, request);
  }
  return request;
}

export default function HeaderHoverRing({ navId, active }: { navId: NavId; active: boolean }) {
  const source = navId === "about" ? "/assets/connects-circle.svg" : "/assets/projects-circle.svg";
  const [markup, setMarkup] = useState("");

  useEffect(() => {
    let cancelled = false;
    void loadRing(source).then(value => { if (!cancelled) setMarkup(value); }).catch(() => {});
    return () => { cancelled = true; };
  }, [source]);

  return <span className="drawn-ring" aria-hidden="true">{active && markup && <span className="drawn-ring-svg" dangerouslySetInnerHTML={{ __html: markup }}/>}</span>;
}
