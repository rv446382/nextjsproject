"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'; 
import imageone from "@/public/imageone.jpg";
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import CategoryWiseProduct from './shared/CategoryWiseProduct';

const HomePage = () => {
  const{mensProduct,getMensClothing,womensProduct,getWomensClothing} = useSupabase();

  useEffect(()=>{
    getMensClothing();
    getWomensClothing();
  },[getMensClothing,getWomensClothing]);


  return (
    <div>
      <Image src={imageone} alt="img" width={1700} height={30}/>

    <div className='w-[90%] mx-auto grid grid-cols-4 gap-2 relative -top-64'>
      {
        mensProduct.map((product: any) => {
          return (
            <div key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          )
        })
      }
      {
        womensProduct.map((product: any) => {
          return (
            <div key={product.id}>
              <CategoryWiseProduct product={product} />
            </div>
          )
        })
      }
    </div>

  </div>
  )
}

export default HomePage;
