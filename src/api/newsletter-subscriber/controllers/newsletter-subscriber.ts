/**
 * newsletter-subscriber controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController(
    'api::newsletter-subscriber.newsletter-subscriber',
    ( { strapi } ) => ( {
        async create( ctx ) {
            const { token, ...data } = ctx.request.body.data;

            const isValid = await strapi
                .service( 'api::newsletter-subscriber.newsletter-subscriber' )
                .verifyCaptcha( token );

            if ( ! isValid ) {
                return ctx.badRequest( 'Invalid Captcha verification!' );
            }

            // Remove token and create subscriber using default core action
            ctx.request.body = { data };
            const response = await super.create(ctx);
      
            return response;
        }
    } )
);
