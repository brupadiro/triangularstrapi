'use strict';

/**
 *  payment controller
 */
const stripe = require('stripe')('sk_test_51MbDe6BUcrgsstk9C8EUEaYpO9xfvnJvwIfmTcifizWXyxPug0B24q2WCKI7KJUYf83sc13XwNOrrm2WTVx3noaq00obolkLdJ');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::payment.payment',({ strapi }) => ({
    async find(ctx) {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Subscription',
                  },
                  unit_amount: 2000,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: 'https://triangular.media/success',
            cancel_url: 'https://triangular.media/cancel',
          });
        
          return session
        
    }
}));
