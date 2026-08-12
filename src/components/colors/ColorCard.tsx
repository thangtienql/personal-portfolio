'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import type { ColorToken } from '@/types';

function isLight(hex: string): boolean {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 140;
}

export default function ColorCard({ token, idx }: { token: ColorToken; idx: number }) {
  const [copied, setCopied] = useState(false);
  const light = isLight(token.hex);

  async function copyHex() {
    try {
      await navigator.clipboard.writeText(token.hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ScrollAnimation animation="fade_from_bottom" delay={idx * 0.08}>
      <div className="group hover:border-accent overflow-hidden rounded-[20px] border border-[#333] bg-[#252525] transition-colors">
        <div className="relative h-28 sm:h-36" style={{ backgroundColor: token.hex }}>
          <span
            className={`absolute top-2 right-2 rounded-full border px-2 py-0.5 text-[11px] font-medium ${
              light
                ? 'border-black/20 bg-black/10 text-black/70'
                : 'border-white/20 bg-white/10 text-white/80'
            }`}
          >
            {token.usage}×
          </span>
        </div>

        <div className="p-4">
          <p className="text-sm font-medium text-white">{token.name}</p>
          {token.variable && (
            <p className="mt-0.5 font-mono text-[12px] text-[#999]">{token.variable}</p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <code className="font-mono text-[13px] text-[#999] uppercase">{token.hex}</code>
            <button
              onClick={copyHex}
              aria-label={`Copy ${token.hex}`}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] transition-colors ${
                copied
                  ? 'border-accent bg-accent text-black'
                  : 'hover:border-accent hover:text-accent border-[#565656] text-[#999]'
              }`}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
