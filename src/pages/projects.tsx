import React from "react";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import webscraper from "../../public/webscraper.png"
import nextjs from "../../public/nextjs.png"
import typescript from "../../public/typescript.png"
import tailwind from "../../public/tailwind.png"

const CardHorizontal = ({ title, link, info, icons }: { title: string, link: string, info: string, icons: Array<StaticImageData> }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-center items-center sm-desktop:flex-col sm-desktop:my-24 ">
                <div id="projectDiv" className="w-[50%] bg-dark h-[400px] rounded-l-2xl flex items-center justify-center dark:bg-light
                lapt sm-desktop:w-[70%] lapt sm-desktop:rounded-t-2xl lapt sm-desktop:rounded-b-none sm-desktop:h-auto
                ">
                    <Image src={webscraper} alt="ProfilePicture" className="w-[75%] h-[95%] rounded-2xl" style={{ objectFit: "contain" }} />
                </div>
                <div id="projectDiv" className="w-[36%] h-[400px] rounded-r-2xl flex flex-col justify-around items-left lapt sm-desktop:w-[70%]
                sm-desktop:rounded-t-none sm-desktop:rounded-b-2xl sm-desktop:h-auto
                ">
                    <h2 className="font-semibold text-2xl my-4 mx-6 dark:text-light">
                        {title}
                    </h2>
                    <p className="mx-6 font- text-sm mb-4 dark:text-light">
                        {info}
                    </p>
                    <div className="flex flex-row justify-left items-center mx-6 space-x-4 mb-4">
                        {icons.map((icon) =>
                            <Image src={icon} alt="nextjsImage" className="rounded-full bg-light sm-desktop:h-[30px] sm-desktop:w-[30px]" width={50} height={50} />
                        )}
                    </div>
                    <div className="flex text-medium font-medium text-light mx-6 mb-6 dark:text-dark">
                        <a className="rounded-lg bg-dark px-2 py-1 left-0 dark:bg-light">
                            See full details on GitHub
                        </a>
                    </div>
                </div>

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
            <div className="min-h-screen w-[70%] flex-col flex justify-center items-center mx-auto my-24 sm-desktop:my-[50px] tablet:w-[90%] space-y-14">
                {details.map((project, index) =>
                    <CardHorizontal title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} />
                    // index % 2 == 0 ? <CardHorizontal title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} />
                    //     : <CardVertical title={`${project.title}`} link={`${project.link}`} info={`${project.info}`} icons={project.icons} />
                )}
            </div>
        </>

    )
}

export default projects;