import React from 'react'
import { thirdv } from '../assets'

const Pay = () => {
    return (
        <div className='w-full px-5 lg:px-20 bg-white py-28'>

            <div className='flex flex-col xl:flex-row justify-center items-center'>
                <div dir='rtl' className='w-full xl:w-1/2 flex flex-col justify-center content-center'>

                    <h3 className='text-[35px] text-[#3094ea] font-[700]'>انتقال هوشمند پول</h3>
                    <p className='text-[16px] text-[#737789] font-[400] my-5 leading-[40px]'>
                    «انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید، جابه جا کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست و برای انتقال چه میزان پول از کدامیک از آنها باید استفاده کرد. ما این کار را برای شما انجام می‌دهیم.
                    </p>

                </div>
                <div className='w-full xl:w-1/2 flex justify-center items-center'>
                    <video className='w-[480px] h-[662px]' autoPlay muted loop>
                        <source src={thirdv} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>
    )
}

export default Pay