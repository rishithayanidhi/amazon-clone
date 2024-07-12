/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// My code

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51PbNhcJLkALkiINUVDappYrXafJedgI2Z9Y4J7RMtJkTOeMYiUoq2cZZxYnijyt0ezKkGHj7VL4KUp2u31NBvBPM00BsFeVMvz');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payment/create', async (request, response) => {
  const total = parseInt(request.query.total, 10);

  // Check if the total is a valid number and greater than zero
  if (isNaN(total) || total <= 0) {
    return response.status(400).send({
      error: 'Invalid amount. The amount must be a valid number greater than zero.',
    });
  }

  console.log('Payment Request Received for this amount >>> ', total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });

    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    response.status(500).send({
      error: 'Internal Server Error',
      details: error.message,
    });
  }
});

// Listen command
exports.api = onRequest(app);

//http://127.0.0.1:5001/challenge-57200/us-central1/api
