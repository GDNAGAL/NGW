import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const AboutPage = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="shadow-sm mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="Our Story"/>
        <p className="contPara text-dark" style={{textAlign:"justify"}}>NARAIN GLOBAL ACADEMY, the best school in Jhajhu, was established in 2019. It is a Co-Educational school nestled in the Eastern Periphery of Rajasthan and established by Narain Education society jhajhu. A need for an academic institution to nurture young talents with a state-of -the -art facilities and develop the skills to face the challenges of modern society initiated the Trust to set up NGA.
        With the Paradigm shift in Education the school’s thrust is to develop the skills to face the challenges of modern society and to provide a comprehensive education which will create creative, logical, analytical and innovative minds.
        It was the vision of Sri Baljeet Singh and Sunder Sir who dreamt of an educational system that would slowly germinate the seedlings thus nurtured will reap fruits for the future.
        We hope that in this endeavour to spread knowledge we grow from strength to strength.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default AboutPage