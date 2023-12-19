import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { FaClipboardList, FaUser, FaCopy } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import './styles/my-account.css';
import './styles/myorders.css';
import './styles/AccountDetails.css';

const MyAccount = () => {
    const [isCodeCopied, setIsCodeCopied] = useState(false);

    const copyPromoCodeToClipboard = () => {
        navigator.clipboard.writeText('NEWUSER10');
        setIsCodeCopied(true);
        setTimeout(() => {
            setIsCodeCopied(false);
        }, 2000); // Reset the copied message after 2 seconds
    };

    return (
        <Container className="py-5 mt-5">
            <Tab.Container defaultActiveKey="my-orders">
                <Row className="justify-content-evenly mt-4 p-1">
                    <Col sm={3} className="text-black bg-light p-2 rounded h-100 mb-3 user-menu">
                        <Row className="mb-3 py-2">
                            <Col xs={3} className="pe-0">
                                <figure className="avatar avatar-profile">
                                    <img className="rounded-circle img-fluid" src="{user.avatar.url}" alt="" />
                                </figure>
                            </Col>
                            <Col xs={9} className="pt-1">
                                <span>Hello,</span>
                                <h4>Moin Khan</h4>
                            </Col>
                        </Row>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-3">
                                <Nav.Link eventKey="account-details">
                                    Account Details
                                    <FaUser size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="address">
                                    Address
                                    <IoLocationSharp size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="wallet">
                                    Wallet
                                    <GiWallet size="1.4rem" />
                                </Nav.Link>
                                <Nav.Link eventKey="promo-code" onClick={copyPromoCodeToClipboard}>
                                    New User Promo Code <FaCopy className="ms-2" />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={8} className="text-black bg-light p-2 rounded">
                        <Tab.Content>
                            <Tab.Pane eventKey="account-details">
                                <h3>Account Details</h3>
                                <table>
                                    <tr>
                                        <th colSpan="2">Personal Details</th>
                                    </tr>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>Pathan Mohammed Moin Khan</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>moinkhan0331@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>7032302001</td>
                                    </tr>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="address">
                                <h3>Address</h3>
                                <table>
                                    <tr>
                                        <th colSpan="2">My Address</th>
                                    </tr>
                                    <tr>
                                        <td>Street</td>
                                        <td>Electronic City</td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>Bangalore</td>
                                    </tr>
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="wallet">
                                <h3>Wallet</h3>
                                <table>
                                    {/* Your wallet content */}
                                </table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="promo-code">
                                <h3>Promo Codes</h3>
                                <p>
                                    Promo Code: NEWUSER10
                                     {' '}
                                    <span className="text-success">
                                        {isCodeCopied ? 'Copied to Clipboard!' : ''}
                                    </span>
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default MyAccount;