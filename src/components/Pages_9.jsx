import React from 'react'
import Selected from './Selected'
import left from '../assets/left.svg'
import question from '../assets/question.svg'
import { NavLink } from 'react-router-dom'
function Pages_9() {
    return (
        <div className='max-w-sm  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_6'}><img src={left} alt="" /></NavLink>
                <h1 className='font-[600] text-[20px] text-center'>Бонусная программа</h1>
                <div className='bg-[#1A94FF] text-white text-[14px] w-full h-[64px] rounded-[5px] p-3 flex justify-between items-center gap-4'>
                    <p>Купи 4 билета, получи 50% скидки на покупку 5-го билета!</p>
                    <img src={question} alt="" />
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] rounded-[15px] p-6  mt-6'>
                    <div className='text-[#012F56] flex justify-between'>
                        <h1 className='font-[500]'>Иванов Иван Иванович</h1>
                    </div>
                    <div className='h-[1px] bg-[#EBEBF0] my-3 mt-3'></div>
                    <p>Для использования скидки необходимо купить ещё 2 билета</p>
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] rounded-[15px] p-6  mt-6'>
                    <div className='text-[#012F56] flex justify-between'>
                        <h1 className='font-[500]'>Петров Пётр Петрович</h1>
                    </div>
                    <div className='h-[1px] bg-[#EBEBF0] my-3 mt-3'></div>
                    <p>Для использования скидки необходимо купить ещё 1 билета</p>
                </div>
            </div>
        </div>
    )
}

export default Pages_9