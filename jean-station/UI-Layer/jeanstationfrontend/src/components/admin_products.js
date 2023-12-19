import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_Style.css';
import Footer from "./Footer";

function AdminProducts() {
  const [gender, setGender] = useState("men");
  const [productName, setProductName] = useState("");
  const [productSize, setProductSize] = useState("");
  const [productColor, setProductColor] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productId, setProductId] = useState("");
  const [products, setProducts] = useState([]);

  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductSizeChange = (e) => {
    setProductSize(e.target.value);
  };

  const handleProductColorChange = (e) => {
    setProductColor(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleProductImageChange = (e) => {
    setProductImage(e.target.value);
  };

  const handleProductIdChange = (e) => {
    setProductId(e.target.value);
  };

  const handleAddProduct = () => {
    if (productName.trim() === "" || productSize.trim() === "" || productColor.trim() === "" ||
      productPrice.trim() === "" || productId.trim() === "" || productImage.trim() === "") {
      alert(`Please enter Every required details of ${gender} Product`);
      return;
    }

    const productData = {
      Id: productId,
      name: productName,
      size: productSize,
      color: productColor,
      price: productPrice,
      image_url: productImage,
    };

    axios
      .post(`http://127.0.0.1:5000/${gender}-products`, productData)
      .then((response) => {
        setProducts([...products, response.data]);
        setProductId("");
        setProductName("");
        setProductSize("");
        setProductColor("");
        setProductPrice("");
        setProductImage("");
        alert(`${gender}'s Product Added Succesfully with Id:- ${productId}`);
      }

      )
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://127.0.0.1:5000/${gender}-products/${productId}`)
      .then(() => {
        const updatedProducts = products.filter((product) => product._id !== productId);
        alert(`Deleted Succesfully!!`)
        setProducts(updatedProducts);

      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/${gender}-products`).then((response) => {
      setProducts(response.data);
    });
  }, [gender]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className="container add-product">
        <div className="row">
          <div className="col">
            <div style={{ fontFamily: 'Times New Roman' }}>
              <span><b>Choose the Gender to insert :- </b></span>
              <button
                className={`btn btn-${gender === "men" ? "primary" : "secondary"} fs-5`}
                onClick={() => handleGenderChange("men")}
              >
                Men
              </button>
              <span> </span>
              <button
                className={`btn btn-${gender === "women" ? "primary" : "secondary"} fs-5`}
                onClick={() => handleGenderChange("women")}
              >
                Women
              </button>

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <center><h4><u>Add {gender} Product</u></h4></center>
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Product Id"
              value={productId}
              onChange={handleProductIdChange}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Product Name"
              value={productName}
              onChange={handleProductNameChange}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Product Size"
              value={productSize}
              onChange={handleProductSizeChange}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Product Color"
              value={productColor}
              onChange={handleProductColorChange}
            />
            <input
              type="number"
              className="form-control mb-1"
              placeholder="Product Price"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Product Image URL"
              value={productImage}
              onChange={handleProductImageChange}
            />
            <button
              className="btn btn-warning mt-2"
              onClick={handleAddProduct}
            >
              Add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <center><h4><u>{gender === "men" ? "Men's Products" : "Women's Products"}</u></h4></center>
            <table className="table ">
              <thead>
                <tr>
                  <th>Sl.No</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Color</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.Id}>
                    <td>{product.Id}</td>
                    <td>{product.name}</td>
                    <td>{product.size}</td>
                    <td>{product.color}</td>
                    <td>{product.price} /-</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer>
        <Footer />
      </Footer>
    </div>
  );
}

export default AdminProducts;

// npm run
