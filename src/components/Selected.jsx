import React, { useState } from 'react'
import uz from '../assets/Uz.svg'
import us from '../assets/Us.svg'
import Ru from '../assets/Ru.svg'


function Selected() {
    const [slc,setSlc] = useState(undefined)
    const [open,setOpen] = useState(false)
    const selects = [
        {
            id:1,
            name:'Rus',
            image:Ru,
        },
        {
            id:2,
            name:'Eng',
            image:us,
        },
        // {
        //     id:3,
        //     name:'Uz',
        //     image:uz,
        // },
    ]
    
    function close(id){
        setSlc(id)
        setOpen(false)
    }
  return (
    <div className='relative top-6 z-[1000]'>
        <div className='mb-1 flex justify-end '>
        <img className='cursor-pointer' onClick={()=>setOpen(!open)} src={slc?selects[slc-1].image:uz} alt="uz" />
        </div>
        <div className='absolute bg-white w-[70px] right-0 rounded-lg '>
            {open&& selects.map((i)=>(
                <div  className='cursor-pointer flex gap-2 p-2 top-0 left-0 space-y-2 items-center text-[#012F56] text-[12px] font-[700] active:text-[#1A94FF]'>
                    <p>{i.name}</p>
                    <img onClick={()=>close(i.id)} src={i.image} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Selected