'use client';

export default function SiteRuntimeBridge() {
  // We have migrated to native Next.js routing, 
  // so we don't need the hash interception bridge anymore.
  return null;
}
