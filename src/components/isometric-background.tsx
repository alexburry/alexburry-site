"use client";

import { useEffect, useRef } from "react";

export function IsometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const spacing = 30;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔥 Detect theme
      const isDark = document.documentElement.classList.contains("dark");

      // Dark mode → white dots
      // Light mode → gray dots
      const baseColor = isDark ? "255,255,255" : "120,120,120"; // 👈 adjust gray here

      const dotRadius = isDark ? 1.5 : 1.3;
      const baseOpacity = isDark ? 0.15 : 0.05;
      const maxOpacity = isDark ? 0.5 : 0.2;

      for (let y = 0; y < canvas.height + spacing; y += spacing) {
        for (let x = 0; x < canvas.width + spacing; x += spacing) {
          const offsetX = (y / spacing) % 2 === 0 ? 0 : spacing / 2;

          const dotX = x + offsetX;
          const dotY = y;

          const dx = mouse.x - dotX;
          const dy = mouse.y - dotY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDistance = 200;
          const influence = Math.max(0, 1 - distance / maxDistance);

          const moveX = dx * influence * 0.05;
          const moveY = dy * influence * 0.05;

          ctx.beginPath();
          ctx.arc(dotX - moveX, dotY - moveY, dotRadius, 0, Math.PI * 2);

          ctx.fillStyle = `rgba(${baseColor}, ${
            baseOpacity + influence * maxOpacity
          })`;

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
