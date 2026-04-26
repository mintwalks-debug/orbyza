"use client";
import React from "react";

interface OrbyzaLogoProps {
  /** Height in pixels (width scales proportionally). Default: 48 */
  height?: number;
  className?: string;
}

/**
 * Orbyza brand logo.
 * - "O" → camera aperture icon (teal/steel-blue rings + blades)
 * - "RBYZA" → bold near-black wordmark
 * - Pixel-rocket fragment cluster above the "A"
 */
const OrbyzaLogo: React.FC<OrbyzaLogoProps> = ({
  height = 48,
  className = "",
}) => {
  // Native viewBox: 520 × 120
  const width = (height / 120) * 520;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 120"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Orbyza Logo"
    >
      <title>Orbyza</title>

      <defs>
        {/* Teal gradient for aperture rings */}
        <linearGradient id="orb-ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a9db5" />
          <stop offset="100%" stopColor="#1a7a93" />
        </linearGradient>

        {/* Inner aperture fill */}
        <radialGradient id="orb-apertureGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3ab5cc" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1a7a93" stopOpacity="0.55" />
        </radialGradient>

        {/* Subtle drop-shadow for wordmark depth */}
        <filter id="orb-textShadow" x="-5%" y="-5%" width="115%" height="125%">
          <feDropShadow dx="2" dy="3" stdDeviation="2" floodColor="#00000030" />
        </filter>
      </defs>

      {/* ──────────────────────────────── */}
      {/* APERTURE ICON (replaces the "O") */}
      {/* ──────────────────────────────── */}

      {/* Outer decorative rings */}
      <circle cx="55" cy="62" r="50" fill="none" stroke="url(#orb-ringGrad)" strokeWidth="2.4" opacity="0.9" />
      <circle cx="55" cy="62" r="43" fill="none" stroke="#2a9db5" strokeWidth="1.4" opacity="0.55" />
      <circle cx="55" cy="62" r="37" fill="url(#orb-apertureGrad)" />

      {/* Six aperture blades */}
      <g transform="translate(55,62)" fill="#2a9db5" opacity="0.88">
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <path
            key={angle}
            d="M0,-22 Q9,-9 4,1 Q-3,-5 0,-22Z"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>

      {/* Center aperture circle */}
      <circle cx="55" cy="62" r="8.5" fill="#1a7a93" opacity="0.65" />
      <circle cx="55" cy="62" r="4" fill="#2a9db5" opacity="0.95" />

      {/* 12-point tick marks on outer ring */}
      <g stroke="#2a9db5" strokeWidth="1.1" opacity="0.45">
        {Array.from({ length: 12 }, (_, i) => (
          <line
            key={i}
            x1="55"
            y1="11"
            x2="55"
            y2="17"
            transform={`rotate(${i * 30},55,62)`}
          />
        ))}
      </g>

      {/* ──────────────────────────────── */}
      {/* "RBYZA" WORDMARK                */}
      {/* ──────────────────────────────── */}
      <text
        x="108"
        y="100"
        filter="url(#orb-textShadow)"
        fontFamily="'Arial Black', 'Arial Bold', Impact, sans-serif"
        fontWeight="900"
        fontSize="80"
        fill="#1a1a2e"
        letterSpacing="-1"
      >
        RBYZA
      </text>

      {/* ──────────────────────────────── */}
      {/* PIXEL ROCKET FRAGMENTS above "A" */}
      {/* ──────────────────────────────── */}
      <g opacity="0.92">
        {/* Core shard cluster — body of rocket */}
        <rect x="449" y="38" width="11" height="11" fill="#2a9db5" transform="rotate(-35,454,43)" />
        <rect x="462" y="25" width="9"  height="9"  fill="#3ab5cc" transform="rotate(-25,466,29)" />
        <rect x="456" y="13" width="8"  height="8"  fill="#1a7a93" transform="rotate(-40,460,17)" />
        <rect x="470" y="15" width="7"  height="7"  fill="#5ac8dc" transform="rotate(-15,473,18)" />
        <rect x="474" y="6"  width="6"  height="6"  fill="#2a9db5" transform="rotate(-50,477,9)"  />

        {/* Mid trail */}
        <rect x="440" y="45" width="9" height="9" fill="#1a7a93" transform="rotate(-30,444,49)" />
        <rect x="431" y="53" width="7" height="7" fill="#2a9db5" transform="rotate(-20,434,56)" />
        <rect x="423" y="59" width="6" height="6" fill="#3ab5cc" transform="rotate(-45,426,62)" />

        {/* Far scatter — upper right */}
        <rect x="480" y="18" width="5" height="5" fill="#5ac8dc" transform="rotate(-10,482,20)" opacity="0.70" />
        <rect x="488" y="9"  width="4" height="4" fill="#2a9db5" transform="rotate(-25,490,11)" opacity="0.60" />
        <rect x="477" y="30" width="3" height="3" fill="#3ab5cc" transform="rotate(-35,478,31)" opacity="0.65" />
        <rect x="493" y="22" width="4" height="4" fill="#1a7a93" transform="rotate(-15,495,24)" opacity="0.55" />
        <rect x="485" y="2"  width="3" height="3" fill="#5ac8dc" transform="rotate(-45,486,3)"  opacity="0.50" />

        {/* Lower tail — fading out toward A */}
        <rect x="416" y="66" width="5" height="5" fill="#2a9db5" transform="rotate(-20,418,68)" opacity="0.65" />
        <rect x="409" y="72" width="4" height="4" fill="#1a7a93" transform="rotate(-30,411,74)" opacity="0.45" />
      </g>
    </svg>
  );
};

export default OrbyzaLogo;
