import React from "react";
import "./contact.css";
import Separator from "../../Common/seperator/separator";
import SocialContact from "../../Common/social-contact/social";
function Contact() {
  return (
    <div className="contact">
    <Separator />
    <label className="section-title">Contact</label>
    <div className="contact-container">
      <div className="contact-left">
        <p>Want to get in touch? Contact me on any of the platform</p>
        <SocialContact />
        </div>
      </div>
    </div>
  );
}

export default Contact;
