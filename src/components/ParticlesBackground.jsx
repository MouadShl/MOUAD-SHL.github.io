import { useEffect, useRef } from "react";
import particlesConfig from "@/particles.json";

export const ParticlesBackground = () => {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent duplicate initialization (especially in StrictMode)
    if (initialized.current) return;
    initialized.current = true;

    if (!window.particlesJS) {
      console.error("particles.js is not loaded");
      return;
    }

    const container = document.getElementById("particles-canvas");
    if (!container) return;
    if (container.querySelector("canvas")) {
      return;
    }

    try {
      const config = JSON.parse(JSON.stringify(particlesConfig));
      window.particlesJS("particles-canvas", config);
    } catch (error) {
      console.error("Failed to initialize particles:", error);
    }
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,color-mix(in_srgb,var(--color-primary)_12%,transparent),transparent_50%),radial-gradient(circle_at_80%_80%,color-mix(in_srgb,var(--color-highlight)_10%,transparent),transparent_55%)]" />
      <div id="particles-canvas" className="absolute inset-0 pointer-events-auto" />
    </div>
  );
};
