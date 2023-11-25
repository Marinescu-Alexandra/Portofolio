import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import Image from 'next/image';
import sun from "../../../public/icons/sun.png"
import moon from "../../../public/icons/moon.png"
import { useRouter, usePathname } from 'next/navigation';
import { GithubIcon, LinkedInIcon } from '../../../public/svg/svg';
import { motion } from 'framer-motion';

const CustomLink = ({ href, title, className = "" }: { href: string, title: string, className: string }) => {
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
        <header className='w-full sm-desktop:h-[50px] sm-desktop:bg-white sm-desktop:dark:bg-darkSecondary sm-desktop:fixed 
        px-32 sm-desktop:py-0 top-0 py-2 font-medium flex items-center justify-between dark:text-light sm-desktop:px-6 z-20'>

            <button className='fixed justify-center items-center hidden sm-desktop:flex mt-1 z-20'
                onClick={handleMenuClick}
            >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <motion.path
                        className="dark:stroke-light"
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <motion.path
                        className="dark:stroke-light"
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        animate={isMenuOpen ? "open" : "closed"}
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <motion.path
                        className="dark:stroke-light"
                        fill="transparent"
                        strokeWidth="3"
                        stroke="hsl(0, 0%, 18%)"
                        strokeLinecap="round"
                        animate={isMenuOpen ? "open" : "closed"}
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
            
            <motion.div className='fixed -top-2 left-0 bottom-0 w-full bg-gray/70 dark:bg-gray/70 z-10 flex'
                onClick={() => setMenuOpen(false)}
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                    open: (height = 1000) => ({
                        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
                        transition: {
                            type: "spring",
                            stiffness: 20,
                            restDelta: 2
                        }
                    }),
                    closed: {
                        clipPath: "circle(0px at 40px 40px)",
                        transition: {
                            delay: 0.2,
                            type: "spring",
                            stiffness: 400,
                            damping: 40
                        }
                    }
                }}
            />

            <motion.div className="fixed -top-2 left-0 bottom-0 w-[300px] bg-lightGray dark:bg-gray z-10 
            flex flex-col items-center justify-start space-y-16"
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                    open: (height = 1000) => ({
                        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
                        transition: {
                            type: "spring",
                            stiffness: 20,
                            restDelta: 2
                        }
                    }),
                    closed: {
                        clipPath: "circle(0px at 40px 40px)",
                        transition: {
                            delay: 0.2,
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                            
                        }
                    }
                }}
            >
                <div className='mt-24 flex flex-col justify-center items-center space-y-4' onClick={handleMenuClick}>
                    <CustomLink href="/" title="Home" className='text-xl'/>
                    <CustomLink href="/about" title="About" className='text-xl' />
                    <CustomLink href="/projects" title="Projects" className='text-xl' />
                    <CustomLink href="/contact" title="Contact" className='text-xl' />
                </div>

                <nav className='flex flex-row items-center justify-center'>

                    <motion.a href="https://github.com/Marinescu-Alexandra" target={"_blank"}
                        whileHover={{ y: -4 }}
                        className='w-9 mr-3 mb-0.4'
                        whileTap={{ scale: 0.7 }}
                    >
                        <GithubIcon className='' />
                    </motion.a>

                    <motion.a href="https://www.linkedin.com/in/alexandra-marinescu-profile/" target={"_blank"}
                        whileHover={{ y: -4 }}
                        className='w-8 mx-3'
                        whileTap={{ scale: 0.7 }}
                    >
                        <LinkedInIcon className='' />
                    </motion.a>

                    <motion.button className='ml-3' onClick={handleThemeSwitch}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.7 }}
                    >
                        {
                            mode === "dark" ?
                                <Image src={moon} alt='darkThemeIcon' width={30} height={30}
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 50vw,
                                           50vw"
                                />
                                :
                                <Image src={sun} alt='lightThemeIcon' width={30} height={30}
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 50vw,
                                            50vw"
                                />
                        }
                    </motion.button>
                </nav>

            </motion.div>

            <nav className='flex-1 sm-desktop:hidden'>
                <CustomLink href="/" title="Home" className='mr-4' />
                <CustomLink href="/about" title="About" className='mx-4' />
                <CustomLink href="/projects" title="Projects" className='mx-4' />
                <CustomLink href="/contact" title="Contact" className='ml-4' />
            </nav>

            <div className='top-2 flex-1 sm-desktop:hidden'>
                <Logo />
            </div>

            <nav className='flex flex-row items-center justify-end flex-wrap flex-1 sm-desktop:hidden'>

                <motion.a href="https://github.com/Marinescu-Alexandra" target={"_blank"}
                    whileHover={{ y: -4 }}
                    className='w-9 mr-3 mb-0.4'
                    whileTap={{ scale: 0.7 }}
                >
                    <GithubIcon className='' />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/alexandra-marinescu-profile/" target={"_blank"}
                    whileHover={{ y: -4 }}
                    className='w-8 mx-3'
                    whileTap={{ scale: 0.7 }}
                >
                    <LinkedInIcon className='' />
                </motion.a>

                <motion.button className='ml-3' onClick={handleThemeSwitch}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.7 }}
                >
                    {
                        mode === "dark" ?
                            <Image src={moon} alt='darkThemeIcon' width={30} height={30}
                                priority
                                sizes=" (max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        50vw"
                            />
                            :
                            <Image src={sun} alt='lightThemeIcon' width={30} height={30}
                                priority
                                sizes=" (max-width: 768px) 100vw,
                                        (max-width: 1200px) 50vw,
                                        50vw"
                            />
                    }
                </motion.button>
            </nav>

        </header>
    )
}

export default NavBar;