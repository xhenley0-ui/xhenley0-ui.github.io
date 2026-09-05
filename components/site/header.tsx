'use client';
import Link from '@/components/site/link';
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
import { LanguageSwitch, T, useLanguage } from './language';
const navigation = [
  { en: 'Home', zh: '首页', href: '/' },
  { en: 'About', zh: '关于', href: '/about/' },
  { en: 'Portfolio', zh: '作品', href: '/portfolio/' },
  { en: 'Performance', zh: '演出', href: '/performance/' },
];
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const links = navigation.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      aria-current={
        (
          item.href === '/'
            ? path === '/'
            : path.startsWith(item.href.slice(0, -1))
        )
          ? 'page'
          : undefined
      }
      onClick={() => setOpen(false)}
    >
      <T en={item.en} zh={item.zh} />
    </Link>
  ));
  return (
    <>
      <a className="skip-link" href="#main">
        <T en="Skip to content" zh="跳至正文" />
      </a>
      <header
        className={`site-header ${path === '/' || path.replace(/\/$/, '') === '/portfolio' ? 'on-home' : ''}`}
      >
        <Link className="brand" href="/">
          Yuheng Zhu
          <span>
            <T en="Composer & Musician" zh="作曲 · 音乐创作" />
          </span>
        </Link>
        <nav
          className="desktop-nav"
          aria-label={language === 'zh' ? '主导航' : 'Main navigation'}
        >
          {links}
        </nav>
        <div className="header-actions">
          <LanguageSwitch />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="menu-trigger"
              aria-label={language === 'zh' ? '打开菜单' : 'Open menu'}
            >
              <Menu size={25} />
            </SheetTrigger>
            <SheetContent className="menu-sheet">
              <SheetTitle>Yuheng Zhu</SheetTitle>
              <SheetDescription className="sr-only">
                <T en="Main navigation" zh="主导航" />
              </SheetDescription>
              <nav className="mobile-links">{links}</nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
