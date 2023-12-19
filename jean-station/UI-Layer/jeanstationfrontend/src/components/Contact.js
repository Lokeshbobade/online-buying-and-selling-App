import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Contact() {
    const openGoogleMaps = () => {
        const lat = '12.9105836';
        const lng = '77.6490836';
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, '_blank');
    };
    return (
        <div style={{ backgroundColor: "black" }}>
            <div className='container' style={{ backgroundColor: '#51abff' }}>
                <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">
                        Contact us
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Do you have any questions? Please do not hesitate to contact us directly.
                    </p>
                    <div className="row">

                        <div className="col-md-9 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                                action="mail.php"
                                method="POST"
                            >
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                            />
                                            <label htmlFor="name" className="">
                                                Your name
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="Email"
                                                name="Email"
                                                className="form-control"
                                            />
                                            <label htmlFor="Email" className="">
                                                Your email
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control"
                                            />
                                            <label htmlFor="subject" className="">
                                                Subject
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows={2}
                                                className="form-control md-textarea"
                                                defaultValue={""}
                                            />
                                            <label htmlFor="message">Your message</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <a
                                    className="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();"
                                >
                                    Send
                                </a>
                            </div>
                            <div className="status" />
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <button onClick={openGoogleMaps}>
                                        <i className="fa fa-map-marker fa-2x" /> </button>
                                    <p>JeanStation, Bangalore 560102, India</p>
                                </li>
                                <li>
                                    <i className="fa fa-phone mt-4 fa-2x" />
                                    <p>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <i className="fa fa-envelope mt-4 fa-2x" />
                                    <p>contact@JeanStation.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer>
                <Footer />
            </Footer>
        </div>
    )
}

export default Contact