import Accordion from "../Components/Accordion";
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
      <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="p-3 rounded-5 border mb-4">
                <Heading HeadingText="News" showBar={false} className="mb-3"/>
                {news.map((item, index) => (
                  <Accordion key={index} item={item} id={"news"+index}/>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 rounded-5 border">
                <Heading HeadingText="Events" showBar={false} className="mb-3"/>
                {events.map((item, index) => (
                  <Accordion key={index} item={item} id={"event"+index}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default NewsEvents
