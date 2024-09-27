import React from "react"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"
import { LinkArrow } from "@/svg/svg"
import profilePic from "@/images/meprofile2.png"
import AnimatedText from "@/components/home/animatedText"
import Layout from "@/components/layouts/layout"
import PageTransition from "@/components/transitions/pageTransitions"

export default function Home() {
    return (
    <>
        <Head>
            <title>Alexandra Marinescu</title>
            <meta name="description" content="content" />
        </Head>
        <PageTransition/>  
        <main className="w-full min-h-screen flex items-center mt-5 text-dark dark:text-light">
            <Layout>
                <div className="w-full flex flex-row items-center justify-between sm-desktop:flex-col sm-desktop:space-y-8">
                    <div className="w-1/2 phone:w-[85%] tablet:w-[80%] laptop:w-[75%] sm-desktop:w-[70%]">
                        <Image src={profilePic} alt="ProfilePicture" className="w-full h-auto" priority
                            sizes="(max-width: 768px) 100vw,
                                    (max-width: 1200px) 50vw,
                                    50vw"
                        />   
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center phone:w-[85%] tablet:w-[80%] laptop:w-[75%] sm-desktop:w-[70%]  ">
                        <AnimatedText text="Coding Solutions with Passion, Creativity and Vison." className=""/>
                        <p className="font-medium text-2xl my-4 phone:text-base tablet:text-lg sm-desktop:text-2xl">
                                    As a passionate and enthusiastic software engineer, I am always looking to improve and broaden my knowledge. I am constantly
                                    learning and testing new technologies.     
                        </p>
                        <div className="flex items-center self-start mt-2">
                                    <Link href="/files/cv_alexandra_marinescu_2024.pdf" target={"_blank"}
                                download={true}
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                                            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                                            dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                            >
                                Resume
                                <LinkArrow className="w-6 ml-1.5"/> 
                            </Link>
                                    <Link href="mailto:alexandra.marinescu.dev@proton.me" target={"_blank"}
                                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}
