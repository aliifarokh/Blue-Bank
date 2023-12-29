import React from "react"


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { appdown, bighero, firstv } from "../assets";
import { account } from "../constants";
import Account from "./Account";
import { list } from "postcss";


const Lovely = () => {
  return (
    <div className='flex flex-col xl:flex-row my-5 px-5 lg:px-20 gap-5'>
      <div className='w-full xl:w-[60%]'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="py-10 h-full  -black flex justify-center items-center"
        >

          <SwiperSlide className="flex justify-center items-center ">
            <article className="justify-start xl:justify-end w-full flex flex-col py-4 xl:mr-10">
              <h2 className="text-center xl:text-right text-[#3094ea] text-[32px] font-semibold my-4">بلو؛ بانک ولی دوست‌داشتنی</h2>
              <p className="xl:text-right text-center my-5 text-[#737789] leading-8">بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی اپلیکیشن <br className="md:block hidden" /> موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده،  بانکی است که همیشه<br className="md:block hidden" /> همراه شما خواهد بود.</p>
              <button className='rounded-[25px] h-[35px] w-[160px] bg-[#3094ea] justify-center flex my-5 self-center'>
                <img className="h-[35px] w-[145px] object-cover" src={appdown} alt="دانلود اپلیکیشن" />
              </button>
            </article>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center  -black px-12 md:px-16 lg:px-8">
            <article className=" w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-5">
              {
                account.map((item) => (
                  <Account key={item.id} title={item.title} img={item.icon} paragrapgh={item.paragraph} />
                ))
              }
            </article>
          </SwiperSlide>

          <SwiperSlide className="flex justify-center items-center ">
            <article className=" w-full flex flex-col px-5">
              <h2 className="text-right text-[#3094ea] text-[35px] font-semibold my-2">حفاظت از سرمایه مشتریان</h2>

              <ul dir="rtl" className={``}>

                <li className="flex text-right my-5 text-[#737789] leading-8">
                  
                  <p>
                    مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین شده، مورد تضمین صندوق ضمانت سپرده‌های بانک مرکزی است.
                  </p>
                </li>
                <li className="flex text-right my-5 text-[#737789] leading-8">
                  
                  <p>
                    ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را محرمانه تلقی کرده و متعهد می‌شویم تحت هر شرایطی جز در موارد قانونی از انتشار آن جلوگیری کرده و مسئولیت این موضوع را به طور کامل می‌پذیریم.
                  </p>
                </li>



              </ul>

            </article>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='w-[90%] xl:w-[40%] py-10 flex justify-center items-center  -black'>
        <video className="w-full h-full xl:w-[90%] xl:h-[75%] object-contain" autoPlay muted loop>
          <source src={firstv} type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default Lovely


