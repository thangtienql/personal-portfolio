import type { ColorGroup } from '@/types';

export const COLOR_GROUPS: ColorGroup[] = [
  {
    id: 'background-surface',
    label: 'Background & Surface',
    colors: [
      { name: 'Primary Background', variable: '--bg-primary', hex: '#1f1f1f', usage: 1 },
      { name: 'Surface / Card', variable: '--surface', hex: '#252525', usage: 13 },
      { name: 'Mobile Menu Surface', hex: '#191919', usage: 1 },
    ],
  },
  {
    id: 'text',
    label: 'Text',
    colors: [
      { name: 'Primary Text', variable: '--text-primary', hex: '#ffffff', usage: 1 },
      { name: 'Secondary Text', variable: '--text-secondary', hex: '#999999', usage: 23 },
      { name: 'Muted Text', variable: '--text-muted', hex: '#777777', usage: 7 },
      { name: 'Faint / Footer Text', hex: '#555555', usage: 9 },
    ],
  },
  {
    id: 'accent',
    label: 'Accent',
    colors: [
      { name: 'Accent', variable: '--accent', hex: '#f5a524', usage: 1 },
      { name: 'Accent Hover', variable: '--accent-hover', hex: '#d97706', usage: 1 },
    ],
  },
  {
    id: 'border',
    label: 'Border',
    colors: [
      { name: 'Border', variable: '--border-color', hex: '#565656', usage: 6 },
      { name: 'Light Border', variable: '--border-light', hex: '#333333', usage: 15 },
    ],
  },
  {
    id: 'utilities',
    label: 'Utilities',
    colors: [{ name: 'Pure Black', hex: '#000000', usage: 1 }],
  },
];
