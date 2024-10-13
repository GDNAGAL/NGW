import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const OurVision = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="Our Vision"/>
        <p className="contPara text-dark" style={{textAlign:"justify"}}>At NGA, our vision is to create a positive revolution in our entire vicinity and redefine the concept of “formal education.” We believe that education should be more than just a means to an end; it should be a transformative journey that empowers individuals to reach their full potential and make a meaningful impact in the world. Our aim is to go beyond the traditional boundaries of education and foster a holistic learning environment that nurtures creativity, critical thinking, and empathy. Through innovative teaching methods, personalized learning approaches, and a strong emphasis on character development, we aspire to shape well-rounded individuals who are not only academically proficient but also socially responsible and globally aware. Together, let us embark on this remarkable educational journey and create a future where formal education becomes a catalyst for positive change in our society.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default OurVision