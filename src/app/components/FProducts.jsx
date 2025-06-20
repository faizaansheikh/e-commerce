'use client'
import React, { useEffect, useState } from 'react'
import img3 from '../../../public/images/img3.jpg'
import Image from 'next/image'
import Button from './Button'
import { Col, Row } from 'antd'

function FProducts({ postion }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        
        if (typeof window !== 'undefined') {
            setIsSmallScreen(window.innerWidth < 510);
        }
    }, []);
 
    const content = (
        // flex flex-col justify-center items-center bg-[#f6f1f1e9] w-full md:w-1/2 p-6 rounded-none md:rounded-r-[30px]
        <div className="w-full h-[600px] flex flex-col items-start justify-center bg-[#f6f1f1e9]">
            <span className="relative top-4 text-sm md:text-base font-[500] pb-2 px-4 lg:px-16">The Royals Clothing</span>
            <span className="font-medium text-xl md:text-2xl text-start mt-2 px-4 lg:px-16">
                Formal Plain Shirt In L-Fawn SKU: AB203-L-Fawn
            </span>
            <p className="text-gray-600 text-start pt-4 leading-[1.8] text-sm md:text-base lg:px-16 px-4">
                M2 - Pour HommeM2 a fragrance that captures
                the essence of freshness and vitality. Zesty
                FruityCitrus notes of Bergamot, Lemon, and Pineapple
                open with an invigorating burst, while a musky, Fresh
                Spicy heart adds depth and energy. This crisp, modern
                scent is perfect for the man who embraces confidence
                and clarity. Encased in a deep blue bottle with a subtle
                gradient, M2 reflects a clean, refreshing elegance that
                leaves a lasting impression
            </p>
            <div className="mx-4 lg:mx-16 mt-6">
                <Button label="Buy Now" />
            </div>
        </div>
    )

    const image = (
        <div className="w-full h-[600px]">
            <Image alt="product" src={img3} className="w-full h-full object-cover" />
        </div>
    )
    // flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto my-8
    return (
        <div className=" lg:mx-28">
            {!isSmallScreen ? postion && postion % 2 === 1 ? (
                <>
                    <Row>
                        <Col lg={12}> {image}</Col>
                        <Col lg={12}> {content}</Col>
                    </Row>


                </>
            ) : (
                <>
                    <Row>
                        <Col lg={12}> {content}</Col>
                        <Col lg={12}> {image}</Col>
                    </Row>
                </>
            ) : <>
                <Row>
                    <Col lg={12}> {image}</Col>
                    <Col lg={12}> {content}</Col>
                </Row>
            </>}
      
        </div>
    )
}

export default FProducts
