import React from 'react'
import group from '../assets/Group.png'
import './loader.css'
function Pages_1() {
    return (
        <div className='max-w-sm h-[100vh] m-auto '>
            <div className='py-24 h-full text-center '>
                <img src={group} alt="" className='mx-auto' />
                <div className='space-y-8 mt-12'>
                    <h1 className='text-[#1A94FF] font-[700] text-[32px]'>Dunyo parvoz</h1>
                    <h2 className='text-[#012F56] text-[24px] font-[600]'>Yuklanmoqda</h2>
                </div>
                <div className='loader text-[#1A94FF] mx-auto '>
                </div>
            </div>
        </div>
    )
}

export default Pages_1