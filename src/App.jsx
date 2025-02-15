import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to Our Store</h1>
      <p>Find the best products at the best prices.</p>

      <div className="featured-products">
        <h2>Featured Products</h2>
        {/* You can later map products here */}
        <div className="product">
          <p>Product 1 - $99</p>
        </div>
        <div className="product">
          <p>Product 2 - $149</p>
        </div>
      </div>
    </div>
  );
}

export default App;
