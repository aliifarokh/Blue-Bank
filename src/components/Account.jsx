import React from 'react'

const Account = ({ img , title , paragrapgh }) => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center items-center w-full py-3'>
            <img className='w-[80px] h-[55px] object-cover' src={img} alt="openning account options" />
        </div>
        <div className='flex flex-col w-full px-3 py-5 bg-[#ebf4fc] rounded-[25px] min-h-[200px]'>
            <h3 className='text-black text-center text-[15px] font-semibold'>{title}</h3>
            <p className='text-center leading-[27px] my-4 text-[#3094ea] text-[14px]'>{paragrapgh}</p>
        </div>
    </div>
  )
}

export default Account