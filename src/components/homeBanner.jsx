import { useSearch } from "../context/SearchContext";
import vividmart from "../assets/vividmart.jpg";
import SearchBar from "./SearchBar";
import styles from "./HomeBanner.module.scss";

export default function HomeBanner() {
  const products = useSearch();

  return (
    <div className={`container-fluid ${styles.banner}`}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 position-relative">
          <img src={vividmart} alt="VividMart Banner" className="img-fluid" />
          <div className={styles.searchBar}>
            <SearchBar products={products} />
          </div>
        </div>
      </div>
    </div>
  );
}
