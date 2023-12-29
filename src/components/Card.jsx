import React from 'react'
import { cardb, cardg, cardr } from '../assets'

const Card = ({ card , myref , myref2 }) => {
  return (
    <div ref={myref2} className='flex lg:flex-row flex-col w-full px-5 lg:px-20 py-24'>

      <div className='flex  flex-1 relative my-4 justify-center items-center'> 
        <div className='bg-[#f8f8f8] rounded-full w-[700px] h-[700px] absolute top-40 right-40 ' />
        <img className='w-[600px] h-[600px] relative z-[30] animate-updown object-contain ' src={card} alt="card" />

        <div ref={myref} className='self-end z-[40] flex absolute bottom-4 right-0 gap-2'>
          <span className='w-3 h-3 cursor-pointer bg-[#de2e43] rounded-full flex' />
          <span className='w-3 h-3 cursor-pointer bg-[#37ad8b] rounded-full flex' />
          <span className='w-3 h-3 cursor-pointer bg-[#4176b9] rounded-full flex' />
        </div>

      </div>

      <div className='flex flex-col justify-center items-center flex-1 relative z-[20] my-4'>
        <article className=" w-full flex flex-col px-5">

          <h2 className="text-right text-[#3094ea] text-[32px] font-semibold my-2">بلو، فقط آبی نیست ...</h2>

          <ul dir="rtl" className={`list-disc list-inside`}>

            <li className="flex text-right my-5 text-[#737789] leading-8">
              <p>
                عضو سامانه شتاب بانک مرکزی
              </p>
            </li>
            <li className="flex text-right my-5 text-[#737789] leading-8">
              <p>
                ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری <br /> در تهران و ۱۰ روز کاری در سایر نقاط کشور              </p>
            </li>
            <li className="flex text-right my-5 text-[#737789] leading-8">
              <p>
                دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو
              </p>
            </li>
            <li className="flex text-right my-5 text-[#737789] leading-8">
              <p>
                امکان مسدودکردن کارت از طریق اپلیکیشن بلو
              </p>
            </li>

          </ul>

        </article>
      </div>
    </div>
  )
}

export default Card