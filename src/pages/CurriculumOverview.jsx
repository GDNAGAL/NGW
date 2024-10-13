import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const CurriculumOverview = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="Curriculum Overview at Narain Global Academy" />
          <p className="contPara text-dark">
            At Narain Global Academy, our curriculum is designed to foster holistic development and prepare students for academic excellence, personal growth, and global citizenship. We offer a balanced blend of academic rigor, co-curricular activities, and values-based education to shape well-rounded individuals.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Core Academic Subjects</h3>
          <p className="contPara text-dark">
            Our core curriculum is aligned with national educational standards, ensuring that students receive a strong foundation in essential academic disciplines. These subjects include:
          </p>
          <ul className="contPara text-dark">
            <li>Mathematics: Focuses on problem-solving, logical reasoning, and analytical thinking.</li>
            <li>Science: Encourages scientific inquiry, experimentation, and understanding of natural phenomena.</li>
            <li>English: Develops reading, writing, speaking, and critical thinking skills.</li>
            <li>Social Studies: Covers history, geography, civics, and the cultural heritage of India and the world.</li>
            <li>Languages: Offers a second and third language option, fostering multilingual proficiency.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">2. Co-Curricular Activities</h3>
          <p className="contPara text-dark">
            We believe that learning goes beyond the classroom. At NGA, students are encouraged to participate in a variety of co-curricular activities to develop their creativity, teamwork, and leadership skills. These activities include:
          </p>
          <ul className="contPara text-dark">
            <li>Art & Craft</li>
            <li>Music & Dance</li>
            <li>Drama & Theatre</li>
            <li>Debating & Public Speaking</li>
            <li>Creative Writing</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">3. Sports and Physical Education</h3>
          <p className="contPara text-dark">
            Physical fitness is a crucial part of a student’s overall well-being. Our curriculum includes a robust Physical Education (PE) program with access to various sports such as:
          </p>
          <ul className="contPara text-dark">
            <li>Football</li>
            <li>Basketball</li>
            <li>Cricket</li>
            <li>Volleyball</li>
            <li>Athletics</li>
            <li>Yoga and Meditation</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">4. Technology and Innovation</h3>
          <p className="contPara text-dark">
            At NGA, we equip students with the technological skills required for the modern world. Our curriculum includes:
          </p>
          <ul className="contPara text-dark">
            <li>Computer Science and Coding: Introduction to programming, robotics, and digital literacy.</li>
            <li>STEM Education: Integration of Science, Technology, Engineering, and Mathematics through hands-on projects and innovation labs.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">5. Values and Life Skills Education</h3>
          <p className="contPara text-dark">
            At the heart of our education model is the belief that values-based education is essential for developing responsible global citizens. Our curriculum includes:
          </p>
          <ul className="contPara text-dark">
            <li>Moral and Ethical Education: Lessons on compassion, honesty, and respect.</li>
            <li>Life Skills Training: Focus on communication, decision-making, problem-solving, and critical thinking.</li>
            <li>Community Service Projects: Opportunities to engage in social initiatives and contribute to society.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">6. Personalized Learning</h3>
          <p className="contPara text-dark">
            Recognizing that every student learns differently, we offer personalized learning paths to ensure that each child achieves their full potential. Our educators employ differentiated instruction methods to cater to individual learning styles, strengths, and needs.
          </p>

          <h3 className="contPara text-dark fw-bold">7. Competitive Exam Preparation</h3>
          <p className="contPara text-dark">
            We provide specialized coaching and resources to prepare students for national and international competitive exams, including:
          </p>
          <ul className="contPara text-dark">
            <li>Olympiads</li>
            <li>National Talent Search Examination (NTSE)</li>
            <li>Scholarship programs</li>
            <li>Entrance exams for higher education</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">8. Field Trips and Experiential Learning</h3>
          <p className="contPara text-dark">
            Learning through experiences is an integral part of our curriculum. Regular field trips, educational tours, and workshops provide students with real-world exposure and hands-on learning opportunities.
          </p>
          
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CurriculumOverview
