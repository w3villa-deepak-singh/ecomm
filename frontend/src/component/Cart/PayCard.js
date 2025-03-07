import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment.js";


const stripeKey = process.env.REACT_APP_STRIPE_API_KEY;

if (!stripeKey) {
  console.error("Stripe API Key is missing! Check your .env file.");
}

const stripePromise = loadStripe(stripeKey);


const PayCard = () => {
  return (
    <Elements stripe={stripePromise}>
      <Payment />
    </Elements>
  );
};

export default PayCard;