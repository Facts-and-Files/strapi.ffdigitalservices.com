import type { StrapiApp } from '@strapi/strapi/admin';
import { Book } from '@strapi/icons';
import MenuLogo from './extensions/ffds-logo.svg';
import Favicon from './extensions/favicon.png';

const TimesheetPage = async () => {
    const component = await import(
        /* webpackChunkName: "my-custom-page" */ './pages/TimesheetPage'
    );
    return component;
}

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
  register(app: StrapiApp ) {
    app.addMenuLink( {
        to: '/timesheet',
        icon: Book,
        intlLabel: {
            id: 'custom.timesheet',
            defaultMessage: 'Timesheet'
        },
        Component: TimesheetPage,
        permissions: []
    } )
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
