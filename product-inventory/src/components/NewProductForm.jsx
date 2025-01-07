import React, { useState } from 'react';
import { useInventory } from '../context/InventoryContext';

function NewProductForm() {
  const { addProduct } = useInventory();

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !price || !category) {
      alert('Please fill in all fields.');
      return;
    }

    addProduct({
      name,
      price: parseFloat(price),
      category,
    });

    setName('');
    setPrice('');
    setCategory('');
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Product</button>
      </form>
    </div>
  );
}

export default NewProductForm;
