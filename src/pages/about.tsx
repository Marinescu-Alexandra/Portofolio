import { BlueDiv, ConstellationComplete, ConstellationComplete2 } from "@/components/icons";
import React from "react";
import { useState, useRef, RefObject } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import ContentText from "@/components/AboutComponents/aboutContentText";
import Experience from "@/components/AboutComponents/experience";
import Education from "@/components/AboutComponents/education";
import Biography from "@/components/AboutComponents/biography";
import Skills from "@/components/AboutComponents/skills";


const about = () => {

    const [fillLength, setFillLength] = useState<number>(0);
    const handleLengthChange = (length: number) => {
        setFillLength(length)
    }

    const biographyRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    const contentTextButtons: {
        text: string,
        href: RefObject<HTMLDivElement>
    }[] = [{ text: "Biography", href: biographyRef },
    { text: "Experience", href: experienceRef },
    { text: "Education", href: educationRef },
    { text: "Skills", href: skillsRef }]

    const handleClick = (ref: RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <>
            <Head>
                <title>Alexandra Marinescu</title>
                <meta name="description" content="content" />
            </Head>
            <div className="flex flex-col items-center w-full h-auto my-44 sm-desktop:my-24">
                <div className="w-[80%] self-center h-auto flex sm-desktop:hidden">
                    <ConstellationComplete className="z-0" />
                    <ConstellationComplete2 className=" absolute z-1 w-[80%]" />
                </div>
                <motion.div className="flex relative w-full items-center justify-center my-[200px] sm-desktop:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2.5,
                        ease: "easeInOut",
                        repeat: 0,
                        repeatType: "loop",
                    }}
                >
                    <div className="w-[70%] flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-evenly z-10 w-[97%] mb-4">
                            {contentTextButtons.map((button, index) =>
                                <ContentText text={button.text} length={(index + 1) * 0.25}
                                    onLengthChange={handleLengthChange} onClick={() => handleClick(button.href)}
                                />
                            )}
                        </div>
                        <BlueDiv className="w-[99%]" length={Number(fillLength)} />
                        <div className="flex flex-row justify-between w-full">
                            {contentTextButtons.map((item) => 
                                <div className="w-[30px] h-[30px] border-2 border-dark/80 rounded-full bg-light -translate-y-[65%] dark:border-light dark:bg-dark" />
                            )}
                            <div className="w-[30px] h-[30px] border-2 border-dark/80 rounded-full bg-light -translate-y-[65%] dark:border-light dark:bg-dark" />
                        </div>
                    </div>
                </motion.div>
                <Biography innerRef={biographyRef} />
                <Experience innerRef={experienceRef} />
                <Education innerRef={educationRef} />
                <Skills innerRef={skillsRef} />
            </div>
        </>

    )
}

export default about;