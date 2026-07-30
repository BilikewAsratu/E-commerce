import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [visible, setVisible] = useState(false)

    return (
        <div className='flex items-center justify-between py-5 font-medium'>
           <Link to='/'><img src={assets.logo} className='w-36' alt='logo image' /></Link>
            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>Home</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>Collection</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>About</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>Contact</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>
            <div className="flex items-center gap-6" >
                <img src={assets.search_icon} className='w-5 cursor-pointer' />
                <div className='group relative'>
                    <img src={assets.profile_icon} className="w-5 cursor-pointer" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded-2xl'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' />
                    <p className='absolute -right-1.25 -bottom-1.25 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
            </div>
            {/* sidebar menu for small screen */}
            <div className={`fixed inset-0 z-50 bg-white transition-all duration-300 ease-in-out ${visible ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex flex-col h-full">
                    <div onClick={() => setVisible(false)} className="flex items-center gap-3 px-5 py-5 border-b cursor-pointer active:bg-gray-100">
                        <img src={assets.dropdown_icon} className="w-4 rotate-180" alt="" />
                        <span className="text-lg font-semibold text-gray-800">Back</span>
                    </div>
                    <nav className="flex flex-col mt-3">
                        <NavLink to="/" onClick={() => setVisible(false)}
                            className={({ isActive }) =>
                                `px-6 py-4 text-lg font-medium transition-all duration-200 ${isActive
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`
                            }>
                            Home
                        </NavLink>

                        <NavLink
                            to="/collection"
                            onClick={() => setVisible(false)}
                            className={({ isActive }) =>
                                `px-6 py-4 text-lg font-medium transition-all duration-200 ${isActive
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            Collection
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={() => setVisible(false)}
                            className={({ isActive }) =>
                                `px-6 py-4 text-lg font-medium transition-all duration-200 ${isActive
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/contact"
                            onClick={() => setVisible(false)}
                            className={({ isActive }) =>
                                `px-6 py-4 text-lg font-medium transition-all duration-200 ${isActive
                                    ? "bg-black text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                }`
                            }
                        >
                            Contact
                        </NavLink>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar