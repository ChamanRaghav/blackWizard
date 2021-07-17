import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small mdb-color pt-4 bg-white text-center">
        <Row className="text-center text-md-left mt-3 pb-3 mx-20">
          <Contact />
          <Col md={7} lg={7} xl={7} className="mt-3">
            <h6 className="mb-4 font-weight-bold">
              <b className="text-uppercase">Black Wizard</b> <i>Directions!</i>
            </h6>
            <div className="map">
              <iframe
                title="Satnali_Mahendergarh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28084.703792453758!2d75.9469537777592!3d28.37130393136319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912e904d5acdd83%3A0xb421b893380b69aa!2sSatnali%2C%20Haryana%20123024!5e0!3m2!1sen!2sin!4v1625333546793!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy"
                id="mapDiv"
              >
                Sorry your browser does not support inline frames.
              </iframe>
            </div>
          </Col>
        </Row>

        <hr />

        <Row className="d-flex align-items-center mx-20">
          <Col md={4} lg={4} xl={4}>
            <p className="text-center text-md-left">
              ©{new Date().getFullYear()} Copyright:
              <a href="https://www.blackwizard.in/">
                <strong> www.blackwizard.in</strong>
              </a>
            </p>
          </Col>
          <Col md={4} lg={4} xl={4}>
            <p className="text-center text-md-left">
              @Created By:
              <a
                href="https://www.linkedin.com/in/chaman-raghav-6b706585"
                className="text-decoration-none"
              >
                <strong> Chaman Raghav </strong>
              </a>
            </p>
          </Col>
          <Col md={4} lg={4} xl={4}>
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="#!"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="https://www.instagram.com/blackwizardsports"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn-floating btn-sm rgba-white-slight mx-1"
                    href="#!"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
};

const Contact = () => (
  <Col md={5} lg={5} xl={5} className="mt-3 text-align-center">
    <h6 className="mb-4 font-weight-bold">
      <i>Connect with</i> <b className="text-uppercase">Black Wizard!</b>
    </h6>
    <p>
      <i className="fas fa-envelope mr-3"></i>
      <a href="mailto: blackwizardsports@gmail.com" className="link-to-text">
        blackwizardsports@gmail.com
      </a>
    </p>
    <p>
      <i className="fas fa-envelope mr-3"></i>
      <a href="mailto: support@blackwizard.com" className="link-to-text">
        support@blackwizard.com
      </a>
    </p>

    <p>
      <i className="fas fa-phone mr-3"></i>
      <a href="tel:+919015765710" className="link-to-text">
        + 91 901-576-5710
      </a>
    </p>
    <p>
      <i className="fas fa-phone mr-3"></i>
      <a href="tel:+919350662526" className="link-to-text">
        + 91 935-066-2526
      </a>
    </p>
  </Col>
);
