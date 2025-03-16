// import styles from "./SingleProductImage.module.scss";

const SingleProductImage = ({ image }) => {
  return (
    <img
      src={image?.url}
      alt={image?.alt || "Product Image"}
      className="w-100 rounded-3 object-fit-cover"
    />
  );
};

export default SingleProductImage;
