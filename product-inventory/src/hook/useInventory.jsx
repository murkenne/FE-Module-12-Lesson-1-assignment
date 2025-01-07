import { useState } from 'react';

function useInventory() {
  // Initial list of products
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics' },
    { id: 3, name: 'Coffee Maker', price: 49.99, category: 'Home Appliances' },
    { id: 4, name: 'Running Shoes', price: 89.99, category: 'Sportswear' }
  ]);

  // Add a new product
  function addProduct(product) {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: Date.now() }
    ]);
  }

  // Remove a product by ID
  function removeProduct(productId) {
    setProducts((prevProducts) => 
      prevProducts.filter(product => product.id !== productId)
    );
  }

  return {
    products,
    addProduct,
    removeProduct,
  };
}

export default useInventory;
