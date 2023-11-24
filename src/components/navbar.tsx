import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Image from 'next/image';
import sun from "../../public/sun.png"
import moon from "../../public/moon.png"
import { useRouter, usePathname  } from 'next/navigation';
import { GithubIcon, LinkedInIcon } from './icons';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className="" }: {href: string, title: string, className: string}) => {
    const router = useRouter();
    const pathName = usePathname();
 
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`
            h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 
            group-hover:w-full transtion-[width] ease duration-300 dark:bg-light
            ${pathName === href ? 'w-full' : 'w-0'}`}>&nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    const [mode, setMode] = useState("");

    useEffect(() => {
        setMode(window.localStorage.getItem("theme") ?? "light")
    }, [])

    const handleThemeSwitch = () => {

        const userTheme = mode ?? window.localStorage.getItem("theme");

        if (userTheme === "dark") {
            setMode("light")
            document.documentElement.classList.remove("dark");
            window.localStorage.setItem("theme", "light")
        } else {
            setMode("dark")
            document.documentElement.classList.add("dark");
            window.localStorage.setItem("theme", "dark")
        }
    }
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1270) {
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)    
    })
    const [isMenuOpen, setMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
        <header className='w-full px-32 py-2 font-medium flex items-center justify-between dark:text-light laptop:px-6'>

            <button className='flex-col justify-center items-center hidden sm-desktop:flex laptop:mt-8'>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5'/>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5'/>
                <span className='bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5'/>
            </button>

            <nav className='flex-1 sm-desktop:hidden'>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects"title="Projects" className='mx-4'/>
                <CustomLink href="/contact" title="Contact" className='ml-4'/>
            </nav>
            <div className='top-2 flex-1 laptop:hidden'>
                <Logo />
            </div>
            <nav className='flex flex-row items-center justify-end flex-wrap flex-1 sm-desktop:hidden'>

                <motion.a href="https://github.com/Marinescu-Alexandra" target={"_blank"}
                whileHover={{ y: -4 }}
                className='w-9 mr-3 mb-0.4'
                whileTap={{ scale:0.7}}
                >
                    <GithubIcon className=''/>
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/alexandra-marinescu-profile/" target={"_blank"}
                whileHover={{ y: -4 }}
                className='w-8 mx-3'
                whileTap={{ scale:0.7}}
                >
                    <LinkedInIcon className=''/>
                </motion.a>

                <motion.button className='ml-3' onClick={handleThemeSwitch}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.7 }}
                >
                    {
                        mode === "dark" ? <Image src={moon} alt='darkThemeIcon' width={30} height={30} /> : <Image src={sun} alt='lightThemeIcon' width={30} height={30} />
                    }
                </motion.button>
            </nav>

        </header>
    )
}

export default NavBar;