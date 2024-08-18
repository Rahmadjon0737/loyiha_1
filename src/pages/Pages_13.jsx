import Selected from "../components/Selected"
import { NavLink } from "react-router-dom"
import left from '../assets/left.svg'


function Pages_13() {
    return (
        <div className='max-w-md m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_6'}><img src={left} alt="" /></NavLink>
                <h1 className='font-[600] text-[20px] text-center pb-3'>Обратная связь</h1>
                <form className='mt-6 space-y-3'>
                    <div>
                        <label>Тема сообщения<span className='text-red-600'>*</span>
                            <input type="text" className='outline-none px-2 border-[1.5px] border-[#D5D5D5] rounded-[10px] h-[50px] w-full' placeholder="Введите тему сообщения" />
                        </label>
                    </div>
                    <div>
                        <label> сообщения<span className='text-red-600'>*</span>
                            <textarea type="text" className='outline-none px-2 border-[1.5px] h-32 border-[#D5D5D5] rounded-[10px] w-full' placeholder="Введите сообщение" />
                        </label>
                    </div>
                </form>
                <button className='bg-[#1A94FF] text-white w-full text-[20px] h-[61px] rounded-[10px] '>Отправить</button>
            </div>
        </div>
    )
}

export default Pages_13