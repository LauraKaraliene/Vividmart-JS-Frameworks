import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown, Form, Button } from "react-bootstrap";
import styles from "./SearchBar.module.scss";

export default function SearchBar({ products }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredProducts = Array.isArray(products)
    ? products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Dropdown
      className={styles.searchContainer}
      show={query && filteredProducts.length > 0}
    >
      <div className="input-group">
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <Button className={styles.searchButton} type="button">
          <i className="bi bi-search"></i>
        </Button>
      </div>

      <Dropdown.Menu className={styles.resultsContainer}>
        {filteredProducts.map((product) => (
          <Dropdown.Item
            key={product.id}
            onClick={() => handleSelect(product.id)}
          >
            {product.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
