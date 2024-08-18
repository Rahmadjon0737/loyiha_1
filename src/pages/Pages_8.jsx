import React from 'react'
import left from '../assets/left.svg'
import Selected from '../components/Selected'
import { NavLink } from 'react-router-dom'
function Pages_8() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_7'}><img src={left} alt="logo" /></NavLink>
                <h1 className='text-[#012F56] font-[600] text-[20px] text-center'>История купленных билетов</h1>
                <div className='flex gap-3 items-center px-3'>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ФАМИЛИЯ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>Иванов</p>
                </div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ИМЯ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>Иван</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ВЫЛЕТ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>Бухара</p>
                </div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>АЭРОПОРТ ВЫЛЕТА:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>BHK</p>
                </div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ВРЕМЯ И ДАТА ВЫЛЕТА:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>17:40 24.03 2022</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ПРИЛЁТ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>Москва</p>
                </div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>АЭРОПОРТ ПРИЛЁТА:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>VKO</p>
                </div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>ВРЕМЯ И ДАТА ПРИЛЁТА:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>17:40 24.03 2022</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>АВИАКОМПАНИЯ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>Азимут А4 9064</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
                <div className='flex gap-3 items-center px-3 '>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>Азимут А4 9064:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>1</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
                <div className='flex gap-3 items-center px-3  pb-20'>
                    <h1 className='text-[14px] font-[600] text-[#7B7B7B]'>СТОИМОСТЬ ПОЕЗДКИ:</h1>
                    <p className='text-[#012F56] text-[14px] font-[600]'>22 520 ₽</p>
                </div>
            </div>
        </div>
    )
}

export default Pages_8