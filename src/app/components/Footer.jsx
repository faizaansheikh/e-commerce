import { Col, Row } from 'antd';
import React from 'react'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { maincolor } from '../utils';
function Footer() {
    const qlinks = ['Home', 'Shirts', 'T-shirts', 'Products']
    const customer = ['Return & Exchange Policy', 'Shipping Information', 'Privacy Policy', 'Terms and conditions']
    return (
        <div className='w-full h-auto bg-[black] text-white   '>
            <Row className=' flex flex-wrap  justify-center '>
                <Col xs={24} md={24} lg={8} className='pt-[80px] pl-4'>
                    <div>
                        <h3 className={`text-2xl pb-[17px] text-[${maincolor}]`} style={{color:maincolor}}>Logo</h3>
                        <p className='text-xl'>The Online Clothing Store Where Style Meets <br /> Comfort.</p>
                    </div>
                </Col>

                <Col xs={24} md={8} lg={4} className='pt-[80px] pl-4'>
                    <div>
                        <h3 className='text-2xl pb-[17px]'>Quick Links</h3>
                        {qlinks.map((x, i) => (
                            <li className='list-none text-lg py-1' key={i}>{x}</li>
                        ))}
                    </div>
                </Col>

                <Col xs={24} md={8} lg={5} className='pt-[80px] pl-4'>
                    <div>
                        <h3 className='text-2xl pb-[17px]'>Customer Support</h3>
                        {customer.map((x, i) => (
                            <li className='list-none text-lg py-1' key={i}>{x}</li>
                        ))}
                    </div>
                </Col>

                <Col xs={24} md={8} lg={1} className='pt-[80px] pl-4'>
                    <div className='flex justify-center'>
                        <a
                            href="#"
                            className="px-2 transition-transform duration-400 hover:scale-110"
                        >
                            <FaFacebook size={24}  />
                        </a>

                        <a href="#" className={`px-2 transition-transform duration-400 hover:scale-110 text-white hover:text-[${maincolor}]`}><FaInstagram size={24} /></a>
                        <a href="#" className={`px-2 transition-transform duration-400 hover:scale-110 text-white hover:text-[red]`}><FaSquareXTwitter size={24} /></a>
                    </div>
                </Col>

            </Row>

            
                <div className='w-full bg-[white] h-[1px] opacity-18 mt-14 mb-4'></div>
                <p className='text-center pb-[30px]'>© 2025 Logo. All rights reserved.</p>
        </div>



    )
}

export default Footer