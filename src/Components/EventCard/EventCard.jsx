import React from 'react'
import './EventCard.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const EventCard = ({ImageURL,Heading,Text,ButtonText,ButtonLink,EventDate}) => {
  return (
    <div className="eventCard">
        <div className="image" style={{backgroundImage: `url(${ImageURL})`}}></div>
        <div className="p-4">
            <h3 className="eventCardHeading">{Heading}</h3>
            {Text?<p className="eventCardParagraph">{Text}</p>:""}
            <br/>
        </div>

        {
            EventDate?  <div className="eventDate">
                            <span className='day'>{getDay(EventDate)}</span>
                            <span className='monthYear'>{getMonthYear(EventDate)}</span>
                        </div>: ""
        }

        {
            ButtonText?<Link to={ButtonLink} className='eventCardButton'>{ButtonText}</Link>:""
        }
        </div>
  )
}

export default EventCard


function getDay(inputDate) {
    const date = new Date(inputDate);
    return date.getDate();
}

function getMonthYear(inputDate) {
    const date = new Date(inputDate);
    const options = { month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}