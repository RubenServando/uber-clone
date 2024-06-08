import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
  return (
    <div className='p-2 md:pd-6
    border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>Get a ride</p>
        <InputItem type='source' />
        <InputItem type='destination' />
    </div>
  )
}

export default SearchSection