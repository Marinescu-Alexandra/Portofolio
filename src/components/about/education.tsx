import React from "react";
import { motion, useScroll } from "framer-motion"
import { useRef, RefObject } from "react";
import CircleMarkIcon from "./circleMarkIcon";

const Details = ({ type, time, place, info }: {
    type: string, time: string, place: string, info: string,
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
                <h3 className="capitalize font-bold text-2xl my-2 dark:text-light">
                    {type}
                </h3>
                <span className="capitalize font-semibold text-dark/75 my-2 dark:text-light/50">
                    {time} | {place}
                </span>
                <p className="font-medium w-full my-2 dark:text-light">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = ({ innerRef }: { innerRef: RefObject<HTMLDivElement> }) => {
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
                    Education
                </h2>
                <div ref={ref} className="w-[75%] phone:w-[85%] mx-auto relative">
                    <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-9 top-5 w-[4px] h-full bg-dark origin-top dark:bg-light" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            type="Bachelor Degree In Computer Sience and Mathematics"
                            time="2019-2023" place="University Of Bucharest"
                            info="Thesis - A application for Web, iOS, Android in React Native&NodeJS to easier facilitate adoption and pet care with features 
                            such as: google maps integration, live chat with adoption centers and clinics, online adoption process and vet appointments 
                            Procedural Programming in Python - Acquired a solid understanding of Python syntax, data types, variables, operators, 
                            control flow statements, basic input/output operations and algorithmic thinking
                            OOP Concepts - Learned and used various OPP Concepts in a budget manager application, such as: Classes, Methods, 
                            Constructors, Encapsulation, Inheritance, Polymorphism, Abstraction
                            Databases - Learned about relational databases, using MySQL and designed a database structure for a delivery company 
                            iOS Application Development - Built a task management application using SwiftUI
                            Full Stack Web Development - Built an e-commerce website with NodeJS, Express for Backend, HTML, CSS and JavaScript for 
                            Frontend, SQLite for database
                            Game Development - Built a 2D Platformer game in Unity and C#
                            Data Structures - Learned about space and time complexity and basic data structures like Trees, Heap, Queue, Arrays, 
                            Dictionaries, etc
                            Operating Systems in Linux - Learned to effectively use the Linux bash command line, automate tasks through scripting, 
                            understand Unix user permissions, processes, system calls, and file management"
                        />
                        <Details
                            type="High School Graduate specialization Mathematics and Informatics"
                            time="2015-2018" place="National Collage Ion Neculce"
                            info="In this high school I acquired the basics in mathematics and computer science and at the same time I gained and developed 
                            my passion for computer science. I developed my critical and analytical thinking skills with some exceptionally well-trained teachers."
                        />
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Education;