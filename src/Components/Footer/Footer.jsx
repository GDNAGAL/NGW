import React from 'react'
import './Footer.css'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div children="d-flex flex-column">
        <div className='container'>
            <Heading HeadingText={"Ready For What's Next"}/>
            <div className='row text-center mt-4'>
                <div className="col-md-4 mb-3">
                    <button className='button'>Schedule a Tour</button>
                </div>
                <div className="col-md-4 mb-3">
                    <button className='button'>Request Information</button>
                </div>
                <div className="col-md-4 mb-3">
                    <button className='button'>Apply Now</button>
                </div>
            </div>
        </div>
        <div>
            <img src="https://www.alverno.edu/images/subfooter.jpg" alt="" width="100%"/>
        </div>
    </div>
    <div>
        <div className="container-fluid footerWraper">
            <div className="footer container-fluid">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className='footerMcard bg-white rounded-bottom p-4 shadow' style={{width:"300px", margin:"auto"}}>
                            <img src="https://www.alverno.edu/images/logo_footer.svg" alt="" />
                        </div>
                        <div className="ssicon mt-3 d-flex align-items-center justify-content-around" style={{width:"400px", margin:"auto"}}>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter-x"></i>
                            <i className="bi bi-linkedin"></i>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 mb-4">
                                <address>
                                Nokha Road, Jhajhu, Kolayat, Bikaner, Raj. -334001
                                </address>
                                <div className="footerLink">
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerLink">
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerLink">
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Campus Map</Link>
                                    <Link to="">Contact Us</Link>
                                    <Link to="">Contact Us</Link>
                                    <Link to="">Contact Us</Link>
                                    <Link to="">Contact Us</Link>
                                    <Link to="">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="designBy">
            <p className='m-0'>Design & Developed By : IndiaWebSol</p>
        </div>
    </div>
    </>
  )
}

export default Footer