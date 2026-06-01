'use client';

import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ReactLenis as unknown as React.ComponentType<{
  root?: boolean;
  options?: object;
  children?: React.ReactNode;
}>;

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };

  return (
    <Lenis root options={lenisOptions}>
      {children}
    </Lenis>
  );
}

export default SmoothScrolling;