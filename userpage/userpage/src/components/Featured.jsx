import React from "react";
import { NavLink } from 'react-router-dom';
function Featured({image,name,color,price,link}){
    return(
        <div className="cards-container">
        <div className="card">
          <img src={image} alt='T-shirt' />
          <h3>{name}</h3>
          <p><strong>Color:</strong>{color}</p>
          <p><span class="indian-currency">{price}</span></p>
          <div className="sizes">
            <button>L</button>
            <button>XL</button>
            <button>S</button>
            <button>M</button>
          </div>
          <div className="rating"> &#9733; &#9733; &#9733; &#9733;</div>
        </div>
        </div>
    )
}

export default Featured;