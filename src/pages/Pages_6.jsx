import React from 'react'
import Selected from '../components/Selected'
import tg from '../assets/tg.svg'
import { NavLink } from 'react-router-dom'
function Pages_6() {
    return (
        <div className='max-w-md m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_7'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                    Sotib olingan chiptalar
                </NavLink>
                <NavLink to={'/pages_9'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                    Chegirmalar
                </NavLink>
                <NavLink to={'/pages_10'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                    Xabarnoma
                </NavLink>
                <NavLink to={'/pages_11'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                    Profil
                </NavLink>
                <NavLink to={'/pages_12'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                    Ma'lumotlar 
                </NavLink>
                <NavLink to={'/pages_13'} className='border border-[#1A94FF] cursor-pointer py-3  text-center rounded-[10px]'>
                   Bog'lanish
                </NavLink>
            </div>
            <img src={tg} alt="telegram" className='pb-16 mx-auto' />
        </div>
    )
}

export default Pages_6