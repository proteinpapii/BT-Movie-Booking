import React from 'react'
import Chair from './Chair';
import './style.scss';
import cn from 'classnames'


const ChairList = ({ data }) => {
    console.log("data: ", data);
    
  return (
    <div className='ChairList'>
        {
            data.map(hangGhe => {
                return <div key={hangGhe.hang} className={cn('rowChar d-flex gap-3', {disabled: !hangGhe.hang,})} style={{justifyContent: 'center', alignItems: 'center',}}>
                    <p className='mt-3 mb-0' style={{width: 30,}}>{hangGhe.hang}</p>
                    {
                        hangGhe.danhSachGhe.map((ghe) => {
                            return <Chair className={cn({disabled: !hangGhe.hang,})} key={ghe.soGhe} ghe={ghe}/>
                        })
                    }
                </div>
            })
        }
    </div>
  )
}

export default ChairList