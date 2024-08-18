import React from 'react'
import Selected from '../components/Selected'
import left from '../assets/left.svg'
import Notification from '../assets/Notification.svg'

import { NavLink } from 'react-router-dom'

function Pages_10() {
    return (
        <div className='max-w-md m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_6'}><img src={left} alt="" /></NavLink>
                <h1 className='font-[600] text-[20px] text-center pb-3'>Уведомления</h1>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] relative rounded-[10px] p-3 mt-6'>
                    <div className='text-[#012F56] '>
                        <img src={Notification} alt="Notification" className='absolute top-3 *:'/>
                        <h1 className='font-[500] px-3 ml-3'>Иванов Иван Иванович, обновите паспортные данные</h1>
                        <p className='text-[10px] absolute right-3 bottom-3'>10.02.2022</p>
                    </div>
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] relative rounded-[10px] p-3 mt-6'>
                    <div className='text-[#012F56] '>
                        <img src={Notification} alt="Notification" className='absolute top-3 *:'/>
                        <h1 className='font-[500]  px-3 ml-3'>Рейс из Москвы в Бухару (10.01.2022) отменён, возврат денежных средств будет в ближайшее время</h1>
                        <p className='text-[10px] absolute right-3 bottom-3'>10.02.2022</p>
                    </div>
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] relative rounded-[10px] p-3 mt-6'>
                    <div className='text-[#012F56] '>
                        <img src={Notification} alt="Notification" className='absolute top-3 *:'/>
                        <h1 className='font-[500]  px-3 ml-3'>Иванов Иван Иванович, обновите паспортные данные</h1>
                        <p className='text-[10px] absolute right-3 bottom-3'>10.02.2022</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages_10