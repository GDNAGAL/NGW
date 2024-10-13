import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
const Fees = () => {
  return (
    <>
    <ResponsiveNavbar/>
    <div className="p-4 mb-4">
      <div className="mt-4 p-3" style={{borderRadius:"10px"}}>
        <Heading HeadingText="Fee Structure at Narain Global Academy"/>
        <p className="contPara text-dark" style={{textAlign:"justify"}}>
            At Narain Global Academy, we believe in providing quality education with transparent and fair pricing. Our fee structure is designed to ensure students receive exceptional academic, co-curricular, and residential facilities while remaining accessible to families.
        </p>

        <h3 className="contPara text-dark fw-bold">1. Admission Fee (One-Time Payment)</h3>
        <p className="contPara text-dark">
            A one-time, non-refundable fee is payable upon admission to the academy. This fee covers the processing of the application and enrollment formalities.
        </p>

        <h3 className="contPara text-dark fw-bold">2. Annual Fees</h3>
        <ul>
            <li className="contPara text-dark"><strong>Tuition Fee:</strong> Covers academic instruction, library access, laboratories, and technology resources.</li>
            <li className="contPara text-dark"><strong>Boarding & Lodging Fee:</strong> For residential students, this includes accommodation, meals, and housekeeping services.</li>
            <li className="contPara text-dark"><strong>Sports & Extracurricular Fee:</strong> Covers participation in sports, clubs, and extracurricular activities, along with the use of sporting equipment and facilities.</li>
        </ul>

        <h3 className="contPara text-dark fw-bold">3. Optional Fees</h3>
        <ul>
            <li className="contPara text-dark"><strong>Transportation Fee:</strong> For day scholars who opt for school bus services, this fee varies based on the distance from the school.</li>
            <li className="contPara text-dark"><strong>Special Coaching Fee:</strong> Additional coaching for competitive exams or specialized training programs can be opted for at an extra charge.</li>
        </ul>

        <h3 className="contPara text-dark fw-bold">4. Security Deposit (Refundable)</h3>
        <p className="contPara text-dark">
            A refundable security deposit is collected at the time of admission. This amount is refunded upon the student’s departure from the school, subject to deductions for any damages or unpaid dues.
        </p>

        <h3 className="contPara text-dark fw-bold">5. Mode of Payment</h3>
        <p className="contPara text-dark">
            Fees can be paid annually, semi-annually, or quarterly. We offer multiple payment options, including bank transfer, online payment gateways, and cheque deposits.
        </p>

        <h3 className="contPara text-dark fw-bold">6. Scholarships and Financial Aid</h3>
        <p className="contPara text-dark">
            At NGA, we are committed to making education accessible. Merit-based scholarships and financial aid are available for deserving students. Please contact the admissions office for more details on eligibility and application procedures.
        </p>

        <p className="contPara text-dark">
            We strive to keep our fee structure competitive while delivering a holistic education that prepares students for success. For a detailed breakdown and personalized fee estimates, feel free to reach out to our accounts department.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Fees