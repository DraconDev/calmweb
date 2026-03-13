/**
 * Themes for CalmWeb Super Reader
 */

export interface ReaderTheme {
  id: string;
  name: string;
  background: string;
  text: string;
  accent: string;
  isDark: boolean;
}

export const defaultTheme: ReaderTheme = {
  id: 'default',
  name: 'Light',
  background: '#ffffff',
  text: '#1f2937',
  accent: '#3b82f6',
  isDark: false,
};

export const darkTheme: ReaderTheme = {
  id: 'dark',
  name: 'Dark',
  background: '#111827',
  text: '#e5e7eb',
  accent: '#60a5fa',
  isDark: true,
};

export const sepiaTheme: ReaderTheme = {
  id: 'sepia',
  name: 'Sepia',
  background: '#f4ecd8',
  text: '#433422',
  accent: '#8b5a2b',
  isDark: false,
};

export const midnightTheme: ReaderTheme = {
  id: 'midnight',
  name: 'Midnight',
  background: '#0f172a',
  text: '#e2e8f0',
  accent: '#818cf8',
  isDark: true,
};

export const allThemes: ReaderTheme[] = [
  defaultTheme,
  darkTheme,
  sepiaTheme,
  midnightTheme,
];

export function getTheme(id: string): ReaderTheme {
  return allThemes.find((t) => t.id === id) || defaultTheme;
}

export function applyTheme(theme: ReaderTheme, container: HTMLElement): void {
  container.style.setProperty('--reader-bg', theme.background);
  container.style.setProperty('--reader-text', theme.text);
  container.style.setProperty('--reader-accent', theme.accent);
  container.setAttribute('data-theme', theme.id);
}