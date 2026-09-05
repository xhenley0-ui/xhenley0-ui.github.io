/* oxlint-disable next/no-img-element -- Local images are resized and compressed ahead of deployment; no runtime image service is required. */
import type { CSSProperties, ReactNode } from 'react';
export function Scene({
  image,
  children,
  className = '',
  shade = 0.35,
  position = '50% 50%',
  priority = false,
}: {
  image: string;
  children: ReactNode;
  className?: string;
  shade?: number;
  position?: string;
  priority?: boolean;
}) {
  return (
    <section
      className={`scene ${className}`}
      style={{ '--shade': shade } as CSSProperties}
    >
      <img
        className="scene-image"
        src={image}
        alt=""
        style={{ objectPosition: position }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
      />
      {children}
    </section>
  );
}
