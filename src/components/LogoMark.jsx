import React from 'react';

// Minimalist "Aligned A" logo mark using negative space.
// Dark block with an upward arrow that also reads as the letter A.
export default function LogoMark({ size = 48, className = '' }) {
  return (
    <div
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-label="Aligned A logo mark"
      role="img"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          <mask id="a-mask" maskUnits="userSpaceOnUse">
            {/* Mask base: visible area is white */}
            <rect x="0" y="0" width="100" height="100" fill="white" />
            {/* Cutout: geometric arrow/A made of negative space */}
            {/* Central vertical stem */}
            <rect x="47" y="18" width="6" height="64" fill="black" />
            {/* Left diagonal of A (cut out) */}
            <polygon points="50,22 27,76 36,76 50,44" fill="black" />
            {/* Right diagonal of A (cut out) */}
            <polygon points="50,22 73,76 64,76 50,44" fill="black" />
            {/* Crossbar hint via a small notch to imply the A while preserving arrow */}
            <rect x="42" y="50" width="16" height="6" fill="black" />
            {/* Arrow head negative space to sharpen the tip */}
            <polygon points="50,12 40,26 60,26" fill="black" />
          </mask>
        </defs>
        {/* Solid block; the mask carves out the arrow/A as negative space */}
        <rect x="4" y="4" width="92" height="92" rx="12" fill="currentColor" mask="url(#a-mask)" />
      </svg>
    </div>
  );
}
