import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieBookingActions } from '../store/movieBooking/slice'
import './style.scss'

const Result = () => {
  const dispatch = useDispatch()

  const { chairBookings } = useSelector((state) => state.movieBooking)
  console.log("chairBookings: ", chairBookings);

  return (
    <div className='Result'>
      <h2 className='mt-5'>Danh sách ghế bạn chọn</h2>
      <div className='d-flex gap-3 mt-3'>
        <div className='Chair booked'></div>
        <p>Ghế đã đặt</p>
      </div>
      <div className='d-flex gap-3 mt-3'>
        <div className='Chair booking'></div>
        <p>Ghế đang chọn</p>
      </div>
      <div className='d-flex gap-3 mt-3'>
        <div className='Chair'></div>
        <p>Ghế chưa đặt</p>
      </div>

      <table className='table mt-3'>
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {
            chairBookings.map(chair => (
              <tr key={chair.soGhe}>
                <td>{chair.soGhe}</td>
                <td>{chair.gia}</td>
                <td
                  className='text-danger fw-bold'
                  style={{cursor: 'pointer'}}
                  onClick={() => {
                    dispatch(movieBookingActions.setChairBookings(chair))
                  }}
                >
                  X
                </td>
              </tr>
            ))
          }


          <tr>
            <td>Tổng tiền</td>
            <td>
              {
                chairBookings.reduce((total, chair) => {
                  return (total += chair.gia)
                }, 0)
              }
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <button
        className='btn btn-success'
        onClick={() => {
          dispatch(movieBookingActions.setChairBookeds())
        }}
      >
        Thanh toán
      </button>
    </div>


  )
}

export default Result