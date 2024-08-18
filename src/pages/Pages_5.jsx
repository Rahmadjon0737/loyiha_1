import React, { useState } from 'react'
import Selected from '../components/Selected'
import { NavLink } from 'react-router-dom'
import err from '../assets/Close.svg'

function Pages_5() {
    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(0)
    const minus = () => {
        setCount(c => c == 0 ? 0 : --c)
    }
    const plus = () => {
        setCount(c => c + 1)
    }
    function closeModall(e) {
        if (e.target.className == "outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full") setOpen(false)
    }
    function closeModall1(e) {
        console.log(e)
        if (e.target.className == 'bg-black/40 w-full h-full top-0 left-0 absolute') setOpen(false)
    }
    return (
        <div onClick={closeModall} className='max-w-md  m-auto border relative  overflow-hidden'>
            <div className='bgImg h-[133px] w-full flex justify-end px-6 items-center  relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white rounded-t-[20px] relative top-[-20px] text-[#012F56]  p-3'>
                <div className=' text-center px-20 flex flex-col justify-center my-16'>
                    <h1 className='text-[#012F56] text-[16px] font-[400]'>Yolovchi miqdori</h1>
                    <div className='flex justify-center  items-center text-[30px]  gap-6'>
                        <p className='cursor-pointer select-none' onClick={minus}>-</p>
                        <h1>{count}</h1>
                        <p className='cursor-pointer select-none' onClick={plus}>+</p>
                    </div>
                </div>
                <h1 className='font-[600] border-b-[1px] border-[#000000] inline border-dashed'>Yo’lovchi ma’lumotlari</h1>
                <form className='mt-6 space-y-3'>
                    <div>
                        <label>Familiya <span className='text-red-600'>*</span>
                            <input type="text" className='outline-none px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Ismi <span className='text-red-600 mt-3'>*</span>
                            <input type="text" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Tug'ulgan san'a <span className='text-red-600 mt-3'>*</span>
                            <input type="date" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Telefon raqami<span className='text-red-600 mt-3'>*</span>
                            <input type="number" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Psport amal qilish muddati<span className='text-red-600 mt-3'>*</span>
                            <input type="number" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Email<span className='text-red-600 mt-3'>*</span>
                            <input type="email" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                    <div>
                        <label>Yoshi<span className='text-red-600 mt-3'>*</span>
                            <input type="number" className='outline-none px-2 border-[1.5px]  border-[#D5D5D5] rounded-[10px] h-[50px] w-full' />
                        </label>
                    </div>
                </form>
                <h1 className='text-[20px] text-center font-[600] mt-6 '>Umumiy miqdori</h1>
                <h1 className='text-[32px] text-center text-[#1A94FF] font-[600]'>2.34 mln sum</h1>
                <button onClick={() => setOpen(true)} className='bg-[#1A94FF] text-white w-full text-[20px] h-[61px] rounded-[10px]'>Tolov qildim</button>
                <NavLink to={'/pages_4'}>
                    <button className='border-[#1A94FF] text-[#1A94FF] w-full text-[20px] h-[61px] border rounded-[10px] mt-2'>Ortga</button>
                </NavLink>
            </div>

            {open && <div onClick={closeModall1} className='bg-black/40 w-full h-full top-0 left-0 absolute'>
                <div className={`${open ? 'top-[110vh]' : ''} bg-white pb-56 text-[#012F56] w-full absolute  rounded-t-[30px] p-3`}>
                    <h1 className='text-[24px] font-[600] text-center'>Выбрать пассажира</h1>
                    <div className='border py-3 rounded-lg border-dashed border-[#BADFFF] mt-6 flex items-center justify-between px-3'>
                        <label >
                            <input type="radio" className='w-8' />
                            <span>Иванов Иван Иванович</span>
                        </label>
                        <img src={err} alt="" />
                    </div>
                    <div className='border py-3 rounded-lg border-dashed border-[#BADFFF] mt-6 flex items-center justify-between px-3'>
                        <label >
                            <input type="radio" className='w-8' />
                            <span>Иванов Иван Иванович</span>
                        </label>
                        <img src={err} alt="" />
                    </div>
                    <div className='border py-3 rounded-lg border-dashed border-[#BADFFF] mt-6 flex items-center justify-between px-3'>
                        <label >
                            <input type="radio" className='w-8' />
                            <span>Иванов Иван Иванович</span>
                        </label>
                        <img src={err} alt="" />
                    </div>
                    <NavLink to={'/pages_6'} className="flex justify-center mt-6">
                        <button className='h-[61px] w-[94%] bg-[#1A94FF] text-white rounded-[10px]'>Выбрать</button>
                    </NavLink>
                </div>
            </div>}

        </div>

    )
}

export default Pages_5