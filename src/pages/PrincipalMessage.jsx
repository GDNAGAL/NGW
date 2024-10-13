import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const PrincipalMessage = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="mt-4 p-3" style={{borderRadius:"10px"}}>
      <Heading HeadingText="Principal's Words"/>
        <div className="row">
          <div className="col-md-9">
          <p className="contPara text-dark pb-4" style={{textAlign:"justify"}}>Twinkling eyes, innocence radiating from their faces and simplicity shining through the core of their beings- these are the few initial impressions that knock the door of the mind when my eyes look at them. Whom am i looking at? Of course, my students!
  Just as soft as clay ready to take moulds but with careful hands, in very gentle way, with utmost care, full of love and compassion. All children are meant to shine and we the teachers are born to manifest that glory within them.
  Narain Global Academy school as an institution always remain committed to these young minds and look for their controlled ignition in a gradual way, step-by-step, so as to make them grow,
  and allow them to mature eventually in the process.
  Students here exemplified as the true innovative young minds capable of standing tall in the face of every challenge they come across. Not only are they true to their academics but also incessantly active in their co-curriculars, humanitarian causes as well as social activities.</p>
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <div className="p-md-4">
              <img src="https://ngajhajhu.co.in/wp-content/uploads/2023/05/hhh.png" width="100%" alt="" />
              <div className="mt-3">
                <h5 className="text-danger">Sri. Subrata Kumar Roy</h5>
                <h6 className="text-muted">Principal • Narain Global Academy</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default PrincipalMessage