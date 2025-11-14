/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    banner: {
        populate: {
            link: true
        },
    },
    header: {
        populate: {
            logo: {
                populate: {
                    image: {
                        fields: ["alternativeText", "url"]
                    },
                }
            },
            navItems: true,
        }
    },
    footer: {
        populate: {
            navItemsHeading: {
                populate: {
                    headingStyle: true,
                },
            },
            navItems: true,
            socialLinks: {
                populate: {
                    image: {
                        fields: ["alternativeText","url"]
                    }
                },
            },
            legalLinksHeading: {
                populate: {
                    headingStyle: true,
                }
            },
            legalLinks: true,
            logo: {
                populate: {
                    image: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            platformLinksHeading: {
                populate: {
                    headingStyle: true,
                },
            },
            platformLinks: true,
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
