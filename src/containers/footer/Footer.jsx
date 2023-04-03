import React from 'react';
import gpt3Logo from '../../assets/logow.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1>Lorem Ipsum Dolor Sit Amet Condimentum Volutpat Morbi</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Lorem Ipsum Dolor Sit Amet, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Lorem Ipsum Dolor Sit Amet Condimentum</p>
        <p>085-132567</p>
        <p>info@info.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Company. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
