import useCartStore from "../store/useCartStore";
import styles from "./Cart.module.scss";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useCartStore();

  const handleIncrease = (product) => {
    addToCart(product);
  };

  const handleDecrease = (id) => {
    removeFromCart(id);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const navigate = useNavigate();
  const { clearCart } = useCartStore();

  const handleCheckout = () => {
    clearCart();
    navigate("/checkout-success");
  };

  // Calculate totals
  const totalPrice = cart.reduce((acc, item) => acc + item.discountedPrice, 0);
  const totalSavings = cart.reduce(
    (acc, item) => acc + (item.price - item.discountedPrice),
    0
  );

  return (
    <div className="container-sm mx-auto p-20">
      <h2>Your items</h2>

      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              {/* Image */}
              <div className={styles.imageContainer}>
                <img src={item.image.url} alt={item.image.alt} />
              </div>

              {/* Details */}
              <div className={styles.productDetails}>
                <h3>{item.title}</h3>
                <p>${item.discountedPrice.toFixed(2)}</p>

                {/* Quantity Controls */}
                <div className={styles.controls}>
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <span>{cart.filter((i) => i.id === item.id).length}</span>
                  <button onClick={() => handleIncrease(item)}>+</button>
                  <span className={styles.price}>
                    $
                    {(
                      item.discountedPrice *
                      cart.filter((i) => i.id === item.id).length
                    ).toFixed(2)}
                  </span>
                  <FaTrash
                    className={styles.deleteIcon}
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Summary Section */}
          <div className={styles.summary}>
            <h2>Your total</h2>
            <div className={styles.summaryDetails}>
              <p>Items: {cart.length}</p>
              <p>Amount saved: - ${totalSavings.toFixed(2)}</p>
              <p>
                <strong>Total: ${totalPrice.toFixed(2)}</strong>
              </p>
              <button
                className={styles.checkoutButton}
                onClick={handleCheckout}
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <p>Your cart is empty.</p>
          <button onClick={() => navigate("/")}>Return to Store</button>
        </>
      )}
    </div>
  );
};

export default Cart;
