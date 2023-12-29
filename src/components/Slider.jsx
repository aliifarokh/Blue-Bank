import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Socials from './Socials';
import { comments } from '../constants';




const Slider = () => {
    return (
        <div className='w-full py-44'>
            <div dir='rtl' className='flex justify-center items-center my-10'>
                <h2 className='text-[#3094ea] text-[35px] text-center font-[700]'>ما را در شبکه‌های اجتماعی <br className='block md:hidden' /> دنبال کنید:</h2>
            </div>

            <Swiper
                className='my-20 py-10'
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay]}
                loop={true}
                breakpoints={{
                    720: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    850: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                }}
            >

                {
                    comments.map((val)=>(
                        <SwiperSlide key={val.id}>
                            <Socials user={val.name} color={val.color} image={val.image} icon={val.icon} alt={val.name} comment={val.comment} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>


        </div>
    )
}

export default Slider