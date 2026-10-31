import React, { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  durationMs?: number;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target = 40,
  durationMs = 1500,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(target);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      
      // Ease-out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      const currentVal = Math.floor(easedProgress * target);
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [target, durationMs]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};
