'use client';

import { useState } from 'react';

/** Copy-to-clipboard button for account numbers. */
export function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label}`}
      className="shrink-0 border border-white/20 px-3 py-1.5 font-body text-[11px] font-semibold uppercase tracking-widest text-bone transition-colors hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
