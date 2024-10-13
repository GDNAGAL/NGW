import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Heading/Heading"
import ResponsiveNavbar from "../Components/ResponsiveNavbar/ResponsiveNavbar"

const NewsEvents = () => {
  // Sample data for news and events
  const news = [
    {
      title: "Annual Sports Day 2024",
      date: "October 15, 2024",
      description: "Narain Global Academy will host its Annual Sports Day, where students will compete in various athletic events, including track and field, football, and basketball."
    },
    {
      title: "Science Exhibition 2024",
      date: "November 1, 2024",
      description: "A grand science exhibition where students will showcase their innovative projects and experiments, promoting creativity and scientific inquiry."
    },
    {
      title: "Independence Day Celebration",
      date: "August 15, 2024",
      description: "The students and staff came together to celebrate Independence Day with patriotic performances, speeches, and cultural activities."
    },
  ];

  const events = [
    {
      title: "Parent-Teacher Conference",
      date: "November 10, 2024",
      description: "An opportunity for parents to discuss their child’s academic progress with teachers and address any concerns or queries."
    },
    {
      title: "Winter Carnival",
      date: "December 20, 2024",
      description: "A fun-filled winter carnival with games, food stalls, and cultural performances, bringing the school community together for the holiday season."
    },
    {
      title: "Annual Day Celebration",
      date: "January 15, 2025",
      description: "Our Annual Day celebration will feature dance, drama, and musical performances by students, celebrating their talents and achievements."
    }
  ];

  return (
    <>
      <ResponsiveNavbar />
      <div className="p-4 mb-4">
        <div className="mt-4 p-4 bg-light" style={{ borderRadius: "10px" }}>
          <Heading HeadingText="News and Events at Narain Global Academy" />
          
          <h2 className="mt-5 mb-4 text-primary">Recent News</h2>
          <div className="row">
            {news.map((item, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title text-dark">{item.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                    <p className="card-text text-secondary">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-5 mb-4 text-success">Upcoming Events</h2>
          <div className="row">
            {events.map((item, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title text-dark">{item.title}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{item.date}</h6>
                    <p className="card-text text-secondary">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsEvents
