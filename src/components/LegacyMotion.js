'use client';

import { useEffect } from 'react';

const GOLD = '#b68a3e';
const TERRA = '#a8442f';
const TEAL = '#5e7e72';
const INK = '#3a2e22';

function dividerSvg(kind) {
  const center =
    kind === 'snail'
      ? `<g transform="translate(135 6) scale(0.34)">
          <circle cx="44" cy="30" r="18" fill="#F6EFDA" stroke="${INK}" stroke-width="2.4"></circle>
          <path d="M44 30 c 10 0 12 -10 2 -12 c -12 -3 -15 10 -3 13 c 15 5 18 -11 5 -17" fill="none" stroke="${TERRA}" stroke-width="2"></path>
          <path d="M14 52 q 2 9 14 9 q 30 2 46 -3 q 11 -3 11 -12" fill="none" stroke="${INK}" stroke-width="2.4" stroke-linecap="round"></path>
        </g>`
      : kind === 'star'
        ? `<path d="M150 13 l2.88 6.12 l6.12 2.88 l-6.12 2.88 l-2.88 6.12 l-2.88 -6.12 l-6.12 -2.88 l6.12 -2.88 z" fill="${GOLD}"></path>`
        : `<g transform="translate(150 22)"><circle cx="0" cy="0" r="7" fill="none" stroke="${GOLD}" stroke-width="1"></circle></g>`;

  return `<svg viewBox="0 0 300 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M28 22 C 70 14 104 14 128 22" fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-linecap="round" opacity="0.75"></path>
    <path d="M172 22 C 196 30 230 30 272 22" fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-linecap="round" opacity="0.75"></path>
    <circle cx="20" cy="22" r="1.6" fill="${GOLD}"></circle>
    <circle cx="280" cy="22" r="1.6" fill="${GOLD}"></circle>
    ${center}
  </svg>`;
}

function postmarkSvg() {
  return `<svg viewBox="0 0 116 116" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="none" stroke="${TEAL}" stroke-width="2.2" opacity="0.85">
      <circle cx="58" cy="58" r="46"></circle>
      <circle cx="58" cy="58" r="36"></circle>
      <path d="M22 50 q 36 -10 72 0 M22 58 q 36 -10 72 0 M22 66 q 36 -10 72 0"></path>
    </g>
    <text x="58" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="9" fill="${TEAL}" letter-spacing="1">UBHI · LONDON</text>
    <text x="58" y="84" text-anchor="middle" font-family="Georgia, serif" font-style="italic" font-size="11" fill="${TEAL}">posted</text>
  </svg>`;
}

function waxSvg() {
  return `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g transform="translate(32 32)">
      <circle r="28" fill="${TERRA}"></circle>
      <circle r="18" fill="none" stroke="#7c2a20" stroke-width="1.4"></circle>
      <path d="M0 -10 L3 -3 L10 0 L3 3 L0 10 L-3 3 L-10 0 L-3 -3 Z" fill="#7c2a20"></path>
    </g>
  </svg>`;
}

