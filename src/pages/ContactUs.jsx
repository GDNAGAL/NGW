import React from 'react';
import ResponsiveNavbar from '../Components/ResponsiveNavbar/ResponsiveNavbar';
import Footer from '../Components/Footer/Footer';
import Heading from '../Components/Heading/Heading';

const ContactUs = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="container my-5">
      <Heading HeadingText="Contact Us"/>
      <p className="text-center mb-4 contPara text-dark">
        If you have any questions, concerns, or feedback, feel free to reach out to us!
      </p>

      <div className="row">
        <div className="col-md-6">
            <div className='col-md-8'>
                <p className='card shadow-sm p-2 rounded-3'>
                    <h4 className='text-danger'>Address :</h4>
                    <p>9988/B-1, S.K Tower, Sarai Rohilla, New Rohtak Road, Delhi-110005</p>
                </p>
                <p className='card shadow-sm p-2 rounded-3'>
                    <h4 className='text-danger'>Contact :</h4>
                    <p>+91 90xxxxxxxxx</p>
                </p>
                <p className='card shadow-sm p-2 rounded-3'>
                    <h4 className='text-danger'>Email :</h4>
                    <p>support@narainglobalacademy.com</p>
                </p>
            </div>
        </div>

        <div className="col-md-6">
          <h2 className='text-danger'>Questions?<br/>
          Feel free to contact us.</h2>
          <form>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control shadow-none" id="name" name="name" required />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Email:</label>
                    <input type="email" className="form-control shadow-none" id="name" name="name" required />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Subject:</label>
                    <input type="text" className="form-control shadow-none" id="name" name="name" required />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Phone:</label>
                    <input type="text" className="form-control shadow-none" id="name" name="name" required />
                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="message" className="form-label">Message:</label>
                    <textarea className="form-control shadow-none" id="message" name="message" rows="7" required></textarea>
                </div>
            </div>
            <button type="submit" className="btn btn-danger">Send Message</button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h2>Our Location</h2>
        <div className="map-container">
          {/* Replace 'YOUR_GOOGLE_MAPS_EMBED_URL' with your Google Maps Embed URL */}
          <iframe
            title="Narain Global Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4851361009815!2d73.23268931538366!3d28.025447693144847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39615d629d4d7c59%3A0xd8f4db3e60e2edc2!2sNarain%20Global%20Academy!5e0!3m2!1sen!2sin!4v1697285576335!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
