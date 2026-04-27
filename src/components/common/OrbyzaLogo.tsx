"use client";
import React from "react";
import Image from "next/image";

interface OrbyzaLogoProps {
  /** Height in pixels (width scales proportionally). Default: 48 */
  height?: number;
  className?: string;
}

/**
 * Orbyza brand logo.
 * Now using the new branding provided by the user.
 */
const OrbyzaLogo: React.FC<OrbyzaLogoProps> = ({
  height = 48,
  className = "",
}) => {
  // Aspect ratio based on the provided logo (roughly 4:1 or 3:1)
  // We'll use a standard ratio and allow it to scale
  const width = height * 3.5;

  return (
    <div className={`relative ${className}`} style={{ height, width }}>
      <Image
        src="/logo.png"
        alt="Orbyza Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default OrbyzaLogo;
