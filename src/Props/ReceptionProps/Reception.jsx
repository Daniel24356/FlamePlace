import React from 'react'
import "./reception.css"
import img from "../../assets/img-2.png"


const Reception = ({first, second, third}) => {
  return (
    <div className='reception'>
       <div className="receptionImg">
        <img src={img} alt="" />
       </div>
       <div className="receptionText">
           <h3>{first}</h3>
           <div>
            <p>{second}</p>
            <p>{third}</p>
           {/* <p>Our warm and inviting reception</p>
           <p>team is available 24/7</p> */}
           </div>
       </div>
    </div>
  )
}

export default Reception