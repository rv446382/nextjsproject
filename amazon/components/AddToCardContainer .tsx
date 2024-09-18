import React from 'react';
import prime from "../public/prime-logo.png";
import Image from "next/image";
import { useRouter } from 'next/navigation'; 
import { useAppDispatch } from '@/lib/supabase/hooks/redux';
import { addToCart } from '@/redux/cartSlice';

const AddToCardContainer = ({ product }: { product: any }) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    return (
        <div className='border border-gray-200 rounded-lg shadow-lg p-4 bg-white'>
            {/* Prime Logo */}
            <div className='flex justify-center mb-4'>
                <Image src={prime} width={40} height={40} alt={"prime"} />
            </div>

            {/* Delivery Details */}
            <div className='text-center'>
                <h1 className='text-lg font-semibold'>
                    <span className='text-[#147C8F]'>FREE delivery</span> Thursday, 21 March.
                    <span className='text-[#147C8F] cursor-pointer'> Details</span>
                </h1>
                <h2 className='mt-2 text-gray-600'>
                    Or fastest delivery Tomorrow, 20 March. Order within <span className="font-bold">15 hrs 53 mins</span>. 
                    <span className='text-[#147C8F] cursor-pointer'> Details</span>
                </h2>
                <p className='text-[#147C8F] mt-4 font-medium'>
                    Deliver to Surendra - Jalandhar 144411‌
                </p>
            </div>

            {/* Buttons */}
            <div className='mt-6'>
                <button
                    onClick={() => {
                        dispatch(addToCart(product));
                        router.push("/cart");
                    }}
                    className='bg-[#FFD814] w-full rounded-full py-2 text-sm font-semibold hover:bg-[#F7CA00] transition-colors duration-200'
                >
                    Add to Cart
                </button>
                <button
                    className='bg-[#FFA41C] w-full rounded-full py-2 text-sm font-semibold mt-3 hover:bg-[#FF8F00] transition-colors duration-200'
                >
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default AddToCardContainer;
