'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { esc, readingTime, parseMonthYear, shuffleArray, JOURNAL_CARD_COLORS } from '../lib/utils';

/**
 * Journal essay reader modal.
 * Replaces openJournalModal / closeJournalModal from script.js.
 *
 * Props:
 *   essay: { title, tag, date, art, body } | null
 *   isOpen: boolean
 *   onClose: () => void
 */
export default function JournalModal({ essay, isOpen, onClose }) {
  // Body scroll lock
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  if (!isOpen || !essay) return null;

  return (
    <div
      className="journal-reader-modal is-active"
      id="journal-modal"
      aria-hidden="false"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="journal-modal-inner">
        <button
          className="journal-modal-close"
          onClick={onClose}
          aria-label="Close essay"
          data-close-journal-modal
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {essay.art && (
          <div
            className="journal-modal-art"
            dangerouslySetInnerHTML={{ __html: essay.art }}
          />
        )}

        <span className="modal-tag">{essay.tag}</span>
        <span className="modal-date">{essay.date}</span>
        <h2 className="modal-title">{essay.title}</h2>

        <div
          className="journal-modal-body"
          dangerouslySetInnerHTML={{ __html: essay.body }}
        />
      </div>
    </div>
  );
}
