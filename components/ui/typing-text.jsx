'use client';

import { useEffect, useState } from 'react';

export function TypingText({
  children,
  speed = 100,
  delay = 0,
  className,
  as: Component = 'span',
  start = true,
  showCursor = true,
  hideCursorOnComplete = false,
  ...props
}) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const text = String(children);
  
  useEffect(() => {
    if (!start) return;
    if (displayedChars > text.length) return;

    const currentSpeed = displayedChars === 0 ? delay : speed;
    
    const timer = setTimeout(() => {
      setDisplayedChars(prev => prev + 1);
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [displayedChars, text.length, speed, start, delay]);
  
  const displayText = text.slice(0, displayedChars);
  const isComplete = displayedChars >= text.length;
  const shouldShowCursor = showCursor && (!isComplete || !hideCursorOnComplete);

  const commonProps = {
    className: className,
    ...props,
  };

  const Cursor = () => shouldShowCursor ? (
    <span 
      className="animate-pulse inline-block ml-1 text-foreground"
      style={{ WebkitTextFillColor: 'var(--foreground)' }}
    >
      _
    </span>
  ) : null;

  // Render berdasarkan Component type
  if (Component === 'div') {
    return (
      <div {...commonProps}>
        {displayText}
        <Cursor />
      </div>
    );
  }

  if (Component === 'p') {
    return (
      <p {...commonProps}>
        {displayText}
        <Cursor />
      </p>
    );
  }

  // Default: span
  return (
    <span {...commonProps}>
      {displayText}
      <Cursor />
    </span>
  );
}
