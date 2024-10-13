import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const AssessmentEvaluation = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="Assessment & Evaluation at Narain Global Academy" />
          <p className="contPara text-dark">
            At Narain Global Academy, we believe that assessments are a vital tool to understand a student’s progress, strengths, and areas that require attention. Our comprehensive evaluation system ensures a holistic review of each student's academic, personal, and social development. Our approach to assessment balances academic rigor with encouragement and personal growth.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Continuous and Comprehensive Evaluation (CCE)</h3>
          <p className="contPara text-dark">
            Our evaluation system follows the Continuous and Comprehensive Evaluation (CCE) pattern, where students are assessed periodically throughout the academic year. This system includes formative assessments (ongoing evaluations during instruction) and summative assessments (end-of-term evaluations).
          </p>

          <h3 className="contPara text-dark fw-bold">2. Formative Assessments</h3>
          <p className="contPara text-dark">
            Formative assessments help in monitoring student progress regularly. These assessments may include quizzes, assignments, projects, oral tests, and classroom activities. The aim is to provide immediate feedback to students and teachers, allowing them to adjust learning strategies accordingly.
          </p>

          <h3 className="contPara text-dark fw-bold">3. Summative Assessments</h3>
          <p className="contPara text-dark">
            Summative assessments are conducted at the end of each term to evaluate a student’s overall understanding of the subject matter. These assessments take the form of written exams, practicals, and other comprehensive tests that review the student's grasp of the curriculum.
          </p>

          <h3 className="contPara text-dark fw-bold">4. Project-Based Learning and Assessments</h3>
          <p className="contPara text-dark">
            Project-based learning encourages students to explore topics in-depth through research, critical thinking, and creativity. The projects are assessed based on innovation, research depth, teamwork, and presentation skills, fostering both subject knowledge and life skills.
          </p>

          <h3 className="contPara text-dark fw-bold">5. Peer and Self-Evaluation</h3>
          <p className="contPara text-dark">
            To promote self-reflection and collaborative learning, students engage in peer and self-evaluation exercises. These evaluations help students recognize their strengths and weaknesses, enhance teamwork, and develop accountability for their learning.
          </p>

          <h3 className="contPara text-dark fw-bold">6. Co-curricular Activity Assessment</h3>
          <p className="contPara text-dark">
            Co-curricular activities play a significant role in the overall development of a student. Participation in sports, arts, music, drama, and leadership activities is assessed and contributes to the overall assessment report, ensuring students are recognized for their diverse talents.
          </p>

          <h3 className="contPara text-dark fw-bold">7. Comprehensive Report Cards</h3>
          <p className="contPara text-dark">
            Our report cards provide a detailed analysis of each student’s academic and co-curricular performance. Along with grades, the report includes teacher feedback, highlighting areas of strength and opportunities for improvement. This helps parents and students track progress and plan for future development.
          </p>

          <h3 className="contPara text-dark fw-bold">8. Remedial and Enrichment Support</h3>
          <p className="contPara text-dark">
            For students who require additional support, we offer remedial programs aimed at bridging academic gaps. Conversely, for students who excel, we provide enrichment programs to challenge and further develop their skills.
          </p>

          <p className="contPara text-dark">
            At Narain Global Academy, our assessment and evaluation processes are designed to promote not just academic excellence, but also personal growth, critical thinking, and holistic development. Our students are guided and supported at every step to achieve their full potential.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AssessmentEvaluation
