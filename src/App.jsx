import { SearchProvider } from "./context/SearchContext";
import HomeBanner from "./components/homeBanner";
import ProductsList from "./components/ProductsList";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <SearchProvider>
        <HomeBanner />
        <ProductsList />
        <ScrollToTop />
      </SearchProvider>
    </ErrorBoundary>
  );
}
