import Selected from "../components/Selected"
import left from '../assets/left.svg'
import { NavLink } from "react-router-dom"

function Pages_14() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600]'>
                
                <h1 className='font-[600] text-[20px] text-center pb-3'>Регистрация</h1>
                <form className='mt-6 space-y-3'>
                    <div>
                        <label>Имя<span className='text-red-600'>*</span>
                            <input type="text" className='outline-none px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full' placeholder="Введите Ваше имя" />
                        </label>
                    </div>
                    <div>
                        <label>Телефон<span className='text-red-600'>*</span>
                            <input type="number" className='outline-none px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full' placeholder="Введите номер телефона" />
                        </label>
                    </div>
                </form>
                <div className="mt-24 space-y-4 grid">
                    <NavLink to={'/pages_15'} className='bg-[#1A94FF] text-white w-full  flex items-center justify-center text-[20px] h-[61px] rounded-[10px] '>Зарегистрироваться
                    </NavLink>
                    <NavLink to={'/'} className='border-[1.5px] border-[#1A94FF] text-[1A94FF] w-full text-[20px] h-[61px] flex items-center justify-center rounded-[10px]'>Войти</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Pages_14