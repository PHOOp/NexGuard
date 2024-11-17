// app/checkout/page.tsx
import CheckoutForm from '../../components/CheckoutForm';

export default function CheckoutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutForm />
    </div>
  );
}
