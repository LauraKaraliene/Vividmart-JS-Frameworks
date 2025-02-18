import vividmart from "../assets/vividmart.jpg";
import styles from "./homeBanner.module.scss"; // Import SCSS file

export default function HomeBanner() {
  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <img src={vividmart} alt="VividMart Banner" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
