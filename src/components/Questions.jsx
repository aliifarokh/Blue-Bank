import React from 'react'
import ControlledAccordions from './ControlledAccordions'
import { appdown } from '../assets'

const Questions = () => {
    return (
        <div className='w-full bg-[#fbfafb] px-5 lg:px-20 py-20'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <h3 className='text-[#3094ea] text-[35px] font-semibold mb-6'>سوالات متداول</h3>
                <ControlledAccordions />
                <h3 dir='rtl' className='text-[#7c7d8a] text-center text-[25px] font-semibold mt-16'>خط ارتباطی برای پاسخ <br className='block md:hidden' /> به سوالات شما</h3>
                <button className='rounded-[25px] text-white text-[18px] my-6 hover:text-[#0056b3] py-[5px] px-[30] h-[46px] w-[106px] bg-[#3094ea] justify-center items-center flex'>
                    بلولاین
                </button>
            </div>
        </div>
    )
}

export default Questions