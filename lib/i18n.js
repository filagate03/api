// Helper utilities for language switching
import { i18n } from 'next-i18next';

export function changeLanguage(lang) {
  if (i18n) i18n.changeLanguage(lang);
}
