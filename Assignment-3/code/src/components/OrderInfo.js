import React from 'react'
import "./OrderInfo.css"

export default function OrderInfo() {
    const Orderinfo = {
        Status: 'In progress',
        Door: 'Mark',
        Time: '10:30',
        Date: ' (25-05-2016)'
      }
  return (
    <div className='OrderInfo'>
      <div className="status">
        <h5>Status</h5>
        <span>⚫</span>
        <span>{Orderinfo.Status}</span>
      </div>
      <div className="door">
        <h5>Door</h5>
        <p>{Orderinfo.Door}</p>
      </div>
      <div className="time">
      <h5>Time</h5>
        <span>{Orderinfo.Time}</span>
        <span className='time-2'>{Orderinfo.Date}</span>
      </div>
    </div>
  )
}
