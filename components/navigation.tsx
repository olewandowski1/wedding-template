'use client';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import Link from 'next/link';
import * as React from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('hero');
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();
  const navRef = React.useRef<HTMLElement | null>(null);
  const sectionIds = React.useMemo(
    () => siteConfig.NAV_ROUTES.map((route) => route.href.replace('#', '')),
    [],
  );
  const isAutoScrollingRef = React.useRef(false);
  const autoScrollTimeoutRef = React.useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  React.useEffect(() => {
    return scrollY.on('change', (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

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
    // Set initial active section from hash if present
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
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-700',
        scrolled
          ? 'bg-background/95 backdrop-blur-md py-4 sm:py-6'
          : isOpen
            ? 'bg-white py-4 sm:py-6'
            : 'bg-transparent py-6 sm:py-10 md:py-16.5',
      )}
    >
      <div className='container mx-auto flex items-center justify-between sm:justify-center px-6 md:px-12'>
        {/* Mobile-only spacing fix */}
        <div className='flex-1 md:hidden' />

        {/* Desktop Nav - Centered & Refined */}
        <div className='hidden items-center space-x-12 lg:space-x-16 lg:flex'>
          {siteConfig.NAV_ROUTES.map((route) => {
            const isActive = activeSection === route.href.replace('#', '');
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={(e) => scrollToSection(e, route.href)}
                className={cn(
                  'relative text-[10px] font-medium uppercase tracking-[0.5em] transition-all duration-500',
                  scrolled
                    ? isActive
                      ? 'text-foreground'
                      : 'text-foreground/70 hover:text-foreground'
                    : isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white',
                )}
              >
                {route.name}
                {isActive && (
                  <motion.span
                    layoutId='activeNav'
                    className={cn(
                      'absolute -bottom-2 left-0 h-[1px] w-full',
                      scrolled ? 'bg-foreground' : 'bg-white',
                    )}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button - Positioned right with flex-1 for balance */}
        <div className='flex flex-1 justify-end lg:hidden'>
          <button
            type='button'
            className='relative z-50 p-2'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
            aria-expanded={isOpen}
            aria-controls='mobile-nav'
          >
            <div className='flex flex-col space-y-1.5'>
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && 'translate-y-2 rotate-45',
                )}
              />
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'h-[1px] w-6 transition-all',
                  scrolled || isOpen ? 'bg-foreground' : 'bg-white',
                  isOpen && '-translate-y-2 -rotate-45',
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <>
            <motion.div
              className='fixed inset-0 z-40 bg-white lg:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              id='mobile-nav'
              className='absolute left-0 right-0 top-full z-50 origin-top overflow-hidden bg-white lg:hidden'
              initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -8, scaleY: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className='flex flex-col gap-4 px-6 py-8'>
                {siteConfig.NAV_ROUTES.map((route, index) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    onClick={(e) => scrollToSection(e, route.href)}
                    className='group flex items-center justify-between font-serif text-xl tracking-[0.2em] text-foreground transition-all hover:opacity-60'
                  >
                    <span>{route.name}</span>
                    <span className='text-xs uppercase tracking-[0.35em] text-foreground/70 group-hover:text-foreground/90'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
