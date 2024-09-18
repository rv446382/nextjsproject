"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import amazonLogo from "../public/amazon-logo-2.webp";
import { BiCart } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import Link from 'next/link';
import { IoMdMenu } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';


const itemList = [
    "All",
    "Fresh",
    "Amazon miniTV",
    "Sell",
    "Gift Cards",
    "Baby",
    "Buy Again",
    "Browsing History",
    "Amazon Pay",
    "Gift Ideas",
    "Health, Household & Personal Care"
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle
    const [query,setQuery]=useState<string>("");
    const router = useRouter();
    const cart = useAppSelector(getCart);
//search functionality
    const searchHandler=()=>{
     router.push(`/search/${query}`);
    };



    return (
        <>
            {/* Top section of the header */}
            <div className='bg-[#131921] text-white py-1 relative'>
                <div className='flex items-center justify-between w-[95%] mx-auto'>
                    {/* Logo */}
                    <Link href={'/'} className='w-[20%] md:w-[10%]'>
                        <Image 
                            src={amazonLogo} 
                            alt="logo" 
                            width={150} 
                            height={150} 
                            className="md:w-[150px] md:h-[40px] mt-2" 
                        />
                    </Link>

                    {/* Search bar */}
                    <div className='flex items-center w-[60%] md:w-[60%]'>
                        {/* Search bar container */}
                        <div className='flex items-center w-full border rounded-md bg-white'>
                            {/* Search input field */}
                            <input
                                value={query}
                                onChange={(e)=>setQuery(e.target.value)}
                                type="text"
                                className='w-full p-1 md:p-2 outline-none text-black h-[30px] md:h-[40px] rounded-l-md'
                                placeholder='Search Amazon.in'
                            />

                            {/* Search icon inside the same div */}
                            <div
                                className='bg-[#FEBD69] p-2 cursor-pointer hover:bg-[#ffad43] flex items-center justify-center rounded-r-md h-[30px] md:h-[40px]'
                            >
                                <CgSearch
                                onClick={searchHandler}
                                 size={"24px"} 
                                 className='text-black' />
                            </div>
                        </div>
                    </div>

                    {/* Account and cart options */}
                    <div className='flex items-center justify-around w-[30%] md:w-[20%]'>
                        {/* Account & Lists */}
                        <div className='cursor-pointer'>
                            <h1 className='text-xs md:text-sm hover:underline'>
                                <span className='block md:hidden'>SignIn</span> 
                                <span className='hidden md:block'>Hello, Sign in</span>
                            </h1>
                            <h1 className='font-medium text-sm hidden md:block'>Account & Lists</h1>
                        </div>

                        {/* Returns & Orders */}
                        <div>
                            <p className='text-xs md:text-sm ml-1'>
                                <span className='block md:hidden'>Orders</span> {/* Simplified for mobile */}
                                <span className='hidden md:block'>Returns</span>
                            </p>
                            <h1 className='font-medium text-sm hidden md:block'>& Orders</h1>
                        </div>

                        {/* Cart */}
                        <Link href={"/cart"} className='flex items-center cursor-pointer'>
                            <p className='relative top-3 left-5'>{cart.length}</p>
                            <BiCart size={"24px"} className="md:w-[40px]" /> {/* Smaller icon for mobile */}
                            <h1 className='hidden md:block ml-2'>Cart</h1> {/* Hide text on mobile */}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menu icon for mobile screens */}
            <div className='relative flex justify-between items-center bg-[#232F3E] p-2 md:hidden'>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    <IoMdMenu size={"30px"} />
                </button>

                {/* Sign out button on mobile */}
                <h1
                    onClick={async () => {
                        // Handle sign out logic
                    }}
                    className='text-[#FEBD69] font-bold cursor-pointer hover:underline'
                >
                    Sign out
                </h1>
            </div>

            {/* Bottom section of the header (navigation) */}
            <div className={`bg-[#232F3E] w-full text-white ${menuOpen ? 'block' : 'hidden'} md:block`}>
                {/* Navigation list */}
                <div className='flex flex-col md:flex-row justify-center md:justify-start py-2'> {/* Reduced height */}
                    <ul className="list-none flex flex-col md:flex-row text-center">
                        {itemList.map((link, idx) => (
                            <li key={idx} className='mx-1 md:mx-2'>
                                <Link href={`/${link}`} className='hover:border border-transparent hover:border-white p-2 block'>
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h1
                        onClick={async () => {
                            // Handle sign out logic
                        }}
                        className='text-[#FEBD69] font-bold cursor-pointer hover:underline ml-0 md:ml-40 text-center md:text-right w-full md:w-auto mt-1'
                    >
                        Sign out
                    </h1>
                </div>

                
            </div>
        </>
    )
}

export default Header
