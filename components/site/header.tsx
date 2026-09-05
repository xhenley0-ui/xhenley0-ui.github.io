'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { site } from '@/content/site';
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = site.navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={
        (item.href === '/' ? path === '/' : path.startsWith(item.href))
          ? 'page'
          : undefined
      }
      onClick={() => setOpen(false)}
    >
      {item.label}
    </Link>
  ));
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/">
          {site.name}
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="mobile-menu" aria-label="Open menu">
            <Menu size={28} />
          </SheetTrigger>
          <SheetContent className="p-6">
            <SheetTitle>{site.name}</SheetTitle>
            <SheetDescription className="sr-only">
              Main navigation
            </SheetDescription>
            <nav className="mobile-links" aria-label="Mobile navigation">
              {links}
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
