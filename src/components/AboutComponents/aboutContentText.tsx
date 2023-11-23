import React from "react";
import { motion } from "framer-motion";

const ContentText = ({ text, className = "", length, onLengthChange, onClick }:
    { text: string, className?: string, length: number, onLengthChange: (newLength: number) => void, onClick?: () => void }) => {

    return (
        <motion.a className={`text-3xl desktop:text-2xl translate-y-[-5%] mx-2 text-center flex-1 cursor-pointer dark:text-light text-dark ${className}`}
            onHoverStart={() => onLengthChange(length)}
            onHoverEnd={() => onLengthChange(0)}
            whileHover={{
                y: -10,
                transition: { type: "spring", duration: 0.2 },
            }}
            onClick={onClick}
        >
            {text}
        </motion.a>
    )
}

export default ContentText;