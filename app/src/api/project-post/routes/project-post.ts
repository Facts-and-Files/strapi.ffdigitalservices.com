/**
 * project-post router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter( 'api::project-post.project-post', {
    config: {
        find: {
            middlewares: ['api::project-post.project-post-populate']
        }
    }
} );
