import React from 'react'

const Button = ({
  buttonText, buttonUrl
}) => {
  return (
    <>
    
      <a target='_blank' href={buttonUrl} className="rts-btn btn-primary-5">
        {buttonText} <i className="fal fa-arrow-right" />
      </a>
    </>
  )
}

export default Button