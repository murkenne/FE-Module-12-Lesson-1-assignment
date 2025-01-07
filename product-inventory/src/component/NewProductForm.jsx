import React, { useState } from 'react';
import useInventory from '../hook/useInventory';

function NewProductForm() {
  const { addProduct } = useInventory();

  // Local state for form inputs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  // Handle form submission
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

    // Clear form fields
    setName('');
    setPrice('');
    setCategory('');
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        {/* Product Name */}
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input 
            type="text" 
            id="productName"
            className="form-control"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter product name" 
          />
        </div>

        {/* Price */}
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input 
            type="number" 
            id="productPrice"
            className="form-control"
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            placeholder="Enter price" 
          />
        </div>

        {/* Category */}
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <input 
            type="text" 
            id="productCategory"
            className="form-control"
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            placeholder="Enter category" 
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-100">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
