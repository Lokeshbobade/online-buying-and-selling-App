import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import './component_Style.css'
import Footer from './Footer';

function Home() {
    const [menProducts, setMenProducts] = useState([]);
    const [womenProducts, setWomenProducts] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {

        axios.get('http://127.0.0.1:5000/men-products')
            .then((response) => {

                setMenProducts(response.data.slice(0, 4)); // Display only a few men's products
            })
            .catch((error) => {
                console.error('Error fetching men products:', error);
            });

        // Fetch products for women
        axios.get('http://127.0.0.1:5000/women-products')
            .then((response) => {
                // Assuming the API response is an array of products
                setWomenProducts(response.data.slice(0, 4)); // Display only a few women's products
            })
            .catch((error) => {
                console.error('Error fetching women products:', error);
            });

        // Create carousel items
        setCarouselItems([
            { id: 1, image: 'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', caption: 'New Arrivals' },
            { id: 2, image: 'https://img.freepik.com/premium-photo/organize-your-closet-shop-crisp-shirts-neatly-folded-stacked-table-generative-ai_634358-812.jpg?w=1060', caption: 'Summer Collection' },
            { id: 3, image: 'https://img.freepik.com/free-photo/woman-holding-shirts-choosing-what-outfit-wear_176420-16660.jpg?w=996&t=st=1697812243~exp=1697812843~hmac=132bf871511091e9059a304a479f9f3031c6afabd7d8a987fae2aa114d9e88d2', caption: 'Womens Collection' },
            { id: 4, image: 'https://media.istockphoto.com/id/1389649796/photo/variety-of-comfortable-casual-trousers-top-view-copy-space-image-with-retro-toning.webp?b=1&s=612x612&w=0&k=20&c=-f7ytU18Hk5lfadYE6QOVRiuQAFRfVE_ZktJrVeqdIE=', caption: 'Cool-Looks' },
        ]);
    }, []);

    return (
        <div>


            <Carousel interval={2000}>
                {carouselItems.map((item) => (
                    <Carousel.Item key={item.id}>
                        <img
                            className="d-block custom-carousel-image"
                            src={item.image}
                            alt={item.caption}
                        />
                        <Carousel.Caption>
                            <h3 style={{ color: "White", fontSize: 40, zIndex: -4 }}>{item.caption}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Container style={{ backgroundColor: 'yellow' }}>
                <center><h2>Featured Men's Collection</h2></center>
                <Row>
                    {menProducts.map((product) => (
                        <Col key={product.id} md={3}>
                            <Card className='product-card'>
                                <Card.Img variant="top" src={product.image_url} height={250} />
                                <Card.Body>
                                    <center>
                                        <Card.Title>color: {product.color}</Card.Title>
                                        <Card.Title>price: {product.price} /-</Card.Title>
                                    </center>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Container style={{ backgroundColor: 'rgb(243, 255, 135)' }}>
                <center><h2>Featured Women's Collection</h2></center>
                <Row>
                    {womenProducts.map((product) => (
                        <Col key={product.id} md={3}>
                            <Card className='product-card'>
                                <Card.Img variant="top" src={product.image_url} height={250} />
                                <Card.Body>
                                    <center>
                                        <Card.Title>color: {product.color}</Card.Title>
                                        <Card.Title>price: {product.price} /-</Card.Title>
                                    </center>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer>
                <Footer />
            </Footer>
        </div>
    );
}

export default Home;
