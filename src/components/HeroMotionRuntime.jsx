'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function HeroMotionRuntime() {
  useEffect(() => {
    let cleanups = [];
    let isActive = true;

    const applyMotion = () => {
      if (!isActive) return;

      const cards = Array.from(document.querySelectorAll('#page-home .hero-pathways .pathway-card'));
      if (!cards.length) return;

      cleanups.forEach((cleanup) => cleanup());
      cleanups = [];

      cards.forEach((card, index) => {
        card.style.touchAction = 'manipulation';

        const heart = document.createElement('span');
        heart.className = 'hero-card-heart';
        heart.setAttribute('aria-hidden', 'true');
        heart.textContent = '♥';
        card.appendChild(heart);

        const heartX = gsap.quickTo(heart, 'x', { duration: 0.18, ease: 'power2.out' });
        const heartY = gsap.quickTo(heart, 'y', { duration: 0.18, ease: 'power2.out' });
        const tiltX = gsap.quickTo(card, 'rotationX', { duration: 0.22, ease: 'power2.out' });
        const tiltY = gsap.quickTo(card, 'rotationY', { duration: 0.22, ease: 'power2.out' });

        gsap.set(card, {
          transformPerspective: 1200,
          transformOrigin: '50% 50%'
        });

        gsap.fromTo(
          card,
          { y: 34, opacity: 0, rotateZ: index % 2 === 0 ? -1.4 : 1.4 },
          {
            y: 0,
            opacity: 1,
            rotateZ: 0,
            duration: 0.95,
            delay: 0.15 + index * 0.08,
            ease: 'power3.out'
          }
        );

        const onMove = (event) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const px = (x / rect.width) * 2 - 1;
          const py = (y / rect.height) * 2 - 1;

          heartX(x - rect.width / 2);
          heartY(y - rect.height / 2);

          gsap.to(heart, {
            opacity: 1,
            scale: 1,
            duration: 0.22,
            ease: 'power2.out'
          });

          tiltX(gsap.utils.clamp(-7, 7, -py * 7));
          tiltY(gsap.utils.clamp(-9, 9, px * 9));
        };

        const onEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.018,
            boxShadow: '0 26px 60px rgba(39, 22, 10, 0.28)',
            duration: 0.4,
            ease: 'power3.out'
          });
        };

        const onLeave = () => {
          gsap.to(heart, {
            opacity: 0,
            scale: 0.6,
            duration: 0.28,
            ease: 'power2.out'
          });

          gsap.to(card, {
            y: 0,
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            boxShadow: '',
            duration: 0.45,
            ease: 'power3.out',
            clearProps: 'boxShadow'
          });
        };

        const onClick = (event) => {
          const href = card.getAttribute('href');
          const pageLink = card.dataset.pageLink;
          if (!href && !pageLink) return;

          if (event.defaultPrevented) return;

          if (typeof window.navigate === 'function' && pageLink) {
            event.preventDefault();
            const hash = '#' + pageLink;
            window.navigate(hash);
            try {
              history.pushState(null, '', hash);
            } catch (_) {
              window.location.hash = hash;
            }
          }
        };

        card.addEventListener('pointerenter', onEnter);
        card.addEventListener('pointermove', onMove);
        card.addEventListener('pointerleave', onLeave);
        card.addEventListener('click', onClick);

        cleanups.push(() => {
          card.removeEventListener('pointerenter', onEnter);
          card.removeEventListener('pointermove', onMove);
          card.removeEventListener('pointerleave', onLeave);
          card.removeEventListener('click', onClick);
          heart.remove();
        });
      });
    };

    const useIdle = typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function';
    const handle = useIdle
      ? window.requestIdleCallback(applyMotion, { timeout: 500 })
      : window.setTimeout(applyMotion, 50);

    return () => {
      isActive = false;
      if (typeof window !== 'undefined') {
        if (useIdle) {
          window.cancelIdleCallback(handle);
        } else if (handle) {
          window.clearTimeout(handle);
        }
      }
      cleanups.forEach((cleanup) => cleanup());
      cleanups = [];
    };
  }, []);

  return null;
}
