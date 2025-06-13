import React from 'react'

function Button(props) {
    const { label, click, type, responsive } = props
    return (
   <div className='w-full md:w-[120px] h-[30px] md:h-[47px] text-[17px] md:text-[19px] border border-black rounded-[25px] flex items-center justify-center bg-[white] cursor-pointer  hover:shadow-xl transition-all duration-300'>{label}</div>
    

    )
}

export default Button