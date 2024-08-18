import Selected from "../components/Selected"
import left from '../assets/left.svg'
import { NavLink } from "react-router-dom"
function Pages_12() {
    return (
        <div className='max-w-md  m-auto '>
            <div className='bgImgP h-[120px] w-full flex justify-end px-6 items-center border relative'>
                <p className='text-white absolute'>+7(499) 993 00 85</p>
                <Selected />
            </div>
            <div className='bg-white grid  relative top-[-20px] py-6 px-3 text-[#012F56] font-[600] space-y-3'>
                <NavLink to={'/pages_6'}><img src={left} alt="" /></NavLink>
                <h1 className='font-[600] text-[20px] text-center pb-3'>Информация</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempor facilisis vel dis feugiat mi et et aliquet. Consequat imperdiet nunc lorem magna varius mi eget at. Amet in ut purus ullamcorper ac pellentesque tincidunt facilisis non. Viverra semper pharetra quisque risus. Vivamus ac amet, mattis suspendisse ultrices egestas cursus elit. Dui, volutpat in metus, duis. Mattis elementum molestie commodo rhoncus mauris. Sapien arcu tincidunt dignissim fusce ullamcorper. Magna dictum in quis quam velit. Ultricies pellentesque lectus ullamcorper urna, porttitor integer ultrices nunc. Tincidunt gravida mi praesent montes, elementum felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae tempor facilisis vel dis feugiat mi et et aliquet. Consequat imperdiet nunc lorem magna varius mi eget at. Amet in ut purus ullamcorper ac pellentesque tincidunt facilisis non. Viverra semper pharetra quisque risus. Vivamus ac amet, mattis suspendisse ultrices egestas cursus elit. Dui, volutpat in metus, duis.</p>
            </div>
        </div>
    )
}

export default Pages_12