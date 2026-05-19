"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}) {
  return (
    <main
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-zinc-50 text-slate-950 transition-colors dark:bg-zinc-900 dark:text-slate-50",
        className
      )}
      {...props}
    >
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={cn("aurora-background", showRadialGradient && "aurora-radial")} />
      </div>

      <div className="relative z-10 flex w-full flex-col">{children}</div>

      <style jsx>{`
        .aurora-background {
          position: absolute;
          inset: -10px;
          opacity: 0.6;
          will-change: transform;
          filter: blur(40px) invert(1);
          background-image:
            repeating-linear-gradient(
              100deg,
              rgba(255, 255, 255, 0.95) 0%,
              rgba(255, 255, 255, 0.95) 7%,
              rgba(255, 255, 255, 0) 10%,
              rgba(255, 255, 255, 0) 12%,
              rgba(255, 255, 255, 0.95) 16%
            ),
            repeating-linear-gradient(
              100deg,
              rgba(59, 130, 246, 0.4) 10%,
              rgba(168, 85, 247, 0.4) 15%,
              rgba(147, 197, 253, 0.4) 20%,
              rgba(236, 72, 153, 0.4) 25%,
              rgba(96, 165, 250, 0.4) 30%
            );
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
        }

        :global(.dark) .aurora-background {
          filter: blur(40px) invert(0);
          background-image:
            repeating-linear-gradient(
              100deg,
              rgba(9, 9, 11, 0.95) 0%,
              rgba(9, 9, 11, 0.95) 7%,
              rgba(9, 9, 11, 0) 10%,
              rgba(9, 9, 11, 0) 12%,
              rgba(9, 9, 11, 0.95) 16%
            ),
            repeating-linear-gradient(
              100deg,
              rgba(59, 130, 246, 0.4) 10%,
              rgba(168, 85, 247, 0.4) 15%,
              rgba(147, 197, 253, 0.4) 20%,
              rgba(236, 72, 153, 0.4) 25%,
              rgba(96, 165, 250, 0.4) 30%
            );
        }

        .aurora-background::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: inherit;
          background-size: 200%, 100%;
          background-attachment: fixed;
          mix-blend-mode: difference;
          animation: aurora 40s linear infinite;
        }

        .aurora-radial {
          mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
        }

        @keyframes aurora {
          from {
            background-position: 50% 50%, 50% 50%;
          }
          to {
            background-position: 350% 50%, 350% 50%;
          }
        }
      `}</style>
    </main>
  );
}

export default AuroraBackground;