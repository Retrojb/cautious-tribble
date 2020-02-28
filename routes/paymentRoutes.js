const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
 
module.exports = app => {

    app.post('/api/stripe', (req, res) => {
        console.log(req.body)
    });
};


// // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/accept-a-payment-charges#web-create-token
// stripe.charges.create(
//   {
//     amount: 2000,
//     currency: 'usd',
//     source: 'tok_visa',
//     description: 'My First Test Charge (created for API docs)',
//   },
//   function(err, charge) {
//     // asynchronously called
//   }
// );