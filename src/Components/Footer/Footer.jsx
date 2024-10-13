import React from 'react'
import './Footer.css'
import Heading from '../Heading/Heading'
import { Link } from 'react-router-dom'
import slogo from '../../../public/Images/logo.webp'
import A1Image from "../../../public/Images/A1R.png"

const Footer = () => {
  return (
    <>
    <div className="p-4"></div>
    <div children="d-flex flex-column">
        <div className='container'>
            <Heading HeadingText={"Preparing Your Child for a Brighter Future"}/>
            <div className='row text-center mt-4'>
                <div className="col-md-4 mb-3">
                    <button className='button'>Book a Campus Tour</button>
                </div>
                <div className="col-md-4 mb-3">
                    <button className='button'>Inquire for More Information</button>
                </div>
                <div className="col-md-4 mb-3">
                    <button className='button'>Enroll Now</button>
                </div>
            </div>
        </div>
        <div>
            <img src={A1Image} alt="" width="100%"/>
        </div>
    </div>
    <div>
        <div className="container-fluid footerWraper">
            <div className="footer container-fluid">
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className='footerMcard bg-white rounded-5 p-4 shadow' style={{width:"300px", margin:"auto"}}>
                            <img className='img-fluid' src={slogo} alt="" />
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
                                    <div className='mb-1'>+91 9000000000</div>
                                    <div className='mb-3'>+91 9000000000</div>
                                    <div className='mb-3'>narainglobalacademy.bkn@gmail.com</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerLink">
                                    <Link to="">Career</Link>
                                    <Link to="">Blog</Link>
                                    <Link to="">Contact Us</Link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footerLink">
                                    <Link to="">Home</Link>
                                    <Link to="">About</Link>
                                    <Link to="">News</Link>
                                    <Link to="">Gallery</Link>
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