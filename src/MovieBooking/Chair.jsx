import React from 'react'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/movieBooking/slice'
import cn from 'classnames'




const Chair = ({ ghe, className }) => {
  const dispatch = useDispatch()

  const { chairBookings, chairBookeds } = useSelector((state) => state.movieBooking)
  console.log("chairBookeds: ", chairBookeds);
  //console.log("chairBookings: ", chairBookings);

  return (
    <div 
      className={cn('Chair mt-3', className, { 
        booking: chairBookings.find((chair) => chair.soGhe === ghe.soGhe), 
        booked: chairBookeds.find((chair) => chair.soGhe === ghe.soGhe),
      })} 
      onClick={() => {
        dispatch(movieBookingActions.setChairBookings(ghe))
      }}
    >
      {ghe.soGhe}
    </div>
  )   
}

export default Chair