import React from 'react'
import Selected from '../components/Selected'
import airpost from '../assets/Airport.svg'
import airpostq from '../assets/Airportq.svg'
import airposti from '../assets/Searc.svg'
import { NavLink } from 'react-router-dom'
function Pages_4() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImg h-[133px] w-full flex justify-end px-6 items-center border relative'>
                <Selected />
            </div>
            <div className='bg-white rounded-t-[20px] relative top-[-20px] text-[#012F56]  p-3'>
                <div className='flex items-center gap-2'>
                    <img src={airpost} alt="airport" />
                    <h1 className='text-[#012F56] text-[24px] font-[600]'>Uchish</h1>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Uchish shaxri:</h1>
                    <p className='text-[14px] font-[600]'>Buxara</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>UCHISH AEROPORTI::</h1>
                    <p className='text-[14px] font-[600]'>BHK</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>UCHISH SANASI VA VAQTI:</h1>
                    <p className='text-[14px] font-[600]'>17:40 24.03.2022</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] mt-3'></div>
            </div>

            <div className='bg-white rounded-t-[20px] relative top-[-20px] text-[#012F56]  p-3'>
                <div className='flex items-center gap-2'>
                    <img src={airpostq} alt="airport" />
                    <h1 className='text-[#012F56] text-[24px] font-[600]'>Qonish</h1>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Qonish shaxri:</h1>
                    <p className='text-[14px] font-[600]'>Москва</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Qonish AEROPORTI::</h1>
                    <p className='text-[14px] font-[600]'>VKO</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Qonish SANASI VA VAQTI:</h1>
                    <p className='text-[14px] font-[600]'>17:40 24.03.2022</p>
                </div>
                <div className='h-[1px] w-full bg-[#EBEBF0] my-3'></div>
            </div>

            <div className='bg-white rounded-t-[20px] relative top-[-20px] text-[#012F56]  p-3'>
                <div className='flex items-center gap-2'>
                    <img src={airposti} alt="airport" />
                    <h1 className='text-[#012F56] text-[24px] font-[600]'>Asosiy tafsilotlar</h1>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Davomiylik:</h1>
                    <p className='text-[14px] font-[600]'>Москва</p>
                </div>
                <p className='text-[14px] font-[600] mt-2'>Азимут А4-9064</p>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>Qonish yuki</h1>
                    <p className='text-[14px] font-[600]'>2s, 15daq.</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                    <h1 className='text-[14px] text-[#7B7B7B] font-[600]'>YUKXONA:</h1>
                    <p className='text-[14px] font-[600]'>15 kg</p>
                </div>
                <p className='text-[14px] font-[600] mt-2'>Tamanddisiz</p>
                <h1 className='text-center text-[#1A94FF] text-[32px] font-[600] my-6'>2.93 mln sum</h1>
                <NavLink to={'/pages_5'}>
                    <button className='bg-[#1A94FF] text-white w-full text-[20px] h-[61px] rounded-[10px]'>Sotib olish</button>
                </NavLink>
                <NavLink to={'/'}>
                    <button className='border-[#1A94FF] text-[#1A94FF] w-full text-[20px] h-[61px] border rounded-[10px] mt-2'>Ortga</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Pages_4