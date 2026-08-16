"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || visible) return;
    const el = ref.current;
    if (!el) return;

    const reveal = () => setVisible(true);

    let observer: IntersectionObserver | undefined;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) reveal();
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    }

    // Safety net: some mobile browsers/in-app WebViews (WhatsApp,
    // Instagram) handle IntersectionObserver unreliably. Independently
    // check the element's position on scroll/resize so content never
    // stays hidden once it's actually on screen.
    const checkPosition = () => {
      if (isInViewport(el)) reveal();
    };
    checkPosition();
    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("resize", checkPosition);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("resize", checkPosition);
    };
  }, [shouldReduceMotion, visible]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 36, scale: 0.97 }}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : undefined}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
