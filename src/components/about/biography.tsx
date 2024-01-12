import React, { RefObject, FC } from "react";
import Image from "next/image";
import profilePic from "@/images/me.png"
import { motion } from "framer-motion";

interface BiographyProps {
    sectionRef: RefObject<HTMLDivElement>,
}

const Biography: FC<BiographyProps> = ({ sectionRef }) => {
    return (
        <>
            <div className="w-full relative scroll-mt-24" ref={sectionRef}>
                <h2 className="font-bold text-8xl mb-64 w-full text-center dark:text-light tablet:text-6xl phone:text-4xl sm-desktop:mb-44">
                    Biography
                </h2>
                <motion.div className="w-[50%] h-auto mx-auto relative sm-desktop:w-[80%] laptop:w-[70%]"
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <div className="w-full h-full flex justify-center items-center border-[1px] border-dark/10 dark:border-light rounded-2xl
                                  bg-white dark:bg-dark shadow-xl"
                    >
                        <div className="flex flex-col justify-between items-center w-[75%] h-[full-75px]">
                            <div className="font-bold text-gray-700 rounded-full shadow-xl absolute top-0 mt-[-75px]
                                          bg-light border-[2px] border-dark/10 font-mono w-[150px] h-[150px]">
                                <Image src={profilePic} alt="ProfilePicture" className="w-[150px] h-[150px] rounded-full border-2 border-white" priority
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 50vw,
                                            50vw"
                                /> 
                            </div>
                            <h3 className="capitalize font-medium text-xl mt-[125px] text-center dark:text-light">
                                Alexandra Marinescu
                            </h3>
                            <span className="font-normal my-2 text-sm text-center text-dark/75 dark:text-light/75">
                                Software Developer | Bucharest, Romania
                            </span>
                            <p className="font-medium my-4 text-base mb-24 text-center text-dark dark:text-light">
                                Hello, my name is Alexandra, I am a software developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 1 year of experience in the field, I am always looking for
                                new challenges and growing as much as possible.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Biography;