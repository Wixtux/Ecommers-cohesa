"use client"
import { useUIStore } from '@/store'
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'

export const Topmenu = () => {

    const isOpen = useUIStore(state => state.operSideMenu)

    return (
        <nav className="flex px-5 justify-between items-center w-full bg-slate-100">
            {/* Logo */}
            <div>
                <Link href="/">
                    <span className={`antialiased font-bold`}>Cohesa</span>
                    <span> | Shop</span>
                </Link>
            </div>
            {/* Central Menu */}
            <div className='hidden sm:block'>
                <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href="/category/Vacuno">Carnes Premium</Link>
            </div>
            {/* Right Menu */}
            <div className='flex items-center'>
                <IoSearchOutline className='w-5 h-5' />
                <Link href={"/cart"} className='mx-2'>
                    <div className='relative'>
                        <span className='absolute text-xs px-1 rounded-full px-1 font-bold -top-2 -right-2 bg-blue-600 text-white'>
                            3
                        </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>
                <button className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' onClick={() => isOpen()}>Menu</button>
            </div>
        </nav>
    )
}
