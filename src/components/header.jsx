import { useEffect, useState } from 'react';
import { Scrolle_animation } from '../utils/scroll-animation';
import { Link } from "react-router-dom";

export default function Header() {
    const { scrolled_navbar } = Scrolle_animation();

    const [valide, setvalide] = useState(false);
    const Navbar_v2 = _ => setvalide(!valide)

    return <>
        {/*Navbar-V1*/}
        <header className="w-[95%] h-4/6 px-5 lg:flex justify-between rounded-full header-border border-white overflow-hidden hidden">
            <div className="w-1/4 h-full lg:flex items-center gap-2 text-black">
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-white cursor-pointer Animation-header-left z-20'>Home</Link>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-left z-10'>Menu</Link>
            </div>
            <div className="w-1/4 h-full lg:flex justify-end items-center gap-2 text-black">
                <Link to="/" className='px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right'>Locations</Link>
                <Link to="/" className='px-8 py-2 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right'>Jobs</Link>
                <Link to="/" className='px-2 py-1 rounded-full text-xl text-white border-2 border-transparent cursor-pointer Animation-header-right'>
                    <i class='bx bx-cart text-2xl text-orange-500'></i>
                </Link>
            </div>
        </header>
        {/*Navbar-V2*/}
        <header className="w-1/2 flex items-center flex-col rounded-3xl overflow-hidden fixed gap-3 text-white border-transparent-navbar lg:hidden z-50"
            onClick={Navbar_v2}>
            <div className={`w-full flex-col gap-2 text-xl px-7 pt-5 ${valide ? 'flex' : 'hidden'}`}>
                <Link to="/" className=''>Home</Link>
                <Link to="/Menu">Menu</Link>
                <Link to="/">Locations</Link>
                <Link to="/">Jobs</Link>
                <Link to="/">Shop</Link>
            </div>
            <div className="w-5/6 h-full flex gap-5 px-2 py-5 button-blur-footer-link">
                <i class='bx bx-menu text-orange-500 text-3xl'></i>
                <h1 className="text-2xl flex items-center">botanical</h1>
            </div>
        </header>
        {/*Navbar-V3*/}
        <header className={`w-[40%] h-[8vh] bottom-2 ${scrolled_navbar ? 'animate' : 'mb-[-20vh]'} hidden lg:flex rounded-full border-transparent border-white fixed z-40 header-border-v3`}>
            <div className="w-full h-full flex justify-between items-center px-2">
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer header-border-v3 z-20'>Home</Link>
                <Link to="/Menu" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer header-border-v3 z-20'>Menu</Link>
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer header-border-v3 z-20'>Locations</Link>
                <Link to="/" className='px-8 py-2 rounded-full text-lg bg-black text-white cursor-pointer header-border-v3 z-20'>Jobs</Link>
                <Link to="/" className='px-2 py-1 rounded-full text-xl text-orange-500 bg-black cursor-pointer'>
                    <i class='bx bx-cart text-2xl text-orange-500'></i>
                </Link>
            </div>
        </header>
    </>
}