const asyncHandler = require('express-async-handler');
const dotenv = require('dotenv').config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


// @desc  Create a Payment
// @route POST /api/v1/stripes
// @access Public
const createStripe = asyncHandler(async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
            price_data: {
                currency: 'cad',
                product_data: {
                name: req.body.name,
                },
                unit_amount: (req.body.price*100)+100
            },
            quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000/payment-success/${req.body.userId}/${req.body.programId}`,
        cancel_url: `http://localhost:3000/programs`,
    });
    res.send(201,{url: session.url});
});

module.exports = {
    createStripe
}