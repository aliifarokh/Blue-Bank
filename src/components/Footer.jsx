import React from 'react'
import { anar, android, bazar, download, instagram, mayket, pwa, sib, sibche, winstagram, wlinkedin, wtwitter } from '../assets'

const Footer = () => {
  return (
    <div className='w-full bg-[#3094ea] py-16 px-6 sm:px-10 md:px-16 lg:px-20'>

      <div className='w-full flex flex-col gap-3'>

        <div className='w-full flex lg:w-auto flex-col gap-8 lg:gap-0 lg:flex-row'>
          <div className='flex flex-col justify-center items-center  gap-[10px]'>
            <img className='h-[40px] w-[160px]' src={android} alt="android" />
            <img className='h-[40px] w-[160px]' src={pwa} alt="pwa" />
            <img className='h-[40px] w-[160px]' src={sib} alt="sibApp" />
            <img className='h-[40px] w-[160px]' src={sibche} alt="sibche" />
            <img className='h-[40px] w-[160px]' src={anar} alt="anar" />
            <img className='h-[40px] w-[160px]' src={bazar} alt="bazar" />
            <img className='h-[40px] w-[160px]  mb-8' src={mayket} alt="mayket" />

            <div className='flex gap-2'>

              <a href='' className='relative w-[47px] h-[47px]  -white rounded-full'>
                <img className='w-[25px] h-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={wtwitter} alt="twitter" />
              </a>
              <a href='https://instagram.com/alifarokh_web?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' className='relative w-[47px] h-[47px]  -white rounded-full'>
                <img className='w-[25px] h-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={winstagram} alt="instagram" />
              </a>
              <a href='https://www.linkedin.com/in/ali-farokh-749a49288/' className='relative w-[47px] h-[47px]  -white rounded-full'>
                <img className='w-[25px] h-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={wlinkedin} alt="linkedin" />
              </a>

            </div>

          </div>
          <div dir='rtl' className=' lg:flex-1 w-full text-white text-center lg:text-right'>
            <h3 className='text-[27px] font-semibold'>امنیت حساب‌ها در بلو</h3>
            <div className='flex flex-col w-full gap-6 py-3 pl-3'>
              <div className='w-full'>
                <h4 className='text-[15px] font-semibold my-3'>نحوه حفاظت از سرمایه مشتریان</h4>
                <p className='text-[14px]'>مبالغ سپرده‌‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین شده مورد تضمین «صندوق ضمانت سپرده‌های بانک مرکزی» است..</p>
              </div>
              <div className='w-full'>
                <h4 className='text-[15px] font-semibold my-3'>پروتکل‌های امنیتی</h4>
                <p className='text-[14px]'>در بلو همه پروتکل‌های امنیتی در سیستم‌های زیرساخت بانکی و همچنین استانداردهای بانک مرکزی در خصوص تسویه وجوه و<br /> حسابداری، به‌دقت رعایت شده است.</p>
              </div>
              <div className='w-full'>
                <h4 className='text-[15px] font-semibold my-3'>آسایش بیشتر</h4>
                <p className='text-[14px]'>جایگزینی کارت بانکی با پول کاغذی به دلیل اشراف لحظه‌ای بر دارایی‌های مشتریان، سبب امنیت دوچندان حساب‌های بانکی شده است. <br /> این تجربه موفق نشان داده است، روند دیجیتالی شدن منجر به آسایش و راحتی بیشتری برای مشتریان می‌شود.</p>
              </div>
            </div>
            <div className='mt-6 flex flex-col gap-3'>
              <h3 className='text-[27px] font-semibold'>ارتباط با ما</h3>
              <p className='text-[14px]'>آدرس : تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک ۴۳</p>
              <p className='text-[14px]'>تلفن : ۸۷۶۴۱ - ۰۲۱</p>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col gap-5 lg:flex-row lg:justify-between'>
          <div className='flex flex-col lg:flex-row text-white items-center gap-3'>
            <img className='w-[50px] h-[50px]' src={download} alt="blue bank logo" />
            <p className='text-[14px]'> Copyright © 2023 bluBank Saman.<a className='' href="https://aliifarokh.github.io/portfolio/"> Ali Farokh</a> All rights reserved. </p>
          </div>
          <div className='flex gap-3 items-center justify-center text-white'>
            <a href="">Contact us</a>
            |
            <a href="">About us</a>
            |
            <a href="">Hiring</a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Footer