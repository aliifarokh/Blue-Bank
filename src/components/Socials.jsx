import React from 'react'


const Socials = ({ color , image , alt , icon , user , comment }) => {
  return (
    <div className='w-full flex justify-center items-center min-h-[250px] rounded-[15px] relative shadow-[0px_0px_12px_0px_#ddd]'>
        <img style={{outlineColor: color}} className={`w-[75px] h-[75px] rounded-full outline outline-4 absolute top-[-35px] left-[50%] translate-x-[-50%]`} src={image} alt={alt} />
        <img className='w-[30px] h-[30px] absolute top-[20px] right-[20px]' src={icon} alt={icon} />
        <article className='flex flex-col justify-center items-center px-5'>
            <h4 className='mb-3 text-[17px] font-semibold'>{user}</h4>
            <p dir='rtl' className='text-right text-[15px] leading-7 text-[#737789]'>{comment}</p>
        </article>  
    </div>
  )
}

export default Socials