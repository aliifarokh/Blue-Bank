import React from 'react'
import { chat } from '../assets'

const BlueSection = () => {
    return (
        <div className='w-full px-5 lg:px-20 bg-[#3997e9] relative z-[99]'>

            <div className='flex flex-col xl:flex-row justify-center items-center py-36'>
                <div dir='rtl' className='w-full text-white xl:w-1/2 flex flex-col  justify-center content-center '>

                    <h3 className='text-[35px] font-[700]'>بلولاین؛ همیشه به وقت همه‌جا</h3>
                    <p className='text-[16px] font-[400] my-5 leading-8'>
                        اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا با شماره ۸۷۶۴۱-۰۲۱ تماس بگیرید. <br />کارشناسان بلولاین همیشه آماده‌ی پاسخ‌گویی و حل مشکلات احتمالی شما هستند.
                    </p>

                </div>
                <div className='w-full xl:w-1/2' >
                    <img src={chat} alt="chat" />
                </div>
            </div>

        </div>
    )
}

export default BlueSection