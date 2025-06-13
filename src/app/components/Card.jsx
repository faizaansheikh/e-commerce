import Image from 'next/image'
import React from 'react'
import s1 from '../../../public/images/s1.png'
import s2 from '../../../public/images/s2.png'
function Card() {
    return (
        <div className='w-[450px] h-[765px] mb-4 cursor-pointer border border-4 border-[lightgray] rounded-md bg-[#F8F8F9] hover:rotate-3 hover:shadow-xl/50 transition-all duration-900' >
            <div className='w-full h-[670px] border-b border-black overflow-hidden'>
                <Image
                    className='w-full h-[670px] transition-transform duration-200 transform hover:scale-120 object-fit '
                    alt=''
                    src={s2}
                />
            </div>

            <div className='m-4'>
                <h3 className='text-[22px] text-center' style={{ wordSpacing: '1px' }}>Sky Blue Plain Formal Shirt</h3>
                 <p className='text-[20px] text-center' style={{position:'relative',bottom:'6px'}}>Rs 3,290 PKR</p>
                {/* <p style={{ position: 'relative', bottom: '5px' }} className='text-[grey] text-[18px]'>The Royals</p> */}
                {/* <p className='text-2xl'>Rs 3,290 PKR</p>
                <div className='flex justify-center items-center m-4 transition-all duration-300 hover:text-white'>
                    <button
                        style={{ fontSize: '18px' }}
                        className='border border-black rounded-4xl p-4 w-full cursor-pointer transition-all duration-300 hover:bg-black'
                    >
                        Buy Now
                    </button>
                </div> */}


            </div>
        </div>
    )
}

export default Card

