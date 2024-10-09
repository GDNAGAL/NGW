import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const WhyChooseUS = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="shadow-sm mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="Why Choose Narain Global Academy?"/>
        <p className="contPara text-dark" style={{textAlign:"justify"}}>At Narain Global Academy, we are more than just a school – we are a nurturing community dedicated to shaping future leaders with strong values and global perspectives. Here’s why NGA stands out:
        </p>
          <ol>
            <li className="fw-bold">Holistic Education</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>We believe in fostering both academic excellence and personal growth. Our curriculum combines rigorous academics with life skills, arts, sports, and extracurricular activities, ensuring all-round development.</p>
            <li className="fw-bold">State-of-the-Art Infrastructure</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>Our modern campus is equipped with advanced classrooms, science labs, sports facilities, and comfortable residential dorms, providing students with the best environment to learn, grow, and live.</p>
            <li className="fw-bold">Personalized Attention</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>With small class sizes, our dedicated teachers focus on each student’s unique strengths and areas for improvement, offering personalized guidance and support for success.</p>
            <li className="fw-bold">Values and Ethics</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>Rooted in a strong foundation of values, we emphasize the importance of integrity, responsibility, and empathy. We aim to develop not only skilled individuals but also compassionate and ethical leaders.</p>
            <li className="fw-bold">Safe and Supportive Environment</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>Student safety is our top priority. With 24/7 supervision, secure residential facilities, and a close-knit community, we ensure that your child feels safe and supported while away from home.</p>
            <li className="fw-bold">Global Outlook, Local Roots</li>
            <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>We blend international teaching standards with the cultural richness of our local heritage. Students are prepared to excel globally while staying connected to their roots.</p>
          </ol>
          <p className="contPara text-dark" style={{textAlign:"justify", fontSize:"20px"}}>Choosing Narain Global Academy means choosing a bright future for your child. Join us in building confident, well-rounded individuals ready to take on the world.</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default WhyChooseUS