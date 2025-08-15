// next-i18next configuration for Viral OS
import path from 'path';

export default {
  i18n: {
    defaultLocale: process.env.DEFAULT_LOCALE || 'ru',
    locales: ['en', 'ru'],
  },
  localePath: path.resolve('./locales'),
};
