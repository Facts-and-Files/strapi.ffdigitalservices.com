/**
 * newsletter-subscriber service
 */

import { factories } from '@strapi/strapi';

interface CaptchaResponse {
  success: boolean;
}

export default factories.createCoreService(
    'api::newsletter-subscriber.newsletter-subscriber',
    ( { strapi } ) => ( {
        async verifyCaptcha( token: string ) {
            try {
                
                if ( ! token ) {
                    throw new Error( 'Captcha token missing' );
                }

                // Verify captcha
                const res = await fetch(
                    'https://hcaptcha.com/siteverify',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams( {
                            secret: process.env.HCAPTCHA_SECRET_KEY,
                            response: token
                        } )
                    }
                );

                const data = await res.json() as CaptchaResponse;

                if ( ! data.success ) {
                    throw new Error( 'Captcha verification failed' );
                }

                return data.success === true;

            } catch ( error ) {
                strapi.log.error( 'hCaptcha verification error:', error );
                return false;   
            }
        }
    } )
);
