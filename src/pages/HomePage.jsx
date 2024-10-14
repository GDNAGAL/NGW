import Blockquote from "../Components/Blockquote/Blockquote"
import { Helmet } from "react-helmet-async"
import EOPCard from "../Components/EOPCard/EOPCard"
import Heading from "../Components/Heading/Heading"
import EventCard from "../Components/EventCard/EventCard"
import A1Image from "../../public/Images/A1.JPG"
import Footer from "../Components/Footer/Footer"
import { Link } from "react-router-dom"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"
import BirthdayCard from "../Components/BirthdayCard/BirthdayCard"

const HomePage = () => {
  const birthdayStudent = [{
    name:"Student 1",
    className:"className 7th",
    profilePhoto:""
  },{
    name:"Student 2",
    className:"className 7th",
    profilePhoto:""
  }]
  return (
    <div>
      <ResponsiveNavbar/>
      <Helmet>
      <title>Narain Global Academy - Best Private School in Bikaner | Quality Education for Your Child</title>
        <meta name="description" content="Looking for the best private school in Bikaner? Narain Global Academy offers quality education, extracurricular activities, and a nurturing environment. Enroll now!"/>
        <meta name="keywords" content="Narain Global Academy, school in Bikaner, best school Bikaner, quality education, holistic development, enroll now, education in Bikaner"/>
        <link rel="canonical" href="https://narainglobalacademy.com/"/>
      </Helmet>
      <div className="d-flex justify-content-between crSection">
        {/* <div className="d-flex flex-column justify-content-center align-items-center p-4">
          <div className="text-start ps-4 ms-4">
            <h1 className="crHeading text-start">There's still time to commit</h1>
            <button className="button">Next steps for accepted students</button>
          </div>
        </div>
        <div className="crImage">
          <img src="https://www.alverno.edu/images/Commit-24.png" alt=""/>
        </div> */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={A1Image} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={A1Image} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={A1Image} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="cont">
        <div className="container-fluid">
          <div className="d-flex justify-content-center p-4">
            <div className="col-md-10 text-center">
              <h1 className="contHeading">Welcome To Narain Global Academy</h1>
              <p className="contPara">Established in 2019, Narain Global Academy (NGA) is a co-educational institution located in the Eastern Periphery of Rajasthan. Founded by the Narain Education Society, our school was born out of the need for an academic institution that nurtures young talent through state-of-the-art facilities and innovative educational approaches.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid mt-4 pt-4">
        <div className="row">
          <div className="col-md-8 mb-4">
            <Heading HeadingText="Birthday Students"/>
  
            <div className="card rounded bg-danger rounded-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="p-2">
                      <img src="https://cdn.pixabay.com/photo/2020/10/06/21/54/cake-5633461__480.png" className="d-block w-100 rounded-5" alt="..."/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                      {
                        birthdayStudent.map((student, index) => {
                          const active = index === 0 ? " active" : "";
                          return (
                            <div key={index} className={`carousel-item${active}`}>
                              <BirthdayCard student={student} />
                            </div>
                          );
                        })
                      }
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
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <Heading HeadingText="What's New"/>
            <div className="bg-white shadow border p-3" style={{borderRadius:"10px"}}>
              <div className="content" style={{maxHeight:"280px",overflow:"hidden"}}>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
                <Link className="d-block p-2" to=''>Firsrt Newsejgns</Link>
              </div>
              <div className="text-end mt-3">
                <button className='btn btn-danger shadow-none rounded-3'>View All</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 container-fluid">
        <div>
          <Heading HeadingText="Academic Offerings"/>
        </div>
        <div className="">
          <div className="row">
            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                ImageURL="https://images.stockcake.com/public/3/1/a/31a14d57-5ac9-440c-ac8e-0b45f65d5f5d_large/kids-enjoying-className-stockcake.jpg"
                Heading="Primary Education"
                Text="Explore our comprehensive primary education programs designed to build a strong foundation for lifelong learning."
                ButtonText=""
                ButtonLink=""
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://images.stockcake.com/public/2/a/2/2a2c7b60-1c70-406a-ade9-cbfb062deb33_large/students-collaborating-together-stockcake.jpg"
                  Heading="Secondary Education"
                  Text="Dive into our secondary education programs that equip students with the knowledge and skills for future success."
                  ButtonText=""
                  ButtonLink=""
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://odmps.org/updates/wp-content/uploads/2022/02/SCIENCE-EXHIBITION2-559x220-1.jpg"
                  Heading="Special Programs"
                  Text="Discover our special programs that cater to diverse interests, including arts, sciences, and technology."
                  ButtonText=""
                  ButtonLink=""
                />
            </div>

            <div className="col-lg-6 col-xl-3 mb-4">
              <EOPCard
                  ImageURL="https://www.21kschool.com/in/wp-content/uploads/sites/4/2022/09/Top-5-Benefits-of-Co-Curricular-Activities-for-Students.png"
                  Heading="Extracurricular Activities"
                  Text="Explore our range of extracurricular activities that promote holistic development beyond academics."
                  ButtonText=""
                  ButtonLink=""
                />
            </div>


          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="mt-4" style={{borderRadius:"10px"}}>
          <div className="row justify-content-center">
            <div className="col-md-10 pb-4">
              <div className="p-left pt-4 pb-5 rounded shadow">
                <Heading HeadingText="Our Vision"/>
                <p className="contPara text-dark text-center me-4">At NGA, our vision is to create a positive revolution in our entire vicinity and redefine the concept of “formal education.” We believe that education should be more than just a means to an end; it should be a transformative journey that empowers individuals to reach their full potential and make a meaningful impact in the world. Our aim is to go beyond the traditional boundaries of education and foster a holistic learning environment that nurtures creativity, critical thinking, and empathy.</p>
                <Link to="/our-vision" className="btn btn-danger float-end me-4">Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                  </svg>
                </Link>
              </div>
            </div>
            {/* <div className="col-md-6 d-flex align-items-center text-center p-4">
              <img src={A1Image} style={{margin:"auto"}} className="rounded-3" alt="" width="100%" height="100%"/>
            </div> */}
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