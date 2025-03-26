import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./../Styles/createProducts.css";
import { fetchCategories } from "../../Store/slices/productSlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.products);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    category: "",
    brand: "",
    condition: "Any",
    stock: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = useCallback((e) => {
    const files = Array.from(e.target.files);
    if (files.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }
    const previews = files.map((file) => URL.createObjectURL(file));
    setFormData((prev) => ({ ...prev, images: files }));
    setImagePreviews(previews);
  }, []);

  const removeImage = (index) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setImagePreviews(updatedPreviews);
    setFormData((prev) => ({ ...prev, images: updatedImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.images.length > 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }
    dispatch(createProduct(formData));
    setFormData({
      name: "",
      description: "",
      price: "",
      discount: "",
      category: "",
      brand: "",
      condition: "Any",
      stock: "",
      images: [],
    });
    setImagePreviews([]);
  };

  return (
    <div className="container mt-4">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Discount</label>
          <input type="number" className="form-control" name="discount" value={formData.discount} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Categories</label>
          <select className="form-select" name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))
            ) : (
              <option disabled>No categories found</option>
            )}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Brand</label>
          <input type="text" className="form-control" name="brand" value={formData.brand} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Condition</label>
          <select className="form-select" name="condition" value={formData.condition} onChange={handleChange}>
            <option value="Any">Any</option>
            <option value="New">Brand new</option>
            <option value="Old Items">Old items</option>
            <option value="Refurbished">Refurbished</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input type="number" className="form-control" name="stock" value={formData.stock} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Images (Max: 5)</label>
          <input type="file" className="form-control" multiple accept="image/*" onChange={handleFileChange} required />
        </div>

        <div className="mb-3 d-flex flex-wrap">
          {imagePreviews.map((src, index) => (
            <div key={index} className="position-relative me-2">
              <img src={src} alt="Preview" className="border rounded" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <button type="button" className="btn btn-danger btn-sm position-absolute top-0 end-0" onClick={() => removeImage(index)}>✖</button>
            </div>
          ))}
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Creating..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
