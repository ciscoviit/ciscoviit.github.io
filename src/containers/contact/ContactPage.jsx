import React, { useRef } from "react";
import './ContactPage.css';
import Footer from "../footer/Footer";
import emailjs from '@emailjs/browser';


const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_90a3tye', 'template_raq8prb', form.current, 'FCmSMxA16apb8Xs0-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div>
            <div className="formbold-main-wrapper">
                <div className="formbold-form-wrapper">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="formbold-mb-5">
                            <label for="user_name" className="formbold-form-label"> Full Name </label>
                            <input
                                type="text"
                                name="user_name"
                                id="name"
                                placeholder="Full Name"
                                className="formbold-form-input"
                            />
                        </div>

                        <div className="formbold-mb-5">
                            <label for="user_email" className="formbold-form-label"> Email Address </label>
                            <input
                                type="email"
                                name="user_email"
                                id="email"
                                placeholder="Enter your email"
                                className="formbold-form-input"
                            />
                        </div>

                        <div className="formbold-mb-5">
                            <label for="message" className="formbold-form-label"> Message </label>
                            <textarea
                                rows="6"
                                name="message"
                                id="message"
                                placeholder="Type your message"
                                className="formbold-form-input"
                            ></textarea>
                        </div>

                        <div>
                        <input className="formbold-btn" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ContactPage;