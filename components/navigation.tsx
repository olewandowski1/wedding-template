'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './language-switcher';
import Link from 'next/link';
import * as React from 'react';

export function Navigation() {
  const t = useTranslations('Navigation');
  const navRoutes = [
    { name: t('home'), href: '#hero' },
    { name: t('story'), href: '#story' },
    { name: t('details'), href: '#details' },
    { name: t('timeline'), href: '#timeline' },
    { name: t('info'), href: '#info' },
    { name: t('gallery'), href: '#gallery' },
    { name: t('rsvp'), href: '#rsvp' },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [scrolled, setScrolled] = React.useState(false);

  const navRef = React.useRef<HTMLElement | null>(null);
  const sectionIds = React.useMemo(
    () => navRoutes.map((route) => route.href.replace('#', '')),
    [],
  );
  const isAutoScrollingRef = React.useRef(false);
  const autoScrollTimeoutRef = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
      isAutoScrollingRef.current = true;
      const offset = (navRef.current?.offsetHeight ?? 0) + 16;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsOpen(false);
      setActiveSection(id);
      window.history.replaceState(null, '', href);
      autoScrollTimeoutRef.current = setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 700);
    }
  };

  const updateActiveSection = React.useCallback(() => {
    if (isAutoScrollingRef.current) return;
    const offset = (navRef.current?.offsetHeight ?? 0) + 24;
    let current = sectionIds[0];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const top = element.getBoundingClientRect().top;
      if (top - offset <= 0) {
        current = id;
      }
    });

    setActiveSection(current);
  }, [sectionIds]);

  React.useEffect(() => {
    if (isAutoScrollingRef.current) return;
    const newHash = `#${activeSection}`;
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash);
    }
  }, [activeSection]);

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafId = 0;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, [sectionIds, updateActiveSection]);

  return (
    <nav
      ref={navRef}
      className={cn(
        'fixed top-0 z-50 w-full p-4 flex justify-between items-center',
        {
          'bg-background border-b': scrolled,
          'bg-transparent': !scrolled,
        },
      )}
    >
      <div className='hidden lg:flex gap-4'>
        {navRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            onClick={(e) => scrollToSection(e, route.href)}
            className={cn('hover:opacity-100', {
              'font-bold underline':
                activeSection === route.href.replace('#', ''),
              'opacity-60': activeSection !== route.href.replace('#', ''),
            })}
          >
            {route.name}
          </Link>
        ))}
      </div>

      <div className='flex items-center gap-4'>
        <LanguageSwitcher scrolled={scrolled} />
        <button
          className='lg:hidden p-2 border'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div className='fixed inset-0 top-16 bg-background p-8 flex flex-col gap-4 lg:hidden'>
          {navRoutes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={(e) => scrollToSection(e, route.href)}
              className={cn('text-2xl', {
                'font-bold': activeSection === route.href.replace('#', ''),
              })}
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
