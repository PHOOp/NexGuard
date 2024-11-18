// components/CheckoutForm.tsx
'use client';
import { useCart } from '../context/CardContext';
export default function CheckoutForm() {
  const { removeFromCart } = useCart();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-bold">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border rounded px-2 py-1 text-gray-700" // Changed font color
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-bold">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="w-full border rounded px-2 py-1 text-gray-700" // Changed font color
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => removeFromCart(2)}
      >
        Place Order
      </button>
    </form>
  );
}
