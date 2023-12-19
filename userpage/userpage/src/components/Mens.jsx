import React, { useState, useEffect } from 'react';
import './styles/MenWomenstyle.css';
import { NavLink } from 'react-router-dom';

function MenCloths({onAddToCart}) {
  const [searchText, setSearchText] = useState('');
  const [menItems, setMenItems] = useState([]);
  const [filteredItems, setFilteredItemss] = useState([]);

  useEffect(() => {
    // Fetch data from your API and filter it based on category and set it in menItems

    fetch('http://127.0.0.1:5000/men-products')
      .then((response) => response.json())
      .then((data) => setMenItems(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Filter items by name based on the search text
    const filtered = menItems.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())

    );
    setFilteredItemss(filtered);
  }, [searchText, menItems]);
  const getRandomDiscount = () => {
    return Math.floor(Math.random() * 40) + 10; // Random discount between 50% and 100%
  };


  return (
    <div>
      <div className="search-container">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      </div>
      <div className="cards-container">
      {filteredItems.map((item, index) =>(
        <div key={item.id} className="card">
        <div className="discount-badge">-{getRandomDiscount()}%</div>
          <img src={item.image_url} alt={item.title} />
          <h3>{item.name}</h3>
          <p><strong>Color:</strong>{item.color}</p>
          <p><span class="indian-currency">{item.price}</span></p>
          <div className="sizes">
            <button>L</button>
            <button>XL</button>
            <button>S</button>
            <button>M</button>
          </div>
          <div className="rating"> &#9733; &#9733; &#9733; &#9733;</div>
          <NavLink to={`/mens-product/${item._id}`}className="btn btn-outline-primary">
            Buy Now
          </NavLink>
        </div>
      ))}
    </div>
    </div>
  );
}

export default MenCloths;
