import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const HowToApply = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="shadow-sm mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="How to Apply to Narain Global Academy"/>
        <p className="contPara text-dark">
            At Narain Global Academy, we welcome students who are eager to learn, grow, and become part of a vibrant educational community. Our application process is straightforward and designed to ensure a smooth transition for students and parents alike.
        </p>

        <h3 className="contPara text-dark fw-bold">Step 1: Inquiry and Campus Visit</h3>
        <p className="contPara text-dark">
            We encourage all prospective parents and students to visit our campus. During your visit, you’ll get the opportunity to explore our facilities, meet our faculty, and understand what makes NGA unique. You can schedule a visit by contacting our admissions office.
        </p>

        <h3 className="contPara text-dark fw-bold">Step 2: Application Form</h3>
        <p className="contPara text-dark">
            To begin the admission process, complete our <strong>Application Form</strong>, available both online and at our admissions office. The form requires basic information about the student and the family, along with academic records from previous schools.
        </p>
        <ul className="contPara text-dark">
            <li><strong>Online Application:</strong> Visit our official website and fill out the application form under the “Admissions” section.</li>
            <li><strong>In-Person Application:</strong> Collect a physical form from the school office and submit it during office hours.</li>
        </ul>

        <h3 className="contPara text-dark fw-bold">Step 3: Submission of Documents</h3>
        <p className="contPara text-dark">Along with the completed application form, please submit the following documents:</p>
        <ul className="contPara text-dark">
            <li>Copy of birth certificate</li>
            <li>Previous academic records (report cards, transcripts)</li>
            <li>Passport-sized photographs</li>
            <li>Transfer certificate (if applicable)</li>
            <li>Proof of identity (Aadhar card or other government-issued ID)</li>
        </ul>
        <p className="contPara text-dark">All documents can be uploaded online or submitted in person at the admissions office.</p>

        <h3 className="contPara text-dark fw-bold">Step 4: Admission Test and Interview</h3>
        <p className="contPara text-dark">
            Once your application is received, the school will schedule an admission test for the student. This test is designed to assess the student’s current academic level and readiness for the curriculum at NGA. After the test, an interview with the student and parents will be arranged to discuss expectations and answer any questions.
        </p>

        <h3 className="contPara text-dark fw-bold">Step 5: Offer of Admission</h3>
        <p className="contPara text-dark">
            Based on the results of the test and the interview, successful candidates will receive an <strong>Offer of Admission</strong>. You will receive an official admission letter along with further details regarding fee payment and joining formalities.
        </p>

        <h3 className="contPara text-dark fw-bold">Step 6: Fee Payment and Enrollment</h3>
        <p className="contPara text-dark">
            Upon receiving the offer, parents are required to pay the admission fee and initial tuition deposit to secure the student’s place at NGA. Once the payment is processed, your child’s enrollment will be confirmed.
        </p>

        <h3 className="contPara text-dark fw-bold">Step 7: Orientation and Welcome</h3>
        <p className="contPara text-dark">
            Before the academic year begins, an orientation program will be held for new students and their parents. This is a great opportunity to get acquainted with the school, the teachers, and the daily routines at Narain Global Academy.
        </p>

        <h3 className="contPara text-dark fw-bold">Need Assistance?</h3>
        <p className="contPara text-dark">
            Our admissions team is here to help guide you through every step of the process. Feel free to contact us at <a href="tel:+phonenumber">[8765434567890]</a> or email us at <a href="mailto:info@nga.com">[narainglobalacademy.bkn@gmail.com]</a> for any questions or assistance.
        </p>

        <p className="contPara text-dark">We look forward to welcoming your child to the Narain Global Academy family!</p>
    
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default HowToApply