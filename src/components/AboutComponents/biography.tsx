import React, { RefObject } from "react";
import Image from "next/image";
import profilePic from "../../../public/me.png"
import { motion } from "framer-motion";

const Biography = ({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) => {

    return (
        <>
            <div className="w-full mx-auto relative mt-56 scroll-m-24 sm-desktop:mt-4" ref={innerRef}>
                <motion.h2
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="font-bold text-8xl mb-64 w-full text-center dark:text-light tablet:text-6xl phone:text-4xl">
                    Biography
                </motion.h2>
                <div className="w-[50%] h-auto mx-auto relative mb-96 sm-desktop:w-[80%] laptop:w-[70%]">
                    <div className="w-full h-full border-[1px] border-dark/10 rounded-2xl shadow-xl bg-light stroke-2 flex justify-center items-center
                    dark:border-light dark:bg-dark
                    ">

                        <div className="flex flex-col justify-between items-center w-[75%] h-[full-75px]">
                            <div className="font-bold text-gray-700 rounded-full shadow-xl absolute  top-0 mt-[-75px]
                            bg-light border-[2px] border-dark/10 font-mono w-[150px] h-[150px]">
                                <Image src={profilePic} alt="ProfilePicture" className="w-[150px] h-[150px] rounded-full" priority
                                    sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                       50vw"
                                /> 
                            </div>
                            <h3 className="capitalize font-medium text-xl mt-[125px] text-center dark:text-light">
                                Alexandra Marinescu
                            </h3>
                            <span className="font-normal text-dark/75 my-2 text-sm text-center dark:text-light/75">
                                Software Developer | Bucharest, Romania
                            </span>
                            <p className="font-medium text-dark my-4 text-base mb-24 text-center dark:text-light">
                                Hello, my name is Alexandra, I am a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 1 year of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Biography;