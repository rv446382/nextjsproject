"use client"
import React from 'react'
import { supabase } from '@/lib/supabase/products';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
const Signin = () => {
    return (
        <div className='absolute top-0 w-full bg-white py-16 '>
        
        <div className='w-[24%] mx-auto'>
        <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
         
           />
        </div>
        
        </div>
    )
}

export default Signin;