import React from "react";
import Head from "next/head";
import { StaticImageData } from "next/image";
import nextjs from "@/icons/nextjs.png"
import nodejs from '@/icons/nodejs.png'
import typescript from "@/icons/typescript.png"
import tailwind from "@/icons/tailwind.png"
import angular from '@/icons/angular.png'
import mongodb from '@/icons/mongodb.png'
import socketio from '@/icons/socketio.png'
import redux from '@/icons/redux.png'
import js from '@/icons/js.jpg'
import Layout from "@/components/layouts/layout";
import PageTransition from "@/components/transitions/pageTransitions";
import ProjectCard from "@/components/projects/projectCard";
import webScraper from '@/images/webscraper.png'
import portofolio from '@/images/personalPortofolio.png'
import messenger from '@/images/messenger.png'
import resumebuilder from '@/images/resumebuilder.png'

const Projects = () => {
    const details: {
        title: string,
        link: string,
        info: string,
        icons: Array<StaticImageData>,
        image: StaticImageData
        videoLink: string
    }[] = [
            { title: "Lotus Messenger", link: "https://github.com/Marinescu-Alexandra/LotusMessenger", icons: [nextjs, typescript, tailwind, mongodb, socketio, redux], image: messenger, info: "This project is simple chat application, where users cand create accounts, login into the acounts and and receive real time messages, media and notifications", videoLink: 'https://www.youtube.com/embed/Wqlzex300ls?si=BguTTGgOE8r7AJSE' },
            { title: "Web Scraper Application", link: "https://github.com/Marinescu-Alexandra/WebScraper", icons: [nodejs, js, angular], image: webScraper, info: "This project is simple web scraping application, meant to scrape content from https://wsa-test.vercel.app/. The scraped data is returned in a JSON format, and can be filtered by multiple queries.The scraped data is displayed on a frontend server and can be easily copied with a button.", videoLink: '' },
            { title: "Resume Builder", link: "https://github.com/Marinescu-Alexandra/ResumeBuilder", icons: [nodejs, js], image: resumebuilder, info: "This project is a backend implementation for generating automated resumes based on a chosen theme and input json.", videoLink: '' },
            { title: "Personal Portofolio", link: "https://github.com/Marinescu-Alexandra/Portofolio", icons: [nextjs, typescript, tailwind], image: portofolio, info: "This project is my personal portofolio with a fully responsive desgin, animated elements and using lastest technologies.", videoLink: '' },
            
        ]
    
    return (
        <>
            <Head>
                <title>Alexandra Marinescu</title>
                <meta name="title" content="Alexandra Marinescu - iOS Developer" />
                <meta name="description" content="This is my personal portofolio, here you can get to know me and my work." />
                <meta name="image" content="https://www.alexandra-marinescu.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fme.f2f04442.png&w=1920&q=75" />
            </Head>
            <PageTransition/>
            <main>
                <Layout>
                    <div className="min-h-screen w-[70%] flex-col flex justify-center items-center mx-auto tablet:w-[90%] 
                                    gap-y-28 mt-24 sm-desktop:gap-y-20">
                        {details.map((project, index) =>
                            <ProjectCard title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} image={project.image} videoLink={project.videoLink} key={index}/>
                        )}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default Projects;