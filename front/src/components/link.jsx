import React from 'react'

const Link = ({
  id, className, img, href, to, text, option,
}) =>{
  return (
    <>
      <a href={href} className="header__text" to={to}>
        <div className="header__link" id={id}>
          <img src={img} className={className}/>
          <span> {text} {option} </span>
        </div> 
      </a>
    </>
  )
}

export default Link