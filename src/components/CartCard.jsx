import { FaTrash } from "react-icons/fa";
import styles from "./CartCard.module.scss";

const CartCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div
      className={`d-flex gap-3 my-2 mx-auto background-light p-2 shadow rounded-3 align-items-center ${styles.cartItem}`}
    >
      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          className="w-100 h-100 object-fit-cover"
          src={item.image.url}
          alt={item.image.alt}
        />
      </div>

      {/* Details */}
      <div className="poppins d-flex flex-column">
        <h3 className="text-uppercase fs-6">{item.title}</h3>
        <p>${item.discountedPrice.toFixed(2)}</p>

        {/* Quantity Controls */}
        <div
          className={`d-flex align-items-center gap-2 mt-2 ${styles.controls}`}
        >
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item)}>+</button>

          {/* Remove Icon */}
          <FaTrash
            className={styles.deleteIcon}
            onClick={() => onRemove(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
