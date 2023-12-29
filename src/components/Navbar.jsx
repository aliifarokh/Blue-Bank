import React, { useState } from 'react'
import { hamMenu, logo, out, winstagram, wlinkedin, wtwitter } from '../assets';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';



const Navbar = ({ fixed }) => {


    const [flag, setFlag] = React.useState(false)



    return (
        <div className={`py-8 px-4 xl:px-24 bg-white shadow-xl ${fixed ? "sticky top-[0px] z-[999] w-full" : ""}`}>
            <div className={`w-full flex items-center gap-x-24 justify-between`}>
                <figure className='w-[60px] h-[50px]'>
                    <img className='w-full h-full flex' src={logo} alt="blue bank logo" />
                </figure>
                <nav className='hidden xl:flex flex-1 flex-row-reverse'>
                    <ul className='flex gap-10'>
                        {
                            navLinks.map((item) => (
                                <li className='' key={item.id}>
                                    <a className='text-[#737789] hover:text-[#3b9aeb] duration-[.4s]' href=''>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <div className='flex gap-x-4 items-center'>
                    <button className='rounded-full bg-[#3094ea] py-3 px-2 text-white hidden md:flex'>
                        باز کردن حساب در بلو
                    </button>
                    <figure className='flex xl:hidden w-[30px] h-[30px]'>
                        <img className='w-full h-full cursor-pointer' onClick={() => setFlag(true)} src={hamMenu} alt="hamburger menu" />
                    </figure>
                    <div className={`fixed h-[100vh] xl:hidden flex justify-end bg-[#252c4bad] duration-[1s] z-[9999] top-0 right-0 ${flag ? "w-[100%]" : "w-[0%]"}`}>
                        <div className={`h-full bg-[#f6f6fe] flex justify-center items-center relative duration-[1s] ${flag ? "w-[90%] sm:w-[540px]" : "w-[0%] sm:w-[0px]"}`}>

                            <img className='w-[17px] h-[17px] object-contain absolute top-[30px] left-[100px] cursor-pointer' onClick={() => setFlag(false)} src={out} alt="" />

                            <div className={`w-full flex flex-col p-10 `}>

                                <ul dir='rtl' className={`flex flex-col-reverse duration-[1s] gap-4 `}>
                                    {
                                        navLinks.map((val) => (
                                            <li className={`${flag ? "opacity-100 visible duration-1000" : " opacity-0 invisible duration-500"}  w-[200px]`} key={val.id}>
                                                <a className={`duration-[.4s]  ${(val.id === "3") ? "text-[#737789]" : "text-[black]"} hover:text-[#3b9aeb]`} href="">{val.title}</a>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <div className={`flex gap-2 self-center my-20  ${flag ? "opacity-100 visible duration-1000" : " opacity-0 invisible duration-500"}`}>

                                    <a href='' className='relative w-[47px] h-[47px] bg-[#e4e4ee] rounded-full group overflow-hidden'>
                                        <img className='w-[25px] h-[25px] absolute z-[2] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' src={wtwitter} alt="twitter" />
                                        <span className='absolute w-[47px] rounded-full duration-500 h-[47px] z-[1] left-[50%] translate-x-[-50%] bg-[#3b9aeb] top-[100%] group-hover:top-[0%]' />
                                    </a>
                                    <a href='https://instagram.com/alifarokh_web?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D' className='relative w-[47px] h-[47px] bg-[#e4e4ee] rounded-full group overflow-hidden'>
                                        <img className='w-[25px] h-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] translate-y-[-50%]' src={winstagram} alt="instagram" />
                                        <span className='absolute w-[47px] rounded-full duration-500 h-[47px] z-[1] left-[50%] translate-x-[-50%] bg-[#3b9aeb] top-[100%] group-hover:top-[0%]' />
                                    </a>
                                    <a href='https://www.linkedin.com/in/ali-farokh-749a49288/' className='relative w-[47px] h-[47px] bg-[#e4e4ee] rounded-full group overflow-hidden'>
                                        <img className='w-[25px] h-[25px] absolute top-[50%] left-[50%] translate-x-[-50%] z-[2] translate-y-[-50%]' src={wlinkedin} alt="linkedin" />
                                        <span className='absolute w-[47px] rounded-full duration-500 h-[47px] z-[1] left-[50%] translate-x-[-50%] bg-[#3b9aeb] top-[100%] group-hover:top-[0%]' />
                                    </a>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;