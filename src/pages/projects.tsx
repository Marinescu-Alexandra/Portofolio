import React from "react";
import Head from "next/head";
import { StaticImageData } from "next/image";
import nextjs from "@/icons/nextjs.png"
import typescript from "@/icons/typescript.png"
import tailwind from "@/icons/tailwind.png"
import Layout from "@/components/layouts/layout";
import PageTransition from "@/components/transitions/pageTransitions";
import ProjectCard from "@/components/projects/projectCard";

const Projects = () => {
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
            <PageTransition/>
            <main>
                <Layout>
                    <div className="min-h-screen w-[70%] flex-col flex justify-center items-center mx-auto tablet:w-[90%] 
                                    gap-y-28 mt-24 sm-desktop:gap-y-20">
                        {details.map((project) =>
                            <ProjectCard title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} />
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;