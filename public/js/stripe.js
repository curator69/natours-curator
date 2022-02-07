import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KQH5ZSEgZPuDtVmvvnJItYc4XsgLbrb87ZapMnoJYz9vzlUNDle4QIdjf8zFpxPUKYPIeBv0zhtnsBemkVfULu900wF7o0BvE'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from api
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + charge credit card}
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
