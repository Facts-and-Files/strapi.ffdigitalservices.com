/**
 * news-post router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::news-post.news-post', {
    config: {
        find: {
            middlewares: ["api::news-post.news-post-populate"]
        }
    }
});
