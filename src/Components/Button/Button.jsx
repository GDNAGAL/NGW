import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ButtonLink, ButtonText}) => {
  return (
    <Link to={ButtonLink} className="button">{ButtonText}</Link>
  )
}

export default Button