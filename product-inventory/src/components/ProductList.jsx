import React from 'react';
import { useInventory } from '../context/InventoryContext';
import { Table, Button, Container } from 'react-bootstrap';

function ProductList() {
  const { products, removeProduct } = useInventory();

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Product List</h2>
      {products.length === 0 ? (
        <p className="text-center text-muted">No products available.</p>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeProduct(product.id)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default ProductList;
