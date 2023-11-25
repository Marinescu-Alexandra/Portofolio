import React from "react";
import { motion, useScroll } from "framer-motion"
import { useRef, RefObject } from "react";
import CircleMarkIcon from "./circleMarkIcon";

const Details = ({ position, company, companyLink, time, address, work }: {
    position: string, company: string, companyLink: string, time: string, address: string, work: string
}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <CircleMarkIcon refference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl my-2 dark:text-light phone:text-lg">
                    {position}&nbsp;
                    <a href={companyLink} target="_blank" className="text-primary font-semibold tracking-wide 
                    drop-shadow-[0_1px_1px_rgba(0,0,0,1)] text-stroke-2">@{company}</a>
                </h3>
                <span className="capitalize font-semibold text-dark/75 my-2 dark:text-light/50">
                    {time} | {address}
                </span>
                <p className="font-medium w-full my-2 dark:text-light">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = ({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return (
        <>
            <div className="scroll-mt-24">
                <h2 className="font-bold text-8xl mb-32 w-full text-center scroll-m-16 dark:text-light tablet:text-6xl phone:text-4xl" ref={innerRef}>
                    Experience
                </h2>
                <div ref={ref} className="w-[75%] phone:w-[85%] mx-auto relative">
                    <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-5 w-[4px] h-full origin-top bg-dark dark:bg-light" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="iOS Developer" company="IT Smart Systems" companyLink="www.google.com"
                            time="2022-2023" address="Bucuresti, Romania"
                            work="I was responsible for maintaining and implementing features for the Croatian banking application 
                            Hrvatska poštanska banka. Collaborated with the BA team to smoothly incorporate RESTful APIs and conducted 
                            testing using POSTMAN. Addressed numerous critical bugs and conducted code reviews for fellow colleagues. 
                            Integrated banking business logic using Backbase Framework and Backbase Experience Manager. 
                            Improved communication skills through direct customer interaction. "
                        />
                        <Details
                            position="iOS Developer Intern" company="IT Smart Systems" companyLink="www.google.com"
                            time="2022-2022" address="Bucuresti, Romania"
                            work="I Received mentoring from senior colleagues throughout the process of learning and completing various 
                            challenges by creating iOS applications&courses, fortifying my knowledge on Autolayouts, Views, Data Collections 
                            and API integration."
                        />
                        <Details
                            position="Web Developer" company="Lander Sport SRL" companyLink="www.google.com"
                            time="2019-2020" address="Bucuresti, Romania"
                            work="Maintained and implemented features for Croatian banking application Hrvatska poštanska banka.
                            search engine, including improving the accuracy and relevance of search results and
                            developing new tools for data analysis and visualization"
                        />
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Experience