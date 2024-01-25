'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export function ProviderParallax({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider>{children}</ParallaxProvider>;
}