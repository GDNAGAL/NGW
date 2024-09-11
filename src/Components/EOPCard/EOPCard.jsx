import React from 'react'
import './EOPCard.css'
import Button from '../Button/Button'

const EOPCard = ({ImageURL, Heading, Text, ButtonText, ButtonLink}) => {
  return (
    <div className="eopCard shadow">
        <div className="image" style={{backgroundImage: `url(${ImageURL})`}}></div>
        <div className="p-4">
            <h3 className="eopCardHeading">{Heading}</h3>
            <p className="eopPara mb-0">{Text}</p>
            {ButtonText && (
              <>
              <br/>
                <Button ButtonLink={ButtonLink} ButtonText={ButtonText} />
                <br/><br/>
              </>
            )}
        </div>
    </div>
  )
}

export default EOPCard