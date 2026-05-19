'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const motionTags = {
  p: motion.p,
  span: motion.span,
  div: motion.div,
};

export function TextScramble({
  children,
  duration = 2,
  speed = 0.1,
  characterSet = defaultChars,
  className,
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}) {
  const MotionComponent = motionTags[Component] ?? motion.p;
  const [displayText, setDisplayText] = useState(children);
  const isAnimatingRef = useRef(false);
  const text = children;
  
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  const scramble = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      let scrambled = '';
      const progress = step / steps;

      for (let index = 0; index < text.length; index++) {
        if (text[index] === ' ') {
          scrambled += ' ';
          continue;
        }

        if (progress * text.length > index) {
          scrambled += text[index];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      setDisplayText(scrambled);
      step += 1;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(text);
        isAnimatingRef.current = false;
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [characterSet, duration, onScrambleComplete, speed, text]);

  useEffect(() => {
    if (!trigger || !isInView) return;

    const timer = window.setTimeout(() => {
      scramble();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [scramble, trigger, isInView]);

  return (
    <MotionComponent ref={ref} className={className} {...props}>
      {displayText}
    </MotionComponent>
  );
}
