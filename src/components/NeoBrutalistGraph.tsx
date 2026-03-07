import React, { useEffect, useRef } from "react";

type GraphProps = {
  nodeCount?: number;
  colors?: string[];
  speed?: number;
  interactionStrength?: number;
  lineDistance?: number;
  radius?: number;
  background?: string;
  stroke?: string;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
};

const DEFAULT_COLORS = ["#fefb00", "#00f5d4", "#ff4fd8", "#8b5cf6", "#ffffff"];

export default function NeoBrutalistGraph({
  nodeCount = 36,
  colors = DEFAULT_COLORS,
  speed = 0.5,
  interactionStrength = 120,
  lineDistance = 160,
  radius = 6,
  background = "#000000",
  stroke = "#ffffff"
}: GraphProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nodesRef = useRef<Node[]>([]);
  const pointerRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initNodes = () => {
      const rect = container.getBoundingClientRect();
      const nodes: Node[] = [];
      for (let i = 0; i < nodeCount; i += 1) {
        nodes.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          r: radius + Math.random() * 3,
          color: colors[i % colors.length]
        });
      }
      nodesRef.current = nodes;
    };

    resize();
    initNodes();

    let rafId = 0;
    const tick = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, rect.width, rect.height);

      const nodes = nodesRef.current;
      const pointer = pointerRef.current;

      // lines
      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < lineDistance) {
            ctx.strokeStyle = stroke;
            ctx.lineWidth = 2;
            ctx.globalAlpha = 1 - dist / lineDistance;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // nodes
      for (const node of nodes) {
        if (pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < interactionStrength) {
            node.vx += (dx / dist) * 0.02;
            node.vy += (dy / dist) * 0.02;
          }
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > rect.width) node.vx *= -1;
        if (node.y < 0 || node.y > rect.height) node.vy *= -1;

        ctx.fillStyle = node.color;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    const onMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pointerRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        active: true
      };
    };

    const onTouch = (event: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const touch = event.touches[0];
      if (!touch) return;
      pointerRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
        active: true
      };
    };

    const onLeave = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("resize", resize);
    container.addEventListener("mousemove", onMove);
    container.addEventListener("touchmove", onTouch, { passive: true });
    container.addEventListener("mouseleave", onLeave);
    container.addEventListener("touchend", onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("touchmove", onTouch);
      container.removeEventListener("mouseleave", onLeave);
      container.removeEventListener("touchend", onLeave);
    };
  }, [nodeCount, colors, speed, interactionStrength, lineDistance, radius, background, stroke]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "320px", border: "4px solid #fff" }}>
      <canvas ref={canvasRef} />
    </div>
  );
}
