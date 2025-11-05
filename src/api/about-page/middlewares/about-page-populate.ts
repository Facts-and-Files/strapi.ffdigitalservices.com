/**
 * `landing-page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
    blocks: {
        on: {
            "blocks.hero": {
                populate: {
                    links: true,
                    image: {
                        fields: [
                            "alternativeText",
                            "url",
                            "formats",
                            "height",
                            "width",
                            "caption"
                        ]
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    },
                }
            },
            "blocks.hero-with-achievements": {
                populate: {
                    image: {
                        fields: [
                            "alternativeText",
                            "url",
                            "formats",
                            "height",
                            "width",
                            "caption"
                        ]
                    },
                    heroLinks: true,
                    achievements: true,
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    }
                }
            },
            "blocks.section-heading": true,
            "blocks.card-grid": {
                populate: {
                    cards: {
                        populate: {
                            link: true
                        }
                    },
                    link: true,
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    }
                }
            },
            "blocks.content-with-image": {
                populate: {
                    link: true,
                    image: {
                        fields: [
                            "alternativeText",
                            "url",
                            "formats",
                            "height",
                            "width",
                            "caption"
                        ]
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true
                        }
                    }
                }
            },
            "blocks.markdown": true,
            "blocks.person-card": {
                populate: {
                    image: {
                        fields: ["alternativeText", "url", "caption"]
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
                                fields: [
                                    "alternativeText",
                                    "url",
                                    "formats",
                                    "height",
                                    "width",
                                    "caption"
                                ]
                            },
                            author: true,
                            heading: true,
                        }
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    },
                }
            },
            "blocks.featured-projects": {
                populate: {
                    projectPosts: {
                        populate: {
                            image: {
                                fields:[
                                    "alternativeText",
                                    "url",
                                    "formats",
                                    "height",
                                    "width",
                                    "caption"
                                ]
                            }
                        }
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    }
                }
            },
            "blocks.team": {
                populate: {
                    teamMembers: {
                        populate: {
                            image: {
                                fields: ["alternativeText", "url", "caption"]
                            }
                        }
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    }
                }
            },
            "blocks.featured-partners": {
                populate: {
                    partners: {
                        populate: {
                            image: {
                                fields: ["alternativeText", "url", "caption"]
                            }
                        }
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    },
                    cta: true
                }
            },
            "blocks.quote-grid": {
                populate: {
                    quotes: {
                        populate: {
                            sourceImage: {
                                fields: ["alternativeText", "url"]
                            }
                        }
                    },
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true,
                        }
                    }
                }
            },
            "blocks.transcribathon-progress": {
                populate: {
                    heading: {
                        populate: {
                            headingStyle: true,
                            subHeadingStyle: true,
                            overHeadingStyle: true
                        }
                    },
                    achievements: true,
                    backgroundImage: {
                        fields: [
                            "alternativeText",
                            "url",
                            "formats",
                            "height",
                            "width",
                            "caption"
                        ]
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
        
        await next();
    };
};
