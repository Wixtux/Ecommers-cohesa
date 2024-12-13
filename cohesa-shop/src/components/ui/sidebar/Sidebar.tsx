"use client"
import { useUIStore } from '@/store'
import { clsx } from 'clsx'
import Link from 'next/link'
import React from 'react'
import { IoCloseOutline, IoHomeOutline } from 'react-icons/io5'

export const Sidebar = () => {

    const isOpen = useUIStore(state => state.isSideMenuOpen)
    const isClose = useUIStore(state => state.closeSideMenu)

    return (
        <div>

            {/* background */}
            {
                isOpen && (
                    <div
                        className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'
                    />
                )
            }

            {/* blur */}
            {
                isOpen && (
                    <div
                        className='fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm'
                        onClick={() => isClose()}
                    />
                )

            }


            {/* sidemenu */}
            <nav
                className={
                    clsx(
                        ' fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-20 shadow-2xl transition-all duration-300',
                        { "translate-x-full": !isOpen })
                }>
                <IoCloseOutline
                    size={50}
                    className=' absolute top-5 right-5 cursor-pointer'
                    onClick={() => isClose()}
                />

                <div className=' relative mt-14'>

                </div>
                <Link href='/'
                    className=' flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all'>
                    <IoHomeOutline size={30} />
                    <span className='ml-3 text-xl'>Home</span>
                </Link>
            </nav>
        </div>
    )
}
