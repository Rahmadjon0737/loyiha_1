import React, { useState } from 'react'
import Selected from '../components/Selected'
import airport from '../assets/Airport.svg'
import airportq from '../assets/Airportq.svg'
import footer1 from '../assets/footer1.svg'
import footer2 from '../assets/footer2.svg'
import { NavLink } from 'react-router-dom'


function Pages_2() {
    const [open, setOpen] = useState(false)
    const [where, setWhere] = useState(false)
    const [valute, setValute] = useState(false)
    const [search, setSearch] = useState("")


    // locations
    const locations = [
        {
            id: 1,
            name: 'Москва',
        },
        {
            id: 2,

            name: 'Санкт-Петербург',
        },
        {
            id: 3,

            name: 'Новосибирск',
        },
        {
            id: 4,

            name: 'Москва',
        },
        {
            id: 5,

            name: 'Москва',
        },
        {
            id: 6,

            name: 'Москва',
        },
        {
            id: 7,
            name: 'Владивосток',
        },
        {
            id: 8,

            name: 'Москва',
        },
        {
            id: 9,

            name: 'Москва',
        },
        {
            id: 10,

            name: 'namangan',
        },
    ]
    const [Lslc, setLslc] = useState(undefined)
    function locationsFuc(id) {
        setLslc(id)
        setOpen(false)
    }

    const whereTo = [
        {
            id: 1,
            name: 'Москва',
        },
        {
            id: 2,
            name: 'Санкт-Петербург',
        },
        {
            id: 3,
            name: 'Новосибирск',
        },
        {
            id: 4,
            name: 'Москва',
        },
        {
            id: 5,
            name: 'Москва',
        },
        {
            id: 6,
            name: 'Москва',
        },
        {
            id: 7,
            name: 'Владивосток',
        },
        {
            id: 8,
            name: 'Москва',
        },
        {
            id: 9,
            name: 'Москва',
        },
        {
            id: 10,
            name: 'namangan',
        },
    ]
    const [slcW, setSlcW] = useState(undefined)
    function whereFunc(id) {
        setSlcW(id)
        setWhere(false)
    }

    const valuteArr = [
        {
            id: 1,
            name: 'Рубль'
        },
        {
            id: 2,
            name: 'Доллар'
        },
        {
            id: 3,
            name: 'Сум'
        },
        {
            id: 4,
            name: 'Сомони'
        },
        {
            id: 5,
            name: 'Юань'
        },
    ]
    const [slcV,setSlcV] = useState(undefined)
    function ValuteFunc(id){
        setSlcV(id)
        setValute(false)
    }

    function closeModal(e) {
        if (e.target.className == 'modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0') setOpen(false)
        if (e.target.className == 'modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0') setWhere(false)
        if (e.target.className == 'modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0') setValute(false)
    }

   
    
    return (
        <div className='max-w-md m-auto relative  overflow-hidden'>
            <div className='bgImg h-[133px] w-full flex justify-end px-6 items-center  relative'>
                <Selected />
            </div>
            <div className='bg-white rounded-t-[20px] relative top-[-20px] '>
                <h1 className='text-[#012F56] text-[24px] font-[600] text-center py-4'>Chiptalarni topish</h1>
                <div className='text-[#012F56] space-y-4 mx-3'>
                    <div onClick={() => setOpen(true)} className='border-[1.6px] rounded-md bg-white h-[61px] flex items-center gap-3 px-3 border-[#D5D5D5]'>
                        <img src={airport} alt="" />
                        <p>{Lslc ? locations[Lslc - 1].name : 'Qayerdan'}</p>
                    </div>
                    <div className='border-[1.6px] rounded-md bg-white h-[61px] flex items-center gap-3 px-3 border-[#D5D5D5]' onClick={() => setWhere(true)}>
                        <img src={airportq} alt="" />
                        <p>{slcW ? whereTo[slcW - 1].name : 'Qayerga'}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-4 '>
                        <div className='border-[1.6px] relative rounded-md bg-white h-[61px] gap-3 px-3 border-[#D5D5D5]'>
                            <p>Uchish avqti</p>
                            <input type="date" className=' bg-transparent no-calendar absolute pr-6 bottom-0 py-1 ' />
                        </div>
                        <div className='border-[1.6px] relative rounded-md bg-white h-[61px] px-3 border-[#D5D5D5]'>
                            <p>Qaytish vaqti</p>
                            <input type="date" id="dateInput" class="no-calendar absolute pr-6  bottom-0 py-1 bg-transparent"/>
                        </div>
                    </div>
                    <div onClick={() => setValute(true)} className='border-[1.6px] rounded-md bg-white h-[61px] flex items-center gap-3 px-3 border-[#D5D5D5]'>
                        <img src={valute} alt="" />
                        <p >{slcV? valuteArr[slcV-1].name:'Valyuta'}</p>
                    </div>
                </div>
                <div className='mx-3 '>
                    <button className='bg-[#1A94FF]  text-white rounded-lg font-[500] h-[61px] mt-6 w-full '>
                        Qidirish
                    </button>
                </div>
                <div className=' mt-24'>
                    <div className='h-[80px] flex justify-evenly bg-white items-center '>
                        <NavLink to={'/pages_3'}><img src={footer1} alt="uz" /></NavLink>
                        <div className='h-[50px] w-[1px] bg-[#D5D5D5]'>
                        </div>
                        <NavLink to={'/pages_14'}><img src={footer2} alt="logo" /></NavLink>
                    </div>
                </div>
            </div>


            {open && <div onClick={closeModal} className="modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0">
                <div className={`bg-white w-full absolute text-[20px] text-[#012F56] px-3 rounded-t-[30px] z-[1000] ${open ? 'top-60     transition-all duration-500' : 'transition-all duration-300 '}`}>
                    <h1 className='absolute top-[-20px] bg-white rounded-full left-[50%] -translate-x-[50%] h-[5px] w-[100px]'></h1>
                    <h1 className='text-[16px] mt-6 text-center'>Qayerdan</h1>
                    <input type="text" className='w-full h-[40px] my-3 border outline-none rounded-sm px-3 border-[#D5D5D5]' placeholder='Qidirish' onChange={(e) => setSearch(e.target.value)} />
                    <div className='h-[70vh]'>
                        {locations.filter((v) => v.name.includes(search)).map((item) => (
                            <div>
                                <p onClick={() => locationsFuc(item.id)} className='cursor-pointer'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>}

            {where && <div onClick={closeModal} className="modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0">
                <div className={`bg-white w-full absolute text-[20px] text-[#012F56] px-3 rounded-t-[30px] z-[1000] ${where ? 'top-60   transition-all duration-500' : 'transition-all duration-300 '}`}>
                    <h1 className='absolute top-[-20px] bg-white rounded-full left-[50%] -translate-x-[50%] h-[5px] w-[100px]'></h1>
                    <h1 className='text-[16px] mt-6 text-center'>Qayerdan</h1>
                    <input type="text" className='w-full h-[40px] my-3 border outline-none rounded-sm px-3 border-[#D5D5D5]' placeholder='Qidirish' onChange={(e) => setSearch(e.target.value)} />
                    <div className='h-[70vh]'>
                        {whereTo.filter((v) => v.name.includes(search)).map((item) => (
                            <div>
                                <p className='cursor-pointer' onClick={() => whereFunc(item.id)}>{item.name}</p>
                            </div>
                        ))}
                        <NavLink className="flex justify-center">
                            <button className='h-[61px]  w-[94%] absolute  bg-[#1A94FF] text-white rounded-[10px]'>Выбрать</button>
                        </NavLink>
                    </div>
                </div>
            </div>}

            {valute && <div onClick={closeModal} className="modal bg-black/40 w-full h-[130vh] absolute  top-0 left-0">
                <div className={`bg-white w-full absolute text-[20px] text-[#012F56] px-3 rounded-t-[30px] z-[1000] ${valute ? 'top-96   transition-all duration-500' : 'transition-all duration-300 '}`}>
                    <h1 className='absolute top-[-20px] bg-white rounded-full left-[50%] -translate-x-[50%] h-[5px] w-[100px]'></h1>
                    <h1 className='text-[16px] mt-6 text-center'>Valyutani tanlang</h1>
                    <div className='pb-36 mt-8 ml-2'>
                        {valuteArr.map((item) => (
                            <p onClick={() => ValuteFunc(item.id)} className='cursor-pointer'>{item.name}</p>
                        ))}
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Pages_2