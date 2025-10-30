/**
 * `news-post-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    featuredImage: {
        fields: [
            "alternativeText",
            "url",
            "formats",
            "height",
            "width",
            "caption"
        ]
    },
    author: {
        populate: {
            image: {
                fields: ["alternativeText", "url", "caption"]
            },
            newsPosts: {
                fields: ["documentId", "title"]
            }
        }
    },
    contentTags: true,
    heading: {
        populate: {
            headingStyle: true,
        }
    }
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
    // Add your own logic here.
    return async (ctx, next) => {
        ctx.query.populate = populate;
        
        await next();
    };
};
