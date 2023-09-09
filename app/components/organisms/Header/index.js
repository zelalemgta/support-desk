"use client"
import { useState, useRef } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import useOutsideClickHandler from '@/app/hooks/useOutsideClickHandler'
import userAvatar from '@/public/avatar.png'
import techSupport from '@/public/tech_support.png'

export default function Header({ user }) {
    const supabase = createClientComponentClient()
    const router = useRouter()
    const userMenuRef = useRef()
    const [IsUserMenuOpen, setIsUserMenuOpen] = useState(false)
    const [isCollapsedMenuOpen, setIsCollapsedMenuOpen] = useState(false)

    useOutsideClickHandler(userMenuRef, () => setIsUserMenuOpen(false))

    const toggleUserMenu = () => {
        setIsCollapsedMenuOpen(false)
        setIsUserMenuOpen(!IsUserMenuOpen)
    }

    const toggleCollapsibleMenu = () => {
        setIsCollapsedMenuOpen(!isCollapsedMenuOpen)
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.replace('/login')
    }


    return (
        <nav className="shadow-md bg-gray-800 border-b border-b-gray-700">
            <div className="flex flex-wrap items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center">
                    <Image alt="logo" src={techSupport} width={36} className="mr-3" />
                    <span className="hidden sm:inline self-center text-lg font-semibold whitespace-nowrap text-white">Support Desk</span>
                </Link>
                <div className="flex items-center md:order-2">
                    <div ref={userMenuRef}>
                        <button
                            type="button"
                            className="flex items-center mr-3 text-sm text-white font-medium md:mr-5"
                            id="user-menu-button"
                            onClick={toggleUserMenu}
                        >
                            <span className="sr-only">Open user menu</span>
                            <Image alt="Avatar" src={userAvatar} width={36} />
                            <span className="ml-2">Frehiwot Abebe</span>
                        </button>
                        <div className={`${IsUserMenuOpen ? "absolute" : "hidden"} z-50 w-full max-w-[185px] top-[50px] sm:top-[45px] my-4 text-base list-none divide-y rounded-lg shadow bg-gray-900 divide-gray-600`} id="user-dropdown">
                            <div className="px-4 py-3 max-w-screen-sm">
                                <span className="block text-sm text-white">Director General</span>
                                <span className="block text-xs text-ellipsis truncate text-gray-400">{user.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Profile</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Change Password</a>
                                </li>
                                <li>
                                    <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600 text-gray-200 hover:text-white">Sign out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                        onClick={toggleCollapsibleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`${isCollapsedMenuOpen ? "relative" : "hidden"} items-center justify-between z-50 w-full md:flex md:w-auto md:order-1`} id="navbar-user">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 bg-gray-900 sm:bg-transparent border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 md:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 hover:bg-gray-700 text-white md:hover:bg-transparent border-gray-700">Track Issue Status</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}