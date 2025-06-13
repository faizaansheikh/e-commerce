import React from 'react'
import img3 from '../../../public/images/img3.jpg'
import Image from 'next/image'
import Button from './Button'

function FProducts({ postion }) {
    const content = (
        <div className="flex flex-col justify-center items-center bg-[#f6f1f1e9] w-full md:w-1/2 p-6 rounded-none md:rounded-r-[30px]">
            <span className="relative top-4 text-sm md:text-base">The Royals Clothing</span>
            <span className="font-medium text-xl md:text-2xl text-center mt-2">
                Formal Plain Shirt In L-Fawn SKU: AB203-L-Fawn
            </span>
            <p className="text-gray-600 text-center pt-4 leading-[1.8] text-sm md:text-base">
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
            <div className="mt-6">
                <Button label="Buy Now" />
            </div>
        </div>
    )

    const image = (
        <div className="w-full md:w-1/2">
            <Image alt="product" src={img3} className="w-full h-auto object-cover" />
        </div>
    )

    return (
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto my-8">
            {postion && postion % 2 === 1 ? (
                <>
                    {image}
                    {content}
                </>
            ) : (
                <>
                    {content}
                    {image}
                </>
            )}
        </div>
    )
}

export default FProducts
