/**
 * BackgroundWrapper Component
 * 
 * Creates an advanced aurora effect background with animated gradient orbs.
 * Uses CSS radial-gradient for artistic effect.
 */

import { ReactNode } from "react";

interface BackgroundWrapperProps {
  children: ReactNode;
}

export const BackgroundWrapper = ({ children }: BackgroundWrapperProps) => {
  return (
    <div className="relative min-h-screen">
      {/* Aurora Effect Background */}
      <div className="aurora-background" />
      
      {/* Optional Noise Texture Overlay */}
      <div className="noise-overlay" />
      
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
