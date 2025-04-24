import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../Styles/viewProducts.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, fetchProducts } from "../../Store/slices/productSlice";
import { token } from "../../Pages/ProductDetailsPage";
import { calculateRating } from "../../components/ProductList/ProductList";
import camera from './../../assets/Image/tech/1.png'

const ViewProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page: 1, limit: 10 }));
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/admin/create/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const res = await fetch(`${BASE_URL}/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        alert("Error deleting product");
      } else {
        dispatch(fetchProducts({ page: 1, limit: 10 }));
      }
    }
  };

  return (
    <div className="view-product-container">
      <div className="top-header">
        <h4>All Product List</h4>
        <div className="add_btn" onClick={() => navigate("/admin/create")}>
          Add Product
        </div>
      </div>

      <div className="products-header">
        <div className="header-name">Product Name</div>
        <div className="header-price">Price</div>
        <div className="header-stock">Stock</div>
        <div className="header-category">Category</div>
        <div className="header-rating">Rating</div>
        <div className="actions">Actions</div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="products-list">
          {products.map((product) => (
            <div key={product._id} className="product-item">
              <div className="image-and-name">
              <div className="product-img">
                <img src={camera} alt={product.name} />
              </div>
              <div className="product-name">{product.name}</div>
              </div>
              <div className="product-price">${product.price}</div>
              <div className="product-stock">{product.stock} Items Left</div>
              <div className="product-category">{product.category.name}</div>
              <div className="product-rating">
                <FaStar /> {calculateRating()}
              </div>
              <div className="actions">
                <Button variant="light">
                  <FaEye />
                </Button>
                <Button variant="warning" onClick={() => handleEdit(product._id)}>
                  <FaEdit />
                </Button>
                <Button variant="danger" onClick={() => handleDelete(product._id)}>
                  <FaTrash />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewProducts;
