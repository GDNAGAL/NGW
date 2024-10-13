import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const DailySchedule = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="A Day in the Life of a Boarding Student" />
          <p className="contPara text-dark">
            At Narain Global Academy, we believe in providing a well-rounded schedule that balances academics, extracurricular activities, and personal development. Here’s a glimpse into a typical day for our boarding students, showcasing the harmony between rigorous academic learning and enriching extracurricular engagements.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Early Morning Routine</h3>
          <p className="contPara text-dark">
            The day begins with a refreshing and disciplined morning routine designed to energize students for the day ahead.
          </p>
          <ul className="contPara text-dark">
            <li><strong>5:30 AM - Wake-Up Call:</strong> Students rise early to start the day on a positive note.</li>
            <li><strong>6:00 AM - Morning Exercise/Yoga:</strong> Physical fitness is essential. Students participate in morning exercises or yoga to build strength, flexibility, and mental focus.</li>
            <li><strong>6:30 AM - Morning Hygiene:</strong> Time is allocated for personal hygiene and preparation for the day, including freshening up and getting ready for school.</li>
            <li><strong>7:00 AM - Breakfast:</strong> A nutritious breakfast is provided, offering students a variety of healthy options to fuel them for the day.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">2. Academic Schedule</h3>
          <p className="contPara text-dark">
            Academic excellence is the foundation of student life at NGA. Our structured timetable ensures students receive focused academic instruction in various subjects.
          </p>
          <ul className="contPara text-dark">
            <li><strong>7:45 AM - Morning Assembly:</strong> A daily gathering for the entire school where important announcements are made, and students partake in motivational talks and the national anthem.</li>
            <li><strong>8:15 AM - Academic Classes:</strong> The academic day begins with focused classroom learning in subjects like Mathematics, Science, English, Social Studies, and more. Teachers use interactive methods to ensure that learning is both effective and engaging.</li>
            <li><strong>10:45 AM - Mid-Morning Break:</strong> A short break for students to relax, have a snack, and socialize before resuming their studies.</li>
            <li><strong>11:00 AM - Continuation of Academic Classes:</strong> Students return to classrooms to continue with the morning's academic schedule.</li>
            <li><strong>1:00 PM - Lunch:</strong> A wholesome lunch is served, offering a balanced meal to refuel students for the remainder of the day.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">3. Afternoon Activities</h3>
          <p className="contPara text-dark">
            The afternoon is a blend of academic study and extracurricular activities that allow students to explore their interests and develop new skills.
          </p>
          <ul className="contPara text-dark">
            <li><strong>2:00 PM - Afternoon Classes:</strong> Students continue with their academic subjects, with an emphasis on project-based learning, group discussions, and hands-on experiments.</li>
            <li><strong>3:30 PM - Co-Curricular Activities:</strong> Students have the opportunity to engage in co-curricular activities such as art, music, drama, or public speaking. These sessions are designed to foster creativity, self-expression, and critical thinking.</li>
            <li><strong>4:30 PM - Extracurricular Activities/Sports:</strong> Physical fitness is prioritized during this time. Students participate in various sports like football, cricket, basketball, or athletics, or join clubs like chess, debate, or robotics to pursue personal interests.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">4. Evening Routine</h3>
          <p className="contPara text-dark">
            As the day draws to a close, students have time for personal reflection, academic revision, and social bonding.
          </p>
          <ul className="contPara text-dark">
            <li><strong>6:00 PM - Evening Snacks:</strong> A light snack is served before students begin their study period.</li>
            <li><strong>6:30 PM - Study Time/Prep:</strong> Dedicated time is set aside for personal study or homework completion. Teachers are available for guidance during this period, ensuring students have the support they need.</li>
            <li><strong>8:00 PM - Dinner:</strong> A healthy dinner is served, offering a range of balanced dishes to meet students' nutritional needs.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">5. Night Routine</h3>
          <p className="contPara text-dark">
            Nighttime is for relaxation and winding down before preparing for bed.
          </p>
          <ul className="contPara text-dark">
            <li><strong>8:45 PM - Free Time:</strong> Students can spend time with friends, engage in leisure activities like reading, or relax in the common area.</li>
            <li><strong>9:30 PM - Lights Out:</strong> Bedtime is strictly enforced to ensure students receive adequate rest and are well-prepared for the day ahead.</li>
          </ul>

          <p className="contPara text-dark">
            This structured yet balanced schedule at Narain Global Academy ensures that boarding students receive a holistic education experience, where academic achievement, physical health, creative pursuits, and personal development are all nurtured.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DailySchedule
