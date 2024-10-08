import React, { useState } from 'react'
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants'


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className=' flex navbar w-full py-6 justify-between items-center '>
            <img src={logo} alt="LOGO" className='w-[124px] h-[32px] cursor-pointer' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {
                    navLinks.map((item, idx) => {
                        return (
                            <li key={item.id} className={`font-poppins font-normal cursor-pointer text-white ${idx == navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
                                <a href={`#${item.id}`} > {item.title}</a>
                            </li>
                        )
                    })
                }
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)} />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {
                            navLinks.map((item, idx) => {
                                return (
                                    <li key={item.id} className={`font-poppins font-normal cursor-pointer text-white ${idx == navLinks.length - 1 ? "mb-0" : "mb-4"}`}>
                                        <a href={`#${item.id}`} > {item.title}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </nav>



    )
}

export default Navbar