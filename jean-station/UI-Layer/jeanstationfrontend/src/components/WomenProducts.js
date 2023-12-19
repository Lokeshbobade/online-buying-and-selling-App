import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Products.css'
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';

const Products = () => {
    const [tasks, setTasks] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [foundProduct, setFoundProduct] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/women-products')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    }, []);

    const handleSearch = () => {
        const product = tasks.find(product => product.Id === parseInt(searchId));
        setFoundProduct(product);
    };

    return (

        <div>
            <center>
                <div className="search-container">
                    <input
                        className="search-input-control me-2 mt-1"
                        type="search"
                        placeholder="Search by ID"
                        aria-label="Search"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />

                    <button className="btn btn-info btn-sm mb-1" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </center>
            <center>
            {searchId === '' ? (
                <div>
                    {tasks.map(task => (
                        <div key={task._id} className='items'>
                        <img src={task.image_url} alt="images" height={210} width={210} /><br />
                        <b className='title'>{task.name}</b><br />
                        <strong>Price: </strong><i> {task.price}/-</i><br />
                       <b>Color: </b> {task.color},<b> size: </b>{task.size}<br />
                    </div>
                    ))}
                </div>
            ) : foundProduct ? (
                <div className="card" style={{ width: '18rem',height:'400px' }}>
                    <img className="image card-img-top" src={foundProduct.image_url} height={300} width={210} alt="..." />
                    <div className="card-body">
                    <b className='title'>{foundProduct.name}</b><br />
                        <strong>Price: </strong><i> {foundProduct.price}/-</i><br />
                       <b>Color: </b> {foundProduct.color},<b> size: </b>{foundProduct.size}<br />
                    </div>
                </div>
            ) : (
                <center><p>No product found with ID: <b>{searchId}</b></p></center>
            )}
            </center>
            <Footer>
          <Footer />
        </Footer>
        </div>
    );
};
export default Products;
