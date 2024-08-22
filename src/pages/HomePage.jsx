import Blockquote from "../Components/Blockquote/Blockquote"
import EOPCard from "../Components/EOPCard/EOPCard"
import Heading from "../Components/Heading/Heading"
import EventCard from "../Components/EventCard/EventCard"
import A1Image from "../../public/Images/A1.JPG"
import Footer from "../Components/Footer/Footer"
import { Link } from "react-router-dom"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
import BirthdayCard from "../Components/BirthdayCard/BirthdayCard"

const HomePage = () => {
  return (
    <div>
      <ResponsiveNavbar/>
      <div className="d-none d-lg-flex justify-content-between crSection">
        <div className="d-flex flex-column justify-content-center align-items-center p-4">
          <div className="text-start ps-4 ms-4">
            <h1 className="crHeading text-start">There's still time to commit</h1>
            <button className="button">Next steps for accepted students</button>
          </div>
        </div>
        <div className="crImage">
          <img src="https://www.alverno.edu/images/Commit-24.png" alt=""/>
        </div>
      </div>
      <section className="cont">
        <div className="container-fluid">
          <div className="d-flex justify-content-center p-4">
            <div className="col-md-10 text-center">
              <h1 className="contHeading">Welcome To Narain Global Academy</h1>
              <p className="contPara">The best school in Jhajhu, was established in 2019. It is a Co-Educational school nestled in the Eastern Periphery of Rajasthan and established by Narain Education society jhajhu. A need for an academic institution to nurture young talents with a state-of -the -art facilities and develop the skills to face the challenges of modern society initiated the Trust to set up NGA.
With the Paradigm shift in Education the school’s thrust is to develop the skills to face the challenges of modern society and to provide a comprehensive education which will create creative, logical, analytical and innovative minds.
It was the vision of Sri Baljeet Singh and Sunder Sir who dreamt of an educational system that would slowly germinate the seedlings thus nurtured will reap fruits for the future.
We hope that in this endeavour to spread knowledge we grow from strength to strength.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid mt-4 pt-4">
        <div className="row">
          <div className="col-md-8 mb-4">
            <Heading HeadingText="Birthday Students"/>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <BirthdayCard/>
                </div>
                <div className="carousel-item">
                  <BirthdayCard/>
                </div>
                <div className="carousel-item">
                  <BirthdayCard/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-white shadow border p-3" style={{borderRadius:"10px"}}>
              <Heading HeadingText="News & Announcement" showBar={false}/>
              <div className="content" style={{height:"380px",overflow:"hidden"}}>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
              </div>
              <div className="text-end mt-3">
                <button className="button">View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 container-fluid">
        <div>
          <Heading HeadingText="Explore our programs"/>
        </div>
        <div className="">
          <div className="row">
            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                ImageURL="https://www.alverno.edu/files/_cache/30ee5f08498e9286b01fb46927b281c1.jpg"
                Heading="Find Your Major"
                Text="Explore our undergraduate major and minor programs for women."
                ButtonText="Learn More"
                ButtonLink="find-your-major"
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://www.alverno.edu/files/_cache/452cd75c4b41dd4db711a2796eaac637.jpg"
                  Heading="Find Your Major"
                  Text="Explore our undergraduate major and minor programs for women."
                  ButtonText="Learn More"
                  ButtonLink=""
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://www.alverno.edu/files/_cache/eb14be291a280fb203cf4c9cda4bd406.jpg"
                  Heading="Find Your Major"
                  Text="Explore our undergraduate major and minor programs for women."
                  ButtonText="Learn More"
                  ButtonLink=""
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://www.alverno.edu/files/_cache/6be9593fcb221835ea222dc3734029e1.jpg"
                  Heading="Find Your Major"
                  Text="Explore our undergraduate major and minor programs for women."
                  ButtonText="Learn More"
                  ButtonLink=""
                />
            </div>


          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="shadow mt-4" style={{borderRadius:"10px"}}>
        <div className="row">
          <div className="col-md-6 pb-4">
            <div className="p-left pt-4">
              <Heading HeadingText="Our Vision"/>
              <p className="contPara text-dark">At NGA, our vision is to create a positive revolution in our entire vicinity and redefine the concept of “formal education.” We believe that education should be more than just a means to an end; it should be a transformative journey that empowers individuals to reach their full potential and make a meaningful impact in the world. Our aim is to go beyond the traditional boundaries of education and foster a holistic learning environment that nurtures creativity, critical thinking, and empathy.</p>
              <button className="button">Read More</button>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center text-center">
            <img src={A1Image} style={{margin:"auto"}} className="rounded-3" alt="" width="100%" height="100%"/>
          </div>
        </div>
        </div>
      </div>


      {/* <section className="cont">
        <div className="container-fluid">
          <div className="d-flex justify-content-center p-4">
            <div className="col-md-10 text-center">
              <h1 className="contHeading">Welcome To Narain Global Academy</h1>
              <p className="contPara">The best school in Jhajhu, was established in 2019. It is a Co-Educational school nestled in the Eastern Periphery of Rajasthan and established by Narain Education society jhajhu. A need for an academic institution to nurture young talents with a state-of -the -art facilities and develop the skills to face the challenges of modern society initiated the Trust to set up NGA.
With the Paradigm shift in Education the school’s thrust is to develop the skills to face the challenges of modern society and to provide a comprehensive education which will create creative, logical, analytical and innovative minds.
It was the vision of Sri Baljeet Singh and Sunder Sir who dreamt of an educational system that would slowly germinate the seedlings thus nurtured will reap fruits for the future.
We hope that in this endeavour to spread knowledge we grow from strength to strength.</p>
            </div>
          </div>
        </div>
      </section> */}
      <div className="p-4">

      {/* <Blockquote para="I chose Alverno for its sense of community and this unique double major where I can pursue both of my passions. Alverno has helped me grow into my confidence and given me the space to hone my creativity, communication and professionalism." cmBy="Gordhan Suthar"/> */}
      </div>

      <div className="p-4">
        {/* <EventCard 
          ImageURL="https://www.alverno.edu/files/_cache/94c53f457e32ddb5bf944aa33394f800.jpg"
          Heading="Move-In Day"
          Text="We welcome students for the 2024-2025 school year!"
          ButtonText="Learn More"
          ButtonLink="Mote"
          EventDate="2024-08-15"
          /> */}
<br/>
        {/* <EventCard 
          ImageURL="https://www.alverno.edu/files/_cache/94c53f457e32ddb5bf944aa33394f800.jpg"
          Heading="Move-In Day"
          ButtonLink="Mote"
          /> */}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage