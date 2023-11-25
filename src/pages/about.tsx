import Head from "next/head";
import React, { useState, useRef, RefObject } from "react";
import { motion } from "framer-motion";
import ContentText from "@/components/about/aboutContentText";
import Experience from "@/components/about/experience";
import Education from "@/components/about/education";
import Biography from "@/components/about/biography";
import Skills from "@/components/about/skills";
import Layout from "@/components/layouts/layout";
import { BlueDiv, ConstellationLower, ConstellationUpper } from "@/svg/svg";
import PageTransition from "@/components/transitions/pageTransitions";

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
            <PageTransition/>
            <main className="w-full min-h-screen flex items-center text-dark dark:text-light">
                <Layout className="!p-0">
                    <div className="flex flex-col items-center gap-y-80 mb-64 sm-desktop:mt-24 sm-desktop:gap-y-44">
                        <div className="w-full min-h-screen flex flex-col items-center justify-center gap-y-40 sm-desktop:hidden">
                            <div className="w-[80%] h-full flex items-center justify-center">
                                <ConstellationUpper className="w-full" />
                                <ConstellationLower className="absolute w-[80%]" />
                            </div>
                            <motion.div className="flex w-full items-center justify-center sm-desktop:hidden"
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
                                    <div className="w-full flex flex-row items-center mb-4 px-4">
                                        {contentTextButtons.map((button, index) =>
                                            <ContentText text={button.text} length={(index + 1) * 0.25}
                                                onLengthChange={handleLengthChange} onClick={() => handleClick(button.href)}
                                            />
                                        )}
                                    </div>
                                    <BlueDiv className="w-full" length={Number(fillLength)} />
                                    <div className="w-full flex flex-row justify-between">
                                        {   
                                            new Array(contentTextButtons.length + 1).fill(null).map(() =>
                                                <div className="w-[30px] h-[30px] border-2 border-dark/80 rounded-full
                                                    bg-light -translate-y-[65%] dark:border-light dark:bg-dark" />
                                            )
                                        }
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <Biography innerRef={biographyRef} />
                        <Experience innerRef={experienceRef} />
                        <Education innerRef={educationRef} />
                        <Skills innerRef={skillsRef} />
                    </div>
                </Layout>
            </main>

        </>

    )
}

export default about;