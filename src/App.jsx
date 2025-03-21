import { SearchProvider } from "./context/SearchContext";
import HomeBanner from "./components/homeBanner";
import ProductsList from "./components/ProductsList";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <SearchProvider>
      <HomeBanner />
      <ProductsList />
      <ScrollToTop />
    </SearchProvider>
  );
}
