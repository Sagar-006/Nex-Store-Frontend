"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

export function SmoothCursor({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      backgroundColor: "#000",
      pointerEvents: "none",
      zIndex: "9999",
      mixBlendMode: "difference",
      transform: "translate(-50%, -50%)",
    });

    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);

  return <>{children}</>;
}
