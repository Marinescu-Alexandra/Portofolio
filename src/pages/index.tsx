import Layout from "@/components/layout"
import Head from "next/head"
import Image from 'next/image'
import Link from "next/link"
import profilePic from "../../public/meprofile.png"
import AnimatedText from "@/components/HomeComponents/animatedText"
import { LinkArrow } from "@/components/icons"
import HireMeText from "@/components/HomeComponents/hireMeText"

export default function Home() {
    return (
    <>
        <Head>
            <title>Alexandra Marinescu</title>
            <meta name="description" content="content" />
        </Head>
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm-desktop:my-[50px]">
            <Layout className="pt-0">
                    <div className="flex flex-row items-center justify-between w-full sm-desktop:flex-col sm-desktop:space-y-8">
                        <div className="w-1/2 phone:w-[85%] tablet:w-[80%] laptop:w-[75%] sm-desktop:w-[70%]">
                            <Image src={profilePic} alt="ProfilePicture" className="w-full h-auto" priority
                                sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                       50vw"
                            />   
                    </div>
                        <div className="w-1/2 flex flex-col items-center self-center phone:w-[85%] tablet:w-[80%] laptop:w-[75%] sm-desktop:w-[70%]  ">
                        <AnimatedText text="Turning Vision Into Reality With Code And Design." className=""/>
                        <p className="my-4 font-medium text-2xl phone:text-base tablet:text-lg sm-desktop:text-2xl">
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
Explore my latest projects and articles, showcasing my expertise in React.js and web development.    
                        </p>
                        <div className="flex items-center self-start mt-2">
                            <Link href="/dummy.pdf" target={"_blank"}
                                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                                            hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                                            dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                                download={true}
                            >
                                Resume
                                <LinkArrow className="w-6 ml-1.5"/>
                            </Link>
                            <Link href="mailto:alexandra.marinescu.dev@proton.me" target={"_blank"}
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                            >Contact</Link>
                        </div>

                    </div>
                </div>
            </Layout>
            <HireMeText />
        </main>
    </>
  )
}
