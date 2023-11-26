import React, {FC} from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string,
    className?: string,
}

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

const AnimatedText: FC<AnimatedTextProps> = ({text, className}) => {
    return (
        <div className="w-full flex items-center justify-center text-center mx-auto py-2 overflow-hidden">
            <motion.h1 className={`inline-block w-full text-dark font-bold capitalize
             dark:text-light text-5xl text-left sm-desktop:!text-3xl phone:!text-2xl desktop:!text-4xl ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word + '-' + index} className="inline-block"
                            variants={singleWord}
                        >
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText;