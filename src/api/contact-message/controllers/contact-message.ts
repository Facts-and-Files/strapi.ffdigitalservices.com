/**
 * contact-message controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::contact-message.contact-message',
    ( { strapi } ) => ( {
        async create( ctx ) {
            const { token, ...data } = ctx.request.body.data;

            const isValid = await strapi
                .service( 'api::contact-message.contact-message' )
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
