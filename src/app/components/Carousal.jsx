'use client'
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import img1 from '../../../public/images/img1.jpg'
import img2 from '../../../public/images/img2.jpg'
import img3 from '../../../public/images/img3.jpg'
const contentStyle = {
  height: '660px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const images = [
  { img: img1, tag: 'All the Shirts and Tees You Need, All in One Place' },
  { img: img2, tag: 'Simplify Your Wardrobe. Shop Shirts & Tees Online' },
  { img: img3, tag: 'Simplify Your Wardrobe. Shop Shirts & Tees Online' },
]
const Carousal = () => (
  <Carousel autoplay arrows >
    {images.map((el, i) => (
      <div key={i} className='relative w-full h-[660px]'>
        <Image alt='' src={el.img} className='w-full h-full object-cover' />


        <div className='absolute inset-0 flex justify-center items-center'>

          <div className='absolute inset-0 bg-black opacity-60 z-0'></div>


          <h1 className='text-6xl text-white z-10'>{el.tag}</h1>
        </div>
      </div>
    ))}


  </Carousel>
);
export default Carousal;