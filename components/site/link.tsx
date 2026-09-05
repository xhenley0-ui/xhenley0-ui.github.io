import type { AnchorHTMLAttributes } from 'react';
import { asset } from '@/lib/paths';
/** Native links work directly on GitHub Pages without a server-side RSC endpoint. */
export default function Link({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={asset(href)} {...props}>
      {children}
    </a>
  );
}
