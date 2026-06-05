"use client";

import { useState } from "react";
import { GripVertical } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const palette = [
  { hex: "#FFFFFF", label: "Canvas" },
  { hex: "#F0F0F0", label: "Surface" },
  { hex: "#B0B0B0", label: "Muted" },
  { hex: "#707070", label: "Text" },
  { hex: "#333333", label: "Ink" },
];

export function ThemeComparison() {
  const [inset, setInset] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateInset = (clientX: number, element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const nextInset = ((clientX - rect.left) / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, nextInset)));
  };

  return (
    <section className="theme-comparison-section" id="theme">
      <div className="theme-comparison-copy">
        <Badge className="theme-comparison-badge">Color System</Badge>
        <h2>Elegant Minimalism, ready to swap.</h2>
        <p>
          A controlled grayscale foundation keeps the portfolio premium and
          readable, while the accent colors still signal AI, cloud, and product
          energy.
        </p>
      </div>

      <div
        className="theme-comparison"
        onPointerMove={(event) => {
          if (!isDragging) return;
          updateInset(event.clientX, event.currentTarget);
        }}
        onPointerUp={() => setIsDragging(false)}
        onPointerLeave={() => setIsDragging(false)}
      >
        <ThemePreview tone="dark" />
        <div
          className="theme-comparison__layer"
          style={{ clipPath: `inset(0 ${100 - inset}% 0 0)` }}
        >
          <ThemePreview tone="light" />
        </div>

        <div className="theme-comparison__labels" aria-hidden="true">
          <span>Light</span>
          <span>Dark</span>
        </div>

        <div
          className="theme-comparison__divider"
          style={{ left: `${inset}%` }}
        >
          <button
            aria-label="Drag to compare light and dark portfolio themes"
            onPointerDown={(event) => {
              setIsDragging(true);
              event.currentTarget.setPointerCapture(event.pointerId);
              updateInset(event.clientX, event.currentTarget.closest(".theme-comparison") as HTMLElement);
            }}
          >
            <GripVertical aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ThemePreview({ tone }: { tone: "light" | "dark" }) {
  return (
    <div className={`theme-preview theme-preview--${tone}`}>
      <div className="theme-preview__nav">
        <strong>MI.</strong>
        <span>About</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
      <div className="theme-preview__hero">
        <p>Available for remote opportunities</p>
        <h3>Muhammad Imran</h3>
        <h4>AI Engineer & Enterprise Architect</h4>
        <div>
          <span>React / Next.js</span>
          <span>RAG Systems</span>
          <span>AWS / DevOps</span>
        </div>
      </div>
      <div className="theme-preview__cards">
        <article>
          <small>AI</small>
          <strong>Production Agents</strong>
        </article>
        <article>
          <small>CL</small>
          <strong>Cloud Scale</strong>
        </article>
        <article>
          <small>UX</small>
          <strong>Business Systems</strong>
        </article>
      </div>
      <div className="theme-preview__palette">
        {palette.map((color) => (
          <div key={color.hex}>
            <span style={{ background: color.hex }} />
            <strong>{color.hex}</strong>
            <small>{color.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
