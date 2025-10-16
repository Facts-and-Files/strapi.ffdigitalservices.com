/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';
import projectPost from '../../project-post/controllers/project-post';

const populate = {
    blocks: {
        on: {
            "blocks.hero": {
                populate: {
                    links: true,
                    image: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            "blocks.section-heading": true,
            "blocks.card-grid": {
                populate: {
                    cards: true
                }
            },
            "blocks.content-with-image": {
                populate: {
                    link: true,
                    image: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            "blocks.markdown": true,
            "blocks.person-card": {
                populate: {
                    image: {
                        fields: ["alternativeText", "url"]
                    }
                }
            },
            "blocks.faqs": {
                populate: {
                    faq: true
                }
            },
            "blocks.newsletter": true,
            "blocks.featured-news": {
                populate: {
                    newsPosts: {
                        populate: {
                            featuredImage: {
                                fields: ["alternativeText", "url"]
                            },
                            author: true,
                        }
                    }
                }
            },
            "blocks.featured-projects": {
                populate: {
                    projectPosts: {
                        populate: {
                            image: {
                                fields:["alternativeText", "url"]
                            }
                        }
                    }
                }
            },
            "blocks.team": {
                populate: {
                    teamMembers: {
                        populate: {
                            image: {
                                fields: ["alternativeText", "url"]
                            }
                        }
                    }
                }
            },
            "blocks.featured-partners": {
                populate: {
                    partners: {
                        populate: {
                            image: {
                                fields: ["alternativeText", "url"]
                            }
                        }
                    }
                }
            }
        }
    }
}

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query.populate = populate;
    strapi.log.info('In landing-page-populate middleware.');

    await next();
  };
};
