import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const HostelFacilities = () => {
  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-3" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="Hostel Facilities at Narain Global Academy" />
          <p className="contPara text-dark">
            At Narain Global Academy, we strive to provide boarding students with a comfortable, secure, and supportive environment that feels like a second home. Our comprehensive hostel facilities include modern dormitories, a well-structured meal plan, and a range of amenities designed to support students’ academic and personal development.
          </p>

          <h3 className="contPara text-dark fw-bold">1. Dormitory Facilities</h3>
          <p className="contPara text-dark">
            Our hostel provides spacious, clean, and well-ventilated dormitories, ensuring a comfortable living environment for all students. Each dormitory is designed to foster a sense of community while also offering individual space for students.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Shared and Private Rooms:</strong> Depending on availability and student preference, we offer both shared dormitories and limited private rooms. Each student is provided with a bed, study desk, chair, and a personal wardrobe for their belongings.</li>
            <li><strong>Air Conditioning and Ventilation:</strong> To ensure comfort in all seasons, dormitories are equipped with air conditioning or ceiling fans, as well as windows that allow natural light and ventilation.</li>
            <li><strong>Housekeeping Services:</strong> Regular housekeeping ensures that rooms and common areas remain clean and hygienic. We promote cleanliness among students by encouraging them to keep their personal spaces tidy.</li>
            <li><strong>Common Areas:</strong> Each dormitory has a common lounge where students can relax, interact with peers, or participate in recreational activities. These areas are furnished with comfortable seating, TV, and games.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">2. Meal Plans and Dining</h3>
          <p className="contPara text-dark">
            At NGA, we understand the importance of balanced nutrition for the overall well-being and performance of our students. Our dining facilities provide wholesome, delicious meals that cater to diverse tastes and dietary requirements.
          </p>
          <ul className="contPara text-dark">
            <li><strong>Balanced Meal Plans:</strong> We offer a structured meal plan that includes breakfast, lunch, evening snacks, and dinner. Meals are designed by nutrition experts to provide a healthy balance of proteins, carbohydrates, vitamins, and essential nutrients.</li>
            <li><strong>Hygienic Dining Environment:</strong> Our dining halls are clean and spacious, adhering to the highest standards of hygiene. We conduct regular inspections to ensure food safety and cleanliness.</li>
            <li><strong>Variety of Cuisine:</strong> The meal plan includes a mix of traditional Indian dishes as well as popular international cuisine, giving students the opportunity to enjoy a variety of tastes. Special care is taken to provide meals that are culturally appropriate for students from different backgrounds.</li>
            <li><strong>Special Dietary Needs:</strong> We accommodate students with specific dietary restrictions, including vegetarian, vegan, and allergen-free options. Our chefs are trained to handle special dietary requests to ensure all students can enjoy nutritious meals.</li>
            <li><strong>Fresh and Seasonal Ingredients:</strong> The food served is made with fresh and locally sourced ingredients, with seasonal fruits and vegetables featured prominently in the meals.</li>
          </ul>

          <h3 className="contPara text-dark fw-bold">3. Amenities and Services</h3>
          <p className="contPara text-dark">
            Narain Global Academy provides a wide range of amenities and services to ensure that boarding students have everything they need for a comfortable and productive stay.
          </p>
          <ul className="contPara text-dark">
            <li><strong>24/7 Security and Supervision:</strong> Our hostel premises are monitored around the clock with CCTV cameras, and trained security staff ensure the safety of students. The hostel is supervised by resident wardens who are responsible for student welfare and discipline.</li>
            <li><strong>Wi-Fi Connectivity:</strong> High-speed internet access is available in all dormitories and common areas, allowing students to stay connected with family, access online study materials, and engage in digital learning.</li>
            <li><strong>Laundry Facilities:</strong> We offer convenient laundry services within the hostel to ensure students have access to clean clothes on a regular basis. Students can also avail of ironing services.</li>
            <li><strong>Recreational Facilities:</strong> To promote a healthy and active lifestyle, the hostel has facilities such as sports courts, a gym, and indoor games. Students are encouraged to participate in recreational activities to maintain physical fitness and mental well-being.</li>
            <li><strong>Study Halls:</strong> Dedicated study halls are available in the hostel, providing a quiet and distraction-free environment for students to focus on their academic work during after-school hours.</li>
            <li><strong>Medical Care:</strong> We have an on-site medical room with basic first aid supplies and access to medical professionals for routine check-ups. In case of emergencies, students are taken to a nearby hospital, with parental notifications immediately.</li>
            <li><strong>Transport Facilities:</strong> NGA provides transportation services for students who need to travel to nearby locations for extracurricular activities or personal needs. Regular shuttles are available for trips into the city.</li>
            <li><strong>Mentorship and Counseling:</strong> Our hostel staff also act as mentors, guiding students in their personal and academic growth. Professional counselors are available to help students with any emotional or psychological concerns.</li>
          </ul>

          <p className="contPara text-dark">
            At Narain Global Academy, our goal is to offer boarding students a safe, nurturing, and enriching environment. With state-of-the-art facilities, a well-rounded meal plan, and a focus on student well-being, our hostel provides the perfect balance of discipline and care, allowing students to flourish both academically and personally.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HostelFacilities
