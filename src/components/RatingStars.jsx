import React from "react";
import styles from "./RatingStars.module.scss";

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <span className={styles.stars}>
      {"★".repeat(fullStars)}
      {"☆".repeat(emptyStars)}
      <span className={styles.ratingNumber}> ({rating}/5)</span>
    </span>
  );
};

export default RatingStars;
