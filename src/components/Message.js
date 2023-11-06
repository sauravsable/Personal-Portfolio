import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../styles/message.css";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validation = () => {
    const newErrors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter your Institute Email ID";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendmessage = async (e) => {
    e.preventDefault();

    if (validation()) {
      try {
        const response = await fetch(
          "https://portfolio-server-luwi.onrender.com/sendmessage",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // This sends cookies with the request
            body: JSON.stringify(formData),
          }
        );

        if (response.status === 200) {
          const data = await response.json();

          if (data === "true") {
            alert("Your Message has been successfully sent!...");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          }
        } else {
          console.error("Error:", response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-info">
          <div>
            <h2>Contact Us</h2>
            <h3>Get in Touch</h3>
            <p>
              Got questions or feedback? We'd love to hear from you! Reach out
              to our friendly team at below contact details, and we'll be happy
              to assist you.
            </p>
          </div>
          <div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} />
              <h4>Email :</h4>
              <p>sauravsabe4102@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} />
              <h4>Phone :</h4>
              <p>+91-98xx58xx26</p>
            </div>
          </div>
          
        </div>
        <div className="contactForm">
            <h3>Send Us a Message</h3>
            <form>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                  value={formData.name}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  value={formData.email}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here"
                  onChange={handleChange}
                  value={formData.message}
                />
                {errors.message && (
                  <span style={{ color: "red" }}>{errors.message}</span>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => {
                    sendmessage(e);
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
      </div>
    </section>
  );
}
