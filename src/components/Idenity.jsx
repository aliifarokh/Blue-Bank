import React from 'react'
import { secondv } from '../assets'

const Idenity = () => {
    return (
        <div className='w-full px-5 lg:px-20 bg-[#fbfafb] py-28'>

            <div className='flex flex-col xl:flex-row justify-center items-center'>
                <div className='w-full xl:w-1/2 flex justify-center items-center'>
                    <video className='w-[630px] h-[529px]' autoPlay muted loop>
                        <source src={secondv} type="video/mp4" />
                    </video>
                </div>
                <div dir='rtl' className='w-full  xl:w-1/2 flex flex-col justify-center content-center '>

                    <h3 className='text-[35px] text-[#3094ea] font-[700]'>شناسایی هویت</h3>
                    <p className='text-[16px] text-[#737789] font-[400] my-5 leading-[40px]'>
                        “اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در بلو را دارم. <br className='hidden sm:block md:hidden' />” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا ضبط و ارسال کنید.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Idenity