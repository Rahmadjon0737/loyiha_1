import React from 'react'
import Selected from '../components/Selected'
import right from '../assets/right1.svg'
import Ellipse2 from '../assets/Ellipse2.svg'
import Down from '../assets/Down.svg'
import s1 from '../assets/Search1.svg'
import s2 from '../assets/Search2.svg'
import s3 from '../assets/Search3.svg'
import { NavLink } from 'react-router-dom'
function Pages_3() {
    return (
        <div className='max-w-md m-auto border'>
            <div className='bgImg h-[133px] w-full flex justify-end px-6 items-center  relative'>
                <Selected />
            </div>
            <div className='bg-white rounded-t-[20px] relative top-[-20px] '>
                <h1 className='text-[#012F56] text-[24px] font-[600] text-center py-4'>Mavjud reyslar</h1>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] rounded-[20px] p-6 mx-3 mt-6'>
                    <div className='text-[#012F56] flex justify-between'>
                        <div className='flex items-center gap-6'>
                            <div>
                                <h1 className='font-[600]'>17:40</h1>
                                <h1>BHK</h1>
                            </div>
                            <div>
                                <p className='text-[12px] text-[#7B7B7B]'>2s 05daq.</p>
                                <img src={right} alt="" />
                                <p className='text-[9px] text-[#7B7B7B]'>to’g’ridan to’g’ri</p>
                            </div>
                            <div>
                                <h1 className='font-[600]'>19:45</h1>
                                <h1>VKO</h1>
                            </div>
                        </div>
                        <div className='text-[#1A94FF] text-[20px] font-[600]'>2.93 mln</div>
                    </div>
                    <div className='h-[1px] bg-[#EBEBF0] mt-3'></div>

                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-3'>
                            <img src={Ellipse2} alt="" />
                            <h1 className='text-[12px] font-[500]'>Азимут А9-9041</h1>
                        </div>
                        <NavLink to={'/pages_4'}><img src={Down} alt="" /></NavLink>
                    </div>

                    <div className='mt-6 grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={s1} alt="" />
                                <p className='text-[10px]'>Yukxona: 25kg</p>
                            </div>
                            <div>
                                <img src={s2} alt="" />
                                <p className='text-[10px]'>Qolda 5kg</p>
                            </div>
                        </div>

                        <div>
                            <img src={s3} alt="" />
                            <p className='text-[10px]'>Tamaddi yoq</p>
                        </div>
                    </div>
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] rounded-[20px] p-6 mx-3 mt-6'>
                    <div className='text-[#012F56] flex justify-between'>
                        <div className='flex items-center gap-6'>
                            <div>
                                <h1 className='font-[600]'>17:40</h1>
                                <h1>BHK</h1>
                            </div>
                            <div>
                                <p className='text-[12px] text-[#7B7B7B]'>2s 05daq.</p>
                                <img src={right} alt="" />
                                <p className='text-[9px] text-[#7B7B7B]'>to’g’ridan to’g’ri</p>
                            </div>
                            <div>
                                <h1 className='font-[600]'>19:45</h1>
                                <h1>VKO</h1>
                            </div>
                        </div>
                        <div className='text-[#1A94FF] text-[20px] font-[600]'>2.93 mln</div>
                    </div>
                    <div className='h-[1px] bg-[#EBEBF0] mt-3'></div>

                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-3'>
                            <img src={Ellipse2} alt="" />
                            <h1 className='text-[12px] font-[500]'>Азимут А9-9041</h1>
                        </div>
                        <NavLink to={'/pages_4'}><img src={Down} alt="" /></NavLink>
                    </div>

                    <div className='mt-6 grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={s1} alt="" />
                                <p className='text-[10px]'>Yukxona: 25kg</p>
                            </div>
                            <div>
                                <img src={s2} alt="" />
                                <p className='text-[10px]'>Qolda 5kg</p>
                            </div>
                        </div>

                        <div>
                            <img src={s3} alt="" />
                            <p className='text-[10px]'>Tamaddi yoq</p>
                        </div>
                    </div>
                </div>
                <div className='text-[#012F56] shadow-[0px_0px_5px_#b5cbef] rounded-[20px] p-6 mx-3 mt-6'>
                    <div className='text-[#012F56] flex justify-between'>
                        <div className='flex items-center gap-6'>
                            <div>
                                <h1 className='font-[600]'>17:40</h1>
                                <h1>BHK</h1>
                            </div>
                            <div>
                                <p className='text-[12px] text-[#7B7B7B]'>2s 05daq.</p>
                                <img src={right} alt="" />
                                <p className='text-[9px] text-[#7B7B7B]'>to’g’ridan to’g’ri</p>
                            </div>
                            <div>
                                <h1 className='font-[600]'>19:45</h1>
                                <h1>VKO</h1>
                            </div>
                        </div>
                        <div className='text-[#1A94FF] text-[20px] font-[600]'>2.93 mln</div>
                    </div>
                    <div className='h-[1px] bg-[#EBEBF0] mt-3'></div>

                    <div className='flex items-center justify-between mt-4'>
                        <div className='flex items-center gap-3'>
                            <img src={Ellipse2} alt="" />
                            <h1 className='text-[12px] font-[500]'>Азимут А9-9041</h1>
                        </div>
                        <NavLink to={'/pages_4'}>
                            <img src={Down} alt="" />
                        </NavLink>
                    </div>

                    <div className='mt-6 grid grid-cols-2 gap-6'>
                        <div className='grid grid-cols-2'>
                            <div>
                                <img src={s1} alt="" />
                                <p className='text-[10px]'>Yukxona: 25kg</p>
                            </div>
                            <div>
                                <img src={s2} alt="" />
                                <p className='text-[10px]'>Qolda 5kg</p>
                            </div>
                        </div>

                        <div>
                            <img src={s3} alt="" />
                            <p className='text-[10px]'>Tamaddi yoq</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages_3