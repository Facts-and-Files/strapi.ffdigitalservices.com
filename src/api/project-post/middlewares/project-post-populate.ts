/**
 * `project-post-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    image: {
        fields: [
            "alternativeText",
            "url",
            "formats",
            "height",
            "width",
            "caption"
        ]
    }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        
        await next();
    };
};
