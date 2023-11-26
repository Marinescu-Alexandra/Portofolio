import React from "react";
import { motion } from "framer-motion";

const PageTransition = () => {
    return (
        <>
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