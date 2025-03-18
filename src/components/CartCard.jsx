import { FaTrash } from "react-icons/fa";
import styles from "./CartCard.module.scss";

const CartCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      {/* Image */}
      <div className={styles.imageContainer}>
        <img src={item.image.url} alt={item.image.alt} />
      </div>

      {/* Details */}
      <div className={styles.productDetails}>
        <h3 className="text-uppercase fs-6">{item.title}</h3>
        <p>${item.discountedPrice.toFixed(2)}</p>

        {/* Quantity Controls */}
        <div className={styles.controls}>
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

// import { FaTrash } from "react-icons/fa";
// import styles from "./CartCard.module.scss";

// const CartCard = ({ item, onIncrease, onDecrease, onRemove }) => {
//   return (
//     <div className={styles.cartItem}>
//       {/* Image */}
//       <div className={styles.imageContainer}>
//         <img src={item.image.url} alt={item.image.alt} />
//       </div>

//       {/* Details */}
//       <div className={styles.productDetails}>
//         <h4>{item.title}</h4>
//         <p>${item.discountedPrice.toFixed(2)}</p>

//         {/* Quantity Controls */}
//         <div className={styles.controls}>
//           <button onClick={() => onDecrease(item.id)}>-</button>
//           <span>{item.quantity}</span>
//           <button onClick={() => onIncrease(item)}>+</button>
//           <span className={styles.price}>
//             ${(item.discountedPrice * item.quantity).toFixed(2)}
//           </span>
//           <FaTrash
//             className={styles.deleteIcon}
//             onClick={() => onRemove(item.id)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartCard;