export default function LegacyMotion() {
  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const cleanups = [];

    const normalizeTickerSpeeds = () => {
      const pxPerSec = 45;
      const tracks = document.querySelectorAll(
        '.workshops-ticker-track, .shop-ticker-track, .snail-mail-ticker-track, .journal-ticker-track, .art-ticker-track'
      );
      tracks.forEach((track) => {
        const width = track.getBoundingClientRect().width;
        if (width > 4) track.style.animationDuration = `${(width / pxPerSec).toFixed(1)}s`;
      });
    };

    const drawBotanicals = () => {
      const draws = Array.from(document.querySelectorAll('.draw'));
      if (!draws.length) return;

      draws.forEach((svg) => {
        const strokes = svg.querySelectorAll('path, line, polyline, ellipse, circle');
        strokes.forEach((el) => {
          let len = 320;
          try {
            len = el.getTotalLength() || 320;
          } catch {}
          el.style.setProperty('--len', Math.ceil(len));
        });
      });

      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const strokes = entry.target.querySelectorAll('path, line, polyline, ellipse, circle');
          strokes.forEach((el, index) => {
            el.style.transitionDelay = `${index * 0.16}s`;
          });
          entry.target.classList.add('is-drawn');
          io.unobserve(entry.target);
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

      draws.forEach((d) => io.observe(d));
      cleanups.push(() => io.disconnect());
    };

    const heroParallax = () => {
      const hero = document.querySelector('#page-home .hero');
      if (!hero || !finePointer) return;
      const layers = Array.from(hero.querySelectorAll('[data-depth]'));
      if (!layers.length) return;

      let tx = 0;
      let ty = 0;
      let cx = 0;
      let cy = 0;
      let raf = 0;

      const loop = () => {
        cx += (tx - cx) * 0.08;
        cy += (ty - cy) * 0.08;
        layers.forEach((layer) => {
          const depth = Number(layer.getAttribute('data-depth')) || 10;
          layer.style.translate = `${-cx * depth}px ${-cy * depth}px`;
        });
        if (Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001) {
          raf = requestAnimationFrame(loop);
        } else {
          raf = 0;
        }
      };

      const onMove = (event) => {
        const rect = hero.getBoundingClientRect();
        tx = (event.clientX - rect.left) / rect.width - 0.5;
        ty = (event.clientY - rect.top) / rect.height - 0.5;
        if (!raf) raf = requestAnimationFrame(loop);
      };

      const onLeave = () => {
        tx = 0;
        ty = 0;
        if (!raf) raf = requestAnimationFrame(loop);
      };

      hero.addEventListener('pointermove', onMove);
      hero.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        hero.removeEventListener('pointermove', onMove);
        hero.removeEventListener('pointerleave', onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    };

    const driftMotes = () => {
      const count = window.innerWidth < 760 ? 7 : 16;
      const motes = [];
      let width = window.innerWidth;
      let height = window.innerHeight;
      let raf = 0;

      for (let i = 0; i < count; i += 1) {
        const mote = document.createElement('div');
        mote.className = 'mote';
        const size = 2 + Math.random() * 4;
        mote.style.width = `${size.toFixed(1)}px`;
        mote.style.height = `${size.toFixed(1)}px`;
        mote.style.opacity = (0.18 + Math.random() * 0.4).toFixed(2);
        document.body.appendChild(mote);
        motes.push({
          el: mote,
          x: Math.random() * width,
          y: Math.random() * height,
          vy: -(0.08 + Math.random() * 0.22),
          ph: Math.random() * Math.PI * 2,
          amp: 0.2 + Math.random() * 0.6,
        });
      }

      const tick = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        motes.forEach((mote) => {
          mote.y += mote.vy;
          mote.ph += 0.01;
          mote.x += Math.sin(mote.ph) * mote.amp;
          if (mote.y < -10) {
            mote.y = height + 10;
            mote.x = Math.random() * width;
          }
          mote.el.style.transform = `translate(${mote.x.toFixed(1)}px, ${mote.y.toFixed(1)}px)`;
        });
        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
      cleanups.push(() => {
        if (raf) cancelAnimationFrame(raf);
        motes.forEach((mote) => mote.el.remove());
      });
    };

    const deskLight = () => {
      if (!finePointer) return;
      const glow = document.createElement('div');
      glow.id = 'desk-light';
      glow.style.cssText =
        'position:fixed;inset:0;z-index:2;pointer-events:none;mix-blend-mode:soft-light;opacity:0;transition:opacity .6s ease;';
      document.body.appendChild(glow);

      let tx = window.innerWidth / 2;
      let ty = window.innerHeight / 2;
      let cx = tx;
      let cy = ty;
      let raf = 0;

      const loop = () => {
        cx += (tx - cx) * 0.12;
        cy += (ty - cy) * 0.12;
        glow.style.background = `radial-gradient(240px circle at ${cx}px ${cy}px, rgba(255,244,214,.85), transparent 70%)`;
        if (Math.abs(tx - cx) > 0.3 || Math.abs(ty - cy) > 0.3) {
          raf = requestAnimationFrame(loop);
        } else {
          raf = 0;
        }
      };

      const onMove = (event) => {
        tx = event.clientX;
        ty = event.clientY;
        glow.style.opacity = '0.55';
        if (!raf) raf = requestAnimationFrame(loop);
      };
      const onOut = () => {
        glow.style.opacity = '0';
      };

      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerout', onOut);
      cleanups.push(() => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerout', onOut);
        if (raf) cancelAnimationFrame(raf);
        glow.remove();
      });
    };

    const placeDividers = () => {
      const home = document.getElementById('page-home');
      if (!home || home.dataset.embDiv) return;
      home.dataset.embDiv = '1';
      const kinds = ['seed', 'star', 'snail', 'seed', 'star', 'snail'];
      const sections = Array.from(home.querySelectorAll(':scope > section'));
      let index = 0;
      sections.forEach((section) => {
        if (section.classList.contains('hero')) return;
        const divider = document.createElement('div');
        divider.className = 'ubhi-divider';
        divider.setAttribute('aria-hidden', 'true');
        divider.innerHTML = dividerSvg(kinds[index % kinds.length]);
        section.parentNode.insertBefore(divider, section);
        index += 1;
      });
    };

    const enhanceForms = () => {
      const onSubmit = (event) => {
        const form = event.target;
        if (!(form instanceof HTMLFormElement)) return;
        if (!form.matches('.subscribe-form') && !form.querySelector('input[type="email"]')) return;
        if (getComputedStyle(form).position === 'static') form.style.position = 'relative';
        const mark = document.createElement('div');
        mark.className = 'ubhi-postmark';
        mark.setAttribute('aria-hidden', 'true');
        mark.innerHTML = postmarkSvg();
        mark.style.left = '50%';
        mark.style.top = '50%';
        form.appendChild(mark);
        window.setTimeout(() => mark.remove(), 2600);
      };

      const onClick = (event) => {
        const button = event.target.closest('.nav-cta, .button-primary, .snail-hero-subscribe');
        if (!button) return;
        const rect = button.getBoundingClientRect();
        const wax = document.createElement('div');
        wax.className = 'ubhi-wax';
        wax.setAttribute('aria-hidden', 'true');
        wax.innerHTML = waxSvg();
        wax.style.left = `${rect.right - 6}px`;
        wax.style.top = `${rect.top + rect.height / 2}px`;
        document.body.appendChild(wax);
        window.setTimeout(() => wax.remove(), 700);
      };

      document.addEventListener('submit', onSubmit, true);
      document.addEventListener('click', onClick, true);
      cleanups.push(() => {
        document.removeEventListener('submit', onSubmit, true);
        document.removeEventListener('click', onClick, true);
      });
    };

    normalizeTickerSpeeds();
    drawBotanicals();
    heroParallax();
    driftMotes();
    deskLight();
    placeDividers();
    enhanceForms();

    const onResize = () => normalizeTickerSpeeds();
    window.addEventListener('resize', onResize, { passive: true });
    cleanups.push(() => window.removeEventListener('resize', onResize));

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
