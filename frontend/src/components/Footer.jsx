import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-white border-t border-gray-200 mt-32'>
            <div className='max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 text-sm text-gray-600'>
                <div>
                    <img src={assets.logo} className="mb-6 w-36" alt="Logo"/>
                    <p className='leading-7 max-w-md'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde magnam repellat eveniet deleniti necessitatibus.
                        Eius est recusandae commodi quisquam qui placeat
                        assumenda nihil voluptatem vero quidem velit, adipisci
                        eaque. Provident.
                    </p>
                </div>
                <div>
                    <p className='text-lg font-semibold text-gray-800 mb-5'>
                        COMPANY
                    </p>
                    <ul className="space-y-3">
                        <li className="cursor-pointer hover:text-black transition">
                            Home
                        </li>
                        <li className="cursor-pointer hover:text-black transition">
                            About Us
                        </li>
                        <li className="cursor-pointer hover:text-black transition">
                            Delivery
                        </li>
                        <li className="cursor-pointer hover:text-black transition">
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-lg font-semibold text-gray-800 mb-5'>
                        GET IN TOUCH
                    </p>
                    <ul className='space-y-3'>
                        <li>+23 4568 88</li>
                        <li>xyz@gmail.com</li>
                        <li>Powered by Bilikew Asratu</li>
                    </ul>
                </div>
            </div>
            <hr className='border-gray-200' />
            <div className='py-6 text-center text-gray-500 text-sm'>
                © 2026 Bilikew Asratu. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer