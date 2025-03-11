import { SearchProvider } from "./context/SearchContext";
import HomeBanner from "./components/homeBanner";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <SearchProvider>
      <HomeBanner />
      <ProductsList />
    </SearchProvider>
  );
}
