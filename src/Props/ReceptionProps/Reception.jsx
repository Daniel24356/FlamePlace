import React from 'react'
import "./reception.css"
import img from "../../assets/IMG_9710.jpg"


const Reception = ({first}) => {
  return (
    <div className='reception'>
       <div className="receptionImg">
        <img src={img} alt="" />
       </div>
       <div className="receptionText">
           <h3>{first}</h3>
           <div>
           <p>Our warm and inviting reception</p>
           <p>team is available 24/7</p>
           </div>
       </div>
    </div>
  )
}

export default Reception