import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const CounselingServices = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="Counseling Services at Narain Global Academy" />
          <p className="contPara text-dark">
            At Narain Global Academy, we understand the importance of mental well-being in shaping students' academic and personal growth. Our counseling services are designed to provide emotional support, academic guidance, and career counseling to help students navigate their school journey and beyond. We ensure that every student has access to professional counseling support whenever they need it.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Mental Health Support</h3>
          <p className="contPara text-dark">
            Our dedicated team of trained mental health professionals is available to support students facing emotional or psychological challenges. Whether it's stress, anxiety, or personal issues, our counselors provide a safe and confidential environment for students to express their concerns.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Confidential Counseling Sessions:</strong> Students can schedule one-on-one sessions with our counselors to discuss any emotional or mental health concerns.</li>
            <li><strong>Regular Mental Health Check-Ins:</strong> We conduct periodic check-ins to assess students' mental well-being and offer timely interventions when necessary.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">2. Academic Counseling</h3>
          <p className="contPara text-dark">
            We provide academic counseling to help students manage their academic workload, set goals, and overcome challenges in their studies. Our counselors work closely with teachers to ensure that students receive personalized support to enhance their academic performance.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Study Planning:</strong> Students receive guidance on creating effective study plans to manage their time and workload efficiently.</li>
            <li><strong>Subject-Specific Support:</strong> Our counselors collaborate with subject teachers to offer additional support to students struggling with specific subjects.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">3. Career Counseling</h3>
          <p className="contPara text-dark">
            Career counseling is an integral part of our guidance program, designed to help students identify their strengths, interests, and potential career paths. We offer resources and advice to assist students in making informed decisions about their future education and career goals.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Career Assessments:</strong> Students can take career assessments to explore their interests and aptitudes, helping them choose suitable career paths.</li>
            <li><strong>College and University Guidance:</strong> We provide support in selecting the right college or university, along with assistance in preparing for entrance exams and admissions applications.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">4. Peer Support Programs</h3>
          <p className="contPara text-dark">
            In addition to professional counseling, we have peer support programs where students can connect with their peers for guidance, emotional support, and shared experiences. These programs foster a sense of community and help students build resilience together.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Peer Mentorship:</strong> Senior students are trained to mentor younger students, providing them with advice on academics, time management, and emotional well-being.</li>
            <li><strong>Group Counseling Sessions:</strong> We offer group counseling sessions where students can share their experiences and support each other in a guided setting.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">5. Wellness Programs</h3>
          <p className="contPara text-dark">
            Our wellness programs are designed to promote overall well-being, focusing on physical health, mental clarity, and emotional resilience. These programs include activities that teach students to manage stress, build self-confidence, and practice mindfulness.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Mindfulness and Stress Management Workshops:</strong> Students learn techniques such as mindfulness, meditation, and breathing exercises to help manage stress and stay focused.</li>
            <li><strong>Wellness Retreats and Camps:</strong> We organize retreats and camps to promote mental and physical wellness through outdoor activities, relaxation techniques, and team-building exercises.</li>
          </ul>

          <p className="contPara text-dark">
            At Narain Global Academy, we are committed to the holistic development of our students. Through our counseling and wellness services, we aim to ensure that every student has the emotional support and guidance they need to thrive academically, personally, and socially.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CounselingServices
