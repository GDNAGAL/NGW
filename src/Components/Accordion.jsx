import React from 'react'

const Accordion = ({ id, item }) => {
  return (
    <div className="accordion-item rounded-5 shadow border-0 mb-3">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className="accordion-button text-danger shadow-none rounded-5 collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}  
          aria-expanded="true"
          aria-controls={`collapse-${id}`}  
        >
          <div className='d-flex justify-content-between w-100 me-5'>
            <div>{item.title}</div>
            <div>10.03.2024</div>
          </div>
        </button>
      </h2>
      <div
        id={`collapse-${id}`}  // Setting the collapse panel ID dynamically
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${id}`}
      >
        <div className="accordion-body">
          <strong>This is the {item.title} accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables.
        </div>
      </div>
    </div>
  )
}

export default Accordion;
