import Selected from "../components/Selected"
import left from '../assets/left.svg'
import { NavLink } from "react-router-dom"
import Edit from '../assets/Edit.svg'
function Pages_11() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_6'}><img src={left} alt="" /></NavLink>
                <h1 className='font-[600] text-[20px] text-center pb-3'>Мой профиль</h1>

                <div>
                    <span>Имя</span>
                    <div className='flex justify-between items-center px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full'>
                        <h1>Иван</h1>
                        <img src={Edit} alt="" />
                    </div>
                </div>
                <div>
                    <span>Телефон</span>
                    <div className='flex justify-between items-center px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full'>
                        <h1>+7 800 123 32 54</h1>
                        <img src={Edit} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pages_11