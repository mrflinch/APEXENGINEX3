import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  proximity?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  title,
  subtitle,
  proximity = 120 // Increased default proximity
}) => {
  return (
    <div className={cn(
      "relative h-full rounded-[1.5rem] p-1.5 transition-all duration-500 ease-out hover:-translate-y-1.5 overflow-visible", // Force overflow visible
      className
    )}>
      <GlowingEffect
        spread={60} // Increased spread
        glow={true}
        disabled={false}
        proximity={proximity}
        inactiveZone={0.01}
        borderWidth={2} // Slightly thicker border
      />
      <div className="relative h-full glass-panel rounded-[1.25rem] p-6 border border-white/10 overflow-hidden flex flex-col z-10">
        {(title || subtitle) && (
          <div className="mb-4">
            {title && <h3 className="text-lg font-black text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-400 font-bold">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
