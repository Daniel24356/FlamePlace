import React from 'react'
import "./reception.css"
import img from "../../assets/img-2.png"

const Reception = ({first}) => {
  return (
    <div className='reception'>
       <div className="receptionImg">
        <img src={img} alt="" />
       </div>
       <div className="receptionText">
           <h3>{first}</h3>
           <div>
           <p>Lorem ipsum dolor sit amet, consectetur</p>
           <p>adipiscing elit. Ut elit tellus, luctus nec</p>
           </div>
       </div>
    </div>
  )
}

export default Reception