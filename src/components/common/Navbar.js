import React,{useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import NavbarData from './NavbarData'
import NavLink from 'next/link';
import Link from 'next/link';
import TopHeader from './TopHeader';
import Image from 'next/image'
import {useRouter} from 'next/router'
import * as Scroll from 'react-scroll';
import { Link as LinkSroll, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {

    const navBarRef = useRef();

    const router = useRouter();
    const {pathname} = useRouter();
    
    const scrollToContent = () => {
        /* const offsetPosition = rappelRef.getBoundingClientRect().top -100;
        element.scrollIntoView({
            behavior: 'smooth',
            top: offsetPosition
            
        }); */
        router.push('/#SectionRappel');
    };

    const [openMenu, setOpenMenu] = useState(false);

    const [subnav, setSubnav] = useState(0);
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        window.document.addEventListener('scroll', () => {
            if(window.scrollY > 170) {
                setNavSticky(true);
            }
            else {
                setNavSticky(false);
            } 
        });
        /* window.document.addEventListener('scroll', () => {
            setSubnav(0);
        }); */
    });

    useEffect(() => {
        setSubnav(0);
        setOpenMenu(false);
    }, [pathname])
    

    return (
        <>
            <header className="z-20">
                {/* TopHeader */}
                <TopHeader />
                <nav ref={navBarRef} className={`bg-white border ${navSticky ? 'fixed top-0 z-50 w-full transition duration-500 ease-in-out shadow-lg' : undefined}`}>
                    <div className="px-4 py-1 md:px-10">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                <div className="relative w-32 h-12 cursor-pointer md:w-44">
                                    <Image
                                    src="/images/work-formation-logo-vert-3.png"
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    alt="Logo Karoy formation"
                                    />
                                </div>
                            </Link>
                            <div className="hidden lg:flex">
                                <ul className="flex space-x-3">
                                    {NavbarData && NavbarData.map((value, index) => (
                                        // <li className={pathname === '/notre-centre' ? 'text-bleue-karoy-50' : undefined}>
                                        <li className="relative lg:text-base xl:text-base 2xl:text-base 3xl:text-lg" key={index} onMouseEnter={() => setSubnav(index) }>
                                            {value.link ? (
                                                <NavLink href={value.link}>
                                                    {value.title}
                                                </NavLink>
                                            ) : (
                                                <span className="cursor-pointer">{value.title}</span>
                                            )}
                                            {value.subMenu && subnav === index ? (
                                                <div className="absolute left-0 right-0 z-50 mt-2 origin-top-right rounded-md shadow-lg md:w-80" onMouseLeave={() => setSubnav(0)}>
                                                    <ul className="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
                                                        {value.subMenu && value.subMenu.map((value, index) => (
                                                            <li key={index} className="lg:text-base xl:text-base 2xl:text-base 3xl:text-lg">
                                                                <NavLink 
                                                                href={value.link}
                                                                className="block px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-0 hover:text-white focus:text-white hover:bg-second-50 focus:bg-second-50 focus:outline-none focus:shadow-outline"
                                                                >
                                                                    {value.title}
                                                                </NavLink>
                                                            </li> 
                                                        )) }
                                                    </ul>
                                                </div>
                                            ) : null }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button 
                                className={`${pathname === '/contact' ? 'hidden' : 'block'} px-3 py-2 text-sm text-white transition duration-200 ease-in-out rounded-3xl bg-second-50 hover:bg-bleue-karoy-100 focus:bg-bleue-karoy-50`} 
                                >
                                    <LinkSroll
                                    activeClass="active"
                                    to="sectionRappel"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-100}
                                    duration={500}
                                    delay={100}
                                    isDynamic={true}
                                    ignoreCancelEvents={false}
                                    spyThrottle={500}
                                    >
                                        Des questions?
                                    </LinkSroll>
                                </button>
                            </div>
                            <div className="lg:hidden">
                                {/* Mobile-menu */}
                                <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {openMenu && (
                        <div className="p-4 bg-white border-t-2 border-gray-200 lg:hidden">
                            <ul className="flex flex-col space-y-3 font-semibold text-md fadeInUp">
                                {NavbarData && NavbarData.map((value, index) => (
                                    // <li className={pathname === '/notre-centre' ? 'text-bleue-karoy-50' : undefined}>
                                    <li className="relative" key={index} onClick={() => setSubnav(index)}>
                                        {value.link ? (
                                            <NavLink href={value.link}>
                                                {value.title}
                                            </NavLink>
                                        ) : (
                                            <span className="cursor-pointer">{value.title}</span>
                                        )}
                                        {value.subMenu && subnav === index ? (
                                                <ul className="px-2 py-2 bg-white dark-mode:bg-gray-800">
                                                    {value.subMenu && value.subMenu.map((value, index) => (
                                                        <li key={index}>
                                                            <NavLink 
                                                            href={value.link}
                                                            className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-bleue-karoy-50 dark-mode:focus:bg-bleue-karoy-50 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-white hover:bg-bleue-karoy-50 focus:bg-bleue-karoy-50 focus:outline-none focus:shadow-outline">
                                                                {value.title}
                                                            </NavLink>
                                                        </li> 
                                                    )) }
                                                </ul>
                                        
                                        ) : null }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Navbar;
