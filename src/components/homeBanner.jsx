import { useSearch } from "../context/SearchContext";
import vividmart from "../assets/vividmart.jpg";
import SearchBar from "./SearchBar";
import styles from "./HomeBanner.module.scss";

export default function HomeBanner() {
  const products = useSearch();

  return (
    <div
      className={`container-fluid position-relative text-center ${styles.banner}`}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-xl-6 col-lg-8 col-md-10 position-relative">
          <img
            src={vividmart}
            alt="VividMart Banner"
            className="img-fluid shadow"
          />
          <div
            className={`position-absolute top-50 start-50 w-100 z-1 ${styles.searchBar}`}
          >
            <SearchBar products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
