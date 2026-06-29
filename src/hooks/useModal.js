'use client';

import { useState, useCallback, useEffect } from 'react';

/**
 * React hook for modal open/close state.
 *
 * Usage:
 *   const { isOpen, payload, open, close } = useModal();
 *   open({ workshopName: 'Yoga' });  // pass any payload
 *   close();
 *
 * Automatically locks body scroll when open, and handles Escape key.
 */
export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState(null);

  const open = useCallback((data = null) => {
    setPayload(data);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setPayload(null);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key to close
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  return { isOpen, payload, open, close };
}
