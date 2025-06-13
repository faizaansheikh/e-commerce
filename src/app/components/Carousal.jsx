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
const images = [img1, img2, img3]
const Carousal = () => (
  <Carousel autoplay arrows >
    {images.map((el, i) => (


      <div key={i} className='relative w-full h-[660px]'>
        <Image alt='' src={el} className='w-full h-full object-fit' />
        <div className='absolute inset-0 bg-black opacity-30'></div>
      </div>


    ))}
   
  </Carousel>
);
export default Carousal;