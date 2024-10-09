import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const ClassroomFacilities = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="shadow-sm mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="Classroom Facilities at Narain Global Academy" />
          <p className="contPara text-dark">
            At Narain Global Academy, we believe that a conducive learning environment is key to academic success. Our classrooms are designed to be student-centered, fostering both collaboration and independent learning. We ensure that students have access to the latest resources and technology to enhance their educational experience.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Spacious and Well-Lit Classrooms</h3>
          <p className="contPara text-dark">
            Each classroom at NGA is spacious, well-ventilated, and filled with natural light to create a comfortable learning atmosphere. The seating arrangement is designed to ensure every student has an optimal view of the board and can actively participate in class activities.
          </p>

          <h3 className="contPara text-dark fw-bold">2. Smart Classroom Technology</h3>
          <p className="contPara text-dark">
            Our classrooms are equipped with state-of-the-art smart boards and projectors, allowing teachers to deliver interactive lessons using multimedia content. This technology helps to engage students and make learning more dynamic and effective.
          </p>

          <h3 className="contPara text-dark fw-bold">3. Comfortable Seating and Ergonomic Design</h3>
          <p className="contPara text-dark">
            We understand the importance of comfort in a student's learning experience. Our classrooms are furnished with ergonomic chairs and desks that ensure students can maintain proper posture throughout the day. The layout also promotes collaborative group work and discussion.
          </p>

          <h3 className="contPara text-dark fw-bold">4. Audio-Visual Aids</h3>
          <p className="contPara text-dark">
            To further enhance learning, classrooms are fitted with high-quality audio systems that ensure every student can clearly hear the teacher, even in the back rows. Visual aids, including charts and models, are also used to reinforce key concepts across subjects.
          </p>

          <h3 className="contPara text-dark fw-bold">5. Wi-Fi Connectivity</h3>
          <p className="contPara text-dark">
            NGA provides Wi-Fi connectivity in all classrooms, ensuring that students and teachers can access online resources and tools during lessons. This connectivity supports a blended learning approach, combining traditional teaching with digital learning resources.
          </p>

          <h3 className="contPara text-dark fw-bold">6. Clean and Safe Environment</h3>
          <p className="contPara text-dark">
            Cleanliness and safety are top priorities at NGA. Our classrooms are regularly cleaned and sanitized to provide a healthy environment for students. Fire safety measures and emergency protocols are in place to ensure the safety of all students and staff.
          </p>

          <h3 className="contPara text-dark fw-bold">7. Individual and Group Learning Spaces</h3>
          <p className="contPara text-dark">
            We recognize the importance of different learning styles. Our classrooms feature designated areas for both individual work and group activities, ensuring that students have the space they need for focused study as well as collaborative learning.
          </p>

          <h3 className="contPara text-dark fw-bold">8. Resource-Rich Environment</h3>
          <p className="contPara text-dark">
            Each classroom is stocked with the necessary learning materials, such as textbooks, reference books, and other resources that support the curriculum. In addition, students have access to digital tools and online learning platforms to complement their in-class learning experience.
          </p>

          <p className="contPara text-dark">
            At Narain Global Academy, we aim to provide an enriching classroom environment that promotes learning, creativity, and personal growth. With cutting-edge technology and thoughtful design, our classrooms are places where students thrive and develop their full potential.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ClassroomFacilities
