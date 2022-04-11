import React from 'react'
import "./CustomerInfo.css";

export default function CustomerInfo(props) {
    const {data}=props;
    const {Appointment,Email,Phone}=data

  return (
    <div className='CustomerInfo'>
    <div className="appointment">
        <span className='details'>Appointment:</span>
        <span>{Appointment}</span>
    </div>
    <div className="email">
        <span className='details'>Email:</span>
        <span>{Email}</span>
    </div>
    <div className="phone">
        <span className='details'>Phone:</span>
        <span>{Phone}</span>
    </div>

</div>
  )
}
