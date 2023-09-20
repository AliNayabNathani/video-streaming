import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const captchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        captchaRef.current.reset();

        // Implement your form submission logic here
        console.log('Form Data:', formData);
        console.log('reCAPTCHA Value:', captchaRef.current);
    };

    return (
        <div>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <ReCAPTCHA
                    sitekey="6Lcqf_4nAAAAACLtt5zPbJr0_i9tlfhiZRitrQBw"
                    ref={captchaRef}
                />
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
