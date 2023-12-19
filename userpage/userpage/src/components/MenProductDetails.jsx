import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const MensProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [product, setProduct] = useState(null); // State to store product data

  const proid = useParams();
  const productId = proid.id;
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  useEffect(() => {
    // Fetch product data from the API
    fetch(`http://127.0.0.1:5000/men-products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  if (!product) {
    // Loading state or error handling
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image_url} alt={product.name} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.size}</h1>
            <hr/>
            <h2 className="my-4">{product.price}/-</h2>
            <p className="lead">{product.size}</p>
            <p className="lead">{product.color}</p>
            <button onClick={() => handleCart(product)} className="btn btn-outline-primary my-5">
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MensProductDetail;
