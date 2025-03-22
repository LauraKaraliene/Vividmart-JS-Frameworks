import useCartStore from "../store/useCartStore";
import CartCard from "../components/cart/CartCard";
import CartTotal from "../components/cart/CartTotal";
import { useNavigate } from "react-router-dom";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = () => {
  const { cart, removeFromCart, addToCart, deleteFromCart, clearCart } =
    useCartStore();

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (id) => {
    removeFromCart(id);
  };

  const handleRemove = (id) => {
    deleteFromCart(id);
  };

  const navigate = useNavigate();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  // Calculate totals
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const totalSavings = cart.reduce(
    (acc, item) => acc + (item.price - item.discountedPrice) * item.quantity,
    0
  );

  return (
    <div className="container-sm mx-auto p-20">
      <h2 className="mt-5 mb-3 text-center poppins">Your items</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
            />
          ))}
          <CartTotal
            totalPrice={totalPrice}
            totalSavings={totalSavings}
            itemCount={cart.length}
            onCheckout={handleCheckout}
          />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
