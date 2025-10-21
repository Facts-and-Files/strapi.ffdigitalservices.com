import type { StrapiApp } from '@strapi/strapi/admin';
import MenuLogo from './extensions/ffds-logo.svg';
import Favicon from './extensions/favicon.png';

export default {
    config: {
        locales: [
            // 'ar',
            // 'fr',
            // 'cs',
            // 'de',
            // 'dk',
            // 'es',
            // 'he',
            // 'id',
            // 'it',
            // 'ja',
            // 'ko',
            // 'ms',
            // 'nl',
            // 'no',
            // 'pl',
            // 'pt-BR',
            // 'pt',
            // 'ru',
            // 'sk',
            // 'sv',
            // 'th',
            // 'tr',
            // 'uk',
            // 'vi',
            // 'zh-Hans',
            // 'zh',
        ],
        head: {
            favicon: Favicon
        },
        menu: {
            logo: MenuLogo
        },
        auth: {
            logo: MenuLogo
        }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
