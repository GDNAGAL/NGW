import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import PanoramaViewer from "../Components/PanoramaViewer/PanoramaViewer"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const VirtualTour = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="container-fluid mt-3">
      <div className="mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="Welcome to Our Virtual 3D Tour"/>
        <p className="contPara text-dark" style={{textAlign:"justify"}}>Experience our school like never before with our immersive Virtual 3D Tour! Whether you're considering enrollment, or simply curious about our facilities, take a virtual walk through our campus and explore everything we have to offer.</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Main Entrance & Reception"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Classrooms"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Science & Computer Labs"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Library"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Sports Complex"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Auditorium"/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-2 rounded-5">
            <PanoramaViewer title="Boarding Facility"/>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default VirtualTour