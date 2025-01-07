import React, { createContext, useContext, useState } from 'react';

// Create Context
const InventoryContext = createContext();

// Provider Component
export function InventoryProvider({ children }) {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: 2, name: 'Wireless Headphones', price: 199.99, category: 'Electronics' },
    { id: 3, name: 'Coffee Maker', price: 49.99, category: 'Home Appliances' },
    { id: 4, name: 'Running Shoes', price: 89.99, category: 'Sportswear' }
  ]);

  // Add Product
  function addProduct(product) {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...product, id: Date.now() }
    ]);
  }

  // Remove Product
  function removeProduct(productId) {
    setProducts((prevProducts) =>
      prevProducts.filter(product => product.id !== productId)
    );
  }

  return (
    <InventoryContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </InventoryContext.Provider>
  );
}

// Custom Hook
export function useInventory() {
  return useContext(InventoryContext);
}
