import React from 'react'
import './style.scss'
import ChairList from './ChairList'
import Result from './Result'
import data from './danhSachGhe.json'


const MovieBooking = () => {
  return (
    <div className='MovieBooking container'>
      <h1>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
      <div className='row mt-5'>
        <div className='col-8'>
          <div className="screen p-2 text-center mb-3 container">MÀN HÌNH</div>
          <ChairList data={data} />
        </div>
        <div className="col-4">
          <Result />
        </div>
      </div>
    </div>
  )
}

export default MovieBooking