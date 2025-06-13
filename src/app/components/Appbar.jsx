'use client'
import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from './CustomDrawer';
import CustomDrawer from './CustomDrawer';
function Appbar() {
  const menu = ['Logo', 'Home', 'Sale', 'Men', 'Women']
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='w-full h-[100px] bg-[black] flex items-center justify-between  '>
        <div className='hidden md:flex ml-[200px] '>
          {menu.map((el, i) => (
            <li className='list-none text-[18px] px-4 text-[lightgray] cursor-pointer hover:underline hover:text-white' key={i}>{el}</li>
          ))}
        </div>

        <div className='hidden md:flex mr-[200px] '>
          <IoIosSearch className='mx-4 cursor-pointer text-[lightgray] hover:underline hover:text-white transition-transform duration-200 hover:scale-110' size={26} />
          <BsCart3 className='mx-4 cursor-pointer text-[lightgray] hover:underline hover:text-white transition-transform duration-200 hover:scale-110' size={24} />
        </div>


        <div className="flex md:hidden justify-between items-center px-4 py-2 text-white w-full">
          <RxHamburgerMenu className="text-[24px]" onClick={() => setOpen(true)} />

          <div className="text-lg font-bold">Logo</div>

          <div className="flex items-center">
            <IoIosSearch
              className="mx-2 cursor-pointer text-[lightgray] hover:underline hover:text-white transition-transform duration-200 hover:scale-110"
              size={26}
            />
            <BsCart3
              className="mx-2 cursor-pointer text-[lightgray] hover:underline hover:text-white transition-transform duration-200 hover:scale-110"
              size={24}
            />
          </div>
        </div>

      </div>
      <div className='flex md:hidden'>
        <CustomDrawer title='' open={open} placement={'left'} onClose={() => setOpen(false)}
          content={
            <>
              {menu.map((el, i) => (
                <li className={`${i%2 === 0 ? 'bg-[#F5F5F5]' : ''} list-none text-[18px] px-4 py-2 text-[black] cursor-pointer hover:text-[gray]`} key={i}>{el}</li>
              ))}
            </>
          }
        />
      </div>
    </>
  )
}

export default Appbar