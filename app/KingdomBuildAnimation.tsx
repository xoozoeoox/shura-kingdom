"use client";

import { useEffect, useRef } from "react";

export default function KingdomBuildAnimation() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.classList.add("animation-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      stage.classList.add("show-complete");
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      stage.classList.add("is-building");
      observer.disconnect();
    }, { threshold: 0.28, rootMargin: "0px 0px -10%" });

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="kingdom-build-stage" ref={stageRef}>
      <img className="pixel-art kingdom-complete" src="/shura-kingdom-16bit.png" alt="包含北方城堡、南方城門、中央商店街、小灼酒館、西區賭場與住宅區的修羅國像素縮影" />
      <img className="pixel-art kingdom-base" src="/kingdom-empty-base.png" alt="" aria-hidden="true" />
      {['north','west','east','market','south'].map((group, index) => (
        <span className={`build-layer build-${group}`} style={{ animationDelay: `${1.18 + index * 0.2}s` }} key={group} aria-hidden="true">
          <img className="pixel-art" src="/kingdom-buildings-overlay.png" alt="" />
        </span>
      ))}
      {['dust-a','dust-b','dust-c','dust-d','dust-e'].map((dust, index) => <i className={`build-dust ${dust}`} style={{ animationDelay: `${1.62 + index * 0.2}s` }} key={dust} aria-hidden="true" />)}
    </div>
  );
}
