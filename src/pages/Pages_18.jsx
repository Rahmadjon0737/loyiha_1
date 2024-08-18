import Selected from "../components/Selected"
import end from '../assets/end.svg'

function Pages_18() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid space-y-8 relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] '>
                <img src={end} alt="" className="mx-auto" />
                <h1 className="text-[24px] px-12 text-center">По вашему запросу ничего не найдено</h1>
                <button className='bg-[#1A94FF] text-white w-full  text-[20px] h-[61px] rounded-[10px]'>Изменить параметры</button>
            </div>
        </div>
    )
}

export default Pages_18