/**
 * impressum-page router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::impressum-page.impressum-page', {
    config: {
        find: {
            middlewares: ["api::impressum-page.impressum-page-populate"]
        }
    }
} );
