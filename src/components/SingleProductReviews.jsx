// import styles from "./SingleProductReviews.module.scss";
import RatingStars from "./RatingStars";

const SingleProductReviews = ({ reviews }) => {
  return (
    <div className={`mt-5 poppins ${styles.reviews}`}>
      <h4 className="border-bottom pb-3">Reviews</h4>
      {reviews?.length ? (
        reviews.map((review, index) => (
          <div
            key={index}
            className={`d-flex flex-column border-bottom py-3 ${styles.reviewItem}`}
          >
            <strong className={`pb-2 fw-bold fs-6 ${styles.username}`}>
              {review.username}
            </strong>
            <RatingStars rating={review.rating} />
            <p className={`fs-6 ${styles.comment}`}>{review.description}</p>
          </div>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default SingleProductReviews;
