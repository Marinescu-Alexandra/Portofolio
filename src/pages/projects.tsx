import React from "react";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import webscraper from "@/images/webscraper.png"
import nextjs from "@/icons/nextjs.png"
import typescript from "@/icons/typescript.png"
import tailwind from "@/icons/tailwind.png"
import Layout from "@/components/layouts/layout";

const CardHorizontal = ({ title, link, info, icons }: { title: string, link: string, info: string, icons: Array<StaticImageData> }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-center items-center sm-desktop:flex-col">
                <motion.div className="w-[50%] bg-dark h-[500px] rounded-l-2xl flex items-center justify-center dark:bg-lightDark
                sm-desktop:w-[90%] sm-desktop:rounded-t-2xl sm-desktop:rounded-b-none sm-desktop:h-auto shadow-glow"
                    initial={{ boxShadow: '0 0 5px #65ddf4' }}
                    animate={{ boxShadow: '0 0 22px #65ddf4' }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <Image src={webscraper} alt="ProfilePicture" className="w-[75%] h-[95%] rounded-2xl" style={{ objectFit: "contain" }} />
                </motion.div>
                <motion.div className="w-[36%] h-[500px] rounded-r-2xl flex flex-col justify-around items-left sm-desktop:w-[90%]
                sm-desktop:rounded-t-none sm-desktop:rounded-b-2xl sm-desktop:h-auto shadow-glow bg-white dark:bg-dark"
                    initial={{ boxShadow: '0 0 5px #65ddf4' }}
                    animate={{ boxShadow: '0 0 22px #65ddf4' }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <h2 className="font-semibold text-2xl my-4 mx-6 dark:text-light">
                        {title}
                    </h2>
                    <p className="mx-6 font- text-sm mb-4 dark:text-light">
                        {info}
                    </p>
                    <div className="flex flex-row justify-left items-center mx-6 space-x-4 mb-4">
                        {icons.map((icon) =>
                            <Image
                                src={icon}
                                alt="nextjsImage"
                                className="rounded-full bg-light sm-desktop:h-[30px] sm-desktop:w-[30px] border-2"
                                width={50}
                                height={50} />
                        )}
                    </div>
                    <div className="flex text-medium font-medium text-light mx-6 mb-6 dark:text-dark">
                        <a className="rounded-lg bg-dark px-2 py-1 left-0 dark:bg-black dark:text-light dark:border-2 dark:border-light">
                            See full details on GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

const projects = () => {
    const details: {
        title: string,
        link: string,
        info: string,
        icons: Array<StaticImageData>
    }[] = [{ title: "TV Shows Tracker", link: "href", icons: [nextjs, typescript, tailwind], info: "This project is simple web scraping application, meant to scrape content from https://wsa-test.vercel.app/.The scraped data is returned in a JSON format, and can be filtered by multiple queries.The scraped data isdisplayed on a frontend server and can be easily copied with a button." },
            { title: "Web Scraper Application", link: "href", icons: [nextjs, typescript, tailwind], info: "This project is simple web scraping application, meant to scrape content from https://wsa-test.vercel.app/.The scraped data is returned in a JSON format, and can be filtered by multiple queries.The scraped data isdisplayed on a frontend server and can be easily copied with a button." },
            { title: "Personal Portofolio", link: "href", icons: [nextjs, typescript, tailwind], info: "This project is simple web scraping application, meant to scrape content from https://wsa-test.vercel.app/.The scraped data is returned in a JSON format, and can be filtered by multiple queries.The scraped data isdisplayed on a frontend server and can be easily copied with a button." },
            { title: "Travell Assistant", link: "href", icons: [nextjs, typescript, tailwind], info: "This project is simple web scraping application, meant to scrape content from https://wsa-test.vercel.app/.The scraped data is returned in a JSON format, and can be filtered by multiple queries.The scraped data isdisplayed on a frontend server and can be easily copied with a button." },]
    
    return (
        <>
            <Head>
                <title>Alexandra Marinescu</title>
                <meta name="description" content="content" />
            </Head>
            <main>
                <Layout>
                    <div className="min-h-screen w-[70%] flex-col flex justify-center items-center mx-auto tablet:w-[90%] 
                                    gap-y-28 mt-24 sm-desktop:gap-y-20 bg-dark">
                        {details.map((project) =>
                            <CardHorizontal title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} />
                        )}
                    </div>
                </Layout>
            </main>

        </>

    )
}

export default projects;