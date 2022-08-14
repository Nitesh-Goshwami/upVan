import { URL } from "../features/cart/cartSlice";

export default async function displayRazorpay() {
  const data = await fetch(URL + "/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    currency: data.currency,
    amount: data.amount,
    name: "Learn Code Online",
    description: "Wallet Transaction",
    image: URL + "/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "souvik dutta",
      email: "souvik@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
