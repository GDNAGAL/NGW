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
        <h2 className='text-danger text-center'>Questions?<br/>
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
            <button type="submit" className="btn btn-danger shadow-none">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
            <div className='col-md-8 text-center pt-4 m-auto mt-4'>
              <div className='card shadow-sm p-2 rounded-3 mb-3'>
                  <h4 className='text-danger'>Address :</h4>
                  <p>9988/B-1, S.K Tower, Sarai Rohilla, New Rohtak Road, Delhi-110005</p>
              </div>
              <div className='card shadow-sm p-2 rounded-3 mb-3'>
                  <h4 className='text-danger'>Contact :</h4>
                  <p>+91 90xxxxxxxxx</p>
              </div>
              <div className='card shadow-sm p-2 rounded-3 mb-3'>
                  <h4 className='text-danger'>Email :</h4>
                  <p>support@narainglobalacademy.com</p>
              </div>
            </div>
        </div>
      </div>

      <div className="mt-5">
        <Heading HeadingText="Our Location"/>
        <div className="map-container">
          {/* Replace 'YOUR_GOOGLE_MAPS_EMBED_URL' with your Google Maps Embed URL */}
          <iframe
            title="Narain Global Academy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.354094936796!2d73.02282817569042!3d27.768061676147838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393f91abe209ef11%3A0xb9a4224afc6a8fc3!2sNarain%20Global%20Academy!5e0!3m2!1sen!2sin!4v1728922286700!5m2!1sen!2sin"
            width="100%"
            height="400"
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
