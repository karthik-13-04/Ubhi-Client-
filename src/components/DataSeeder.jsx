'use client';

import { useEffect } from 'react';
import { seedDatabase } from '../lib/defaultData';

/**
 * Invisible component that seeds localStorage with default data
 * on the first visit. Replaces the seeding block at the bottom of script.js.
 * Mount this once in the root layout.
 */
export default function DataSeeder() {
  useEffect(() => {
    seedDatabase();
  }, []);

  return null;
}
