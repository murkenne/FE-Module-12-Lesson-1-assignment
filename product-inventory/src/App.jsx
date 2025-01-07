import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewProductForm from './component/NewProductForm';
import ProductList from './component/ProductList';
import useInventory from './hook/useInventory';

function App() {
  const { products } = useInventory();

  return (
    <Container>
      <h1 className="my-4 text-center">Product Inventory</h1>

      {/* Add New Product Form */}
      <NewProductForm />

      {/* Display Product List */}
      <ProductList />

      {/* Display Individual Products in Grid */}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-3">
            <ProductCard
              name={product.name}
              price={product.price}
              category={product.category}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Individual Product Card Component
function ProductCard({ name, price, category }) {
  return (
    <div className="border p-3 rounded shadow-sm text-center">
      <h5>{name}</h5>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
    </div>
  );
}

export default App;
