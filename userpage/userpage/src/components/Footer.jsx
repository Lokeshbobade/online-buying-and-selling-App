import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGem, faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="me-4 text-reset">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <FontAwesomeIcon icon={faGem} className="me-3" /> Jean Station
              </h6>
              <p>
                All fashion brands are about looking good. Being Human is also about doing good. And you can do good by the simple act of slipping into a t-shirt or a pair of jeans.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="/mens" className="text-reset">Mens Cloths</a>
              </p>
              <p>
                <a href="/womens" className="text-reset">Womens Cloths</a>
              </p>
              <p>
                <a href="/mens" className="text-reset">Men Jeans</a>
              </p>
              <p>
                <a href="/womens" className="text-reset">Women Tops</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="/contact" className="text-reset">Help</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><FontAwesomeIcon icon={faHome} className="me-3" /> Bangalore Phase-1</p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                jeanstation@gmail.com
              </p>
              <p><FontAwesomeIcon icon={faPhone} className="me-3" /> 7032302001</p>
              <p><FontAwesomeIcon icon={faPrint} className="me-3" /> 9966227863</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="/home">JeanStation.com</a>
      </div>
    </footer>
  );
}

export default Footer;
