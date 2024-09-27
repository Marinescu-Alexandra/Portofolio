import React, { FC } from "react";
import { motion, useScroll } from "framer-motion"
import { useRef, RefObject } from "react";
import CircleMarkIcon from "./circleMarkIcon";

interface DetailsProps {
    position: string,
    company: string,
    companyLink: string,
    time: string,
    address: string,
    work: string,
}

interface ExperienceProps {
    sectionRef: RefObject<HTMLDivElement>,
}

const Details: FC<DetailsProps> = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="flex flex-col items-center justify-between my-8 first:mt-0 last:mb-0 w-[60%] mx-auto">
            <CircleMarkIcon targetRef={ref} />
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

const Experience: FC<ExperienceProps> = ({ sectionRef }) => {
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
                <h2 className="font-bold text-8xl mb-32 w-full text-center scroll-m-16 dark:text-light tablet:text-6xl phone:text-4xl" ref={sectionRef}>
                    Experience
                </h2>
                <div ref={ref} className="w-[75%] phone:w-[85%] mx-auto relative">
                    <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-5 w-[4px] h-full origin-top bg-dark dark:bg-light" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="iOS Engineer" company="Luxon Tech" companyLink="https://luxon.com/"
                            time="2023-Present" address="Bucuresti, Romania"
                            work="As part of the mobile development team for LuxonPay, I collaborated closely with my senior colleague to refactor a significant portion 
                            of the app’s outdated architecture, transitioning it to a more stable and maintainable structure. I also contributed to the implementation of new features and 
                            a complete redesign of the application's interface, introduced unit testing to ensure ongoing code quality and stability, 
                            while maintaining these tests throughout development."
                        />
                        <Details
                            position="iOS Developer" company="IT Smart Systems" companyLink="https://www.itsmartsystems.eu/"
                            time="2022-2023" address="Bucuresti, Romania"
                            work="I was responsible for maintaining and implementing features for the Croatian banking application 
                            Hrvatska poštanska banka. Collaborated with the BA team to smoothly incorporate RESTful APIs and conducted 
                            testing using POSTMAN. Addressed numerous critical bugs and conducted code reviews for fellow colleagues. 
                            Integrated banking business logic using Backbase Framework and Backbase Experience Manager. 
                            Improved communication skills through direct customer interaction. "
                        />
                        <Details
                            position="iOS Developer Intern" company="IT Smart Systems" companyLink="https://www.itsmartsystems.eu/"
                            time="2022-2022" address="Bucuresti, Romania"
                            work="I Received mentoring from senior colleagues throughout the process of learning and completing various 
                            challenges by creating iOS applications&courses, fortifying my knowledge on Autolayouts, Views, Data Collections 
                            and API integration."
                        />
                        <Details
                            position="Support IT" company="Lander Sport SRL" companyLink="https://www.lander.ro/"
                            time="2019-2020" address="Bucuresti, Romania"
                            work="I was responsible for maintaining and updating backup systems, repairing, maintaining and upgrading computeres and printers, 
                            updating content on every website owned by the company, designing and deploying newsletters for clients."
                        />
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Experience