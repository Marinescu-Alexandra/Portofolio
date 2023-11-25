import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
    return (
        <>
            
            {/* <motion.div className='fixed top-0 left-0 bottom-0 w-full h-full bg-red-300 dark:bg-gray/70 z-30 flex'
                initial={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                }}
                animate={{
                    clipPath: `circle(0 at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 1,
                    }
                }}
                exit={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 1,
                        delay: 0
                    }
                }}
            />
            <motion.div className='fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-indigo-400 dark:bg-gray/70 z-40 flex'
                initial={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                }}
                animate={{
                    clipPath: `circle(0 at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 0.8,
                    }
                }}
                exit={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 0.8,
                        delay: 0.2
                    }
                }}
            />
            <motion.div className='fixed top-0 left-0 bottom-0 w-full h-full bg-cyan-200 dark:bg-gray/70 z-50 flex'
                initial={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                }}
                animate={{
                    clipPath: `circle(0 at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 0.6,
                    }
                }}
                exit={{
                    clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
                    transition: {
                        repeat: 0,
                        duration: 0.6,
                        delay: 0.4
                    }
                }}
            /> */}


            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-lightGray dark:bg-darkSecondary"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{duration:0.9, ease:"easeInOut"}}
            />
            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-gray"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
            />
            <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-darkSecondary dark:bg-lightGray"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.9, ease: "easeInOut" }}
            />
        </>
    )
}

export default PageTransition;