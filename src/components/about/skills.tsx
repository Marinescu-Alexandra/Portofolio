import React, { useEffect, useRef, RefObject, FC } from "react";
import { motion, useInView, useMotionValue, useSpring, useAnimation } from "framer-motion";

interface AnimatedNumbersProps {
    value: number,
}

interface DetailsProps {
    skillLevel: number,
    skillName: string,
    info: string,
}
interface SkillsProps {
    sectionRef: RefObject<HTMLDivElement>,
}

const AnimatedNumbers: FC<AnimatedNumbersProps> = ({ value }) => {
    const ref = useRef<HTMLInputElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 10000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0) + "%"
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref} className="absolute text-xl font-semibold mt-[65px] ml-[57px] dark:text-primary"></span>
    )
}

const Details: FC<DetailsProps> = ({ skillLevel, skillName, info }) => {
    const controls = useAnimation();
    const ref = useRef<HTMLInputElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({
                pathLength: skillLevel,
            });
        }
    }, [controls, isInView, skillLevel]);

    return (
        <div ref={ref}  className="flex flex-col justify-evenly items-center">
            <div className="flex intems-center" >
                <figure className="stroke-dark">
                    <svg className="-rotate-90" width="150" height="150" viewBox="0 0 440 440" >
                        <motion.circle  cx="220" cy="220" r="190" className="stroke-[24px] fill-none" id="shadow"
                            initial={{pathLength: 0}}
                            animate={controls}
                            transition={{ duration: 5 }}
                        />
                        <motion.circle cx="220" cy="220" r="190" className="stroke-[12px] stroke-primary fill-none dark:stroke-dark/40" 
                            initial={{ pathLength: 0 }}
                            animate={controls}
                            transition={{ duration: 5 }}
                        />
                    </svg>
                </figure>
                <AnimatedNumbers value={skillLevel * 100}/>
            </div>

            <h2 className="font-bold text-lg my-2 dark:text-primary">
                {skillName}
            </h2>
            <p className="font-normal text-sm w-[90%] text-center dark:text-light">
                {info}
            </p>
        </div>
    )
}

const Skills: FC<SkillsProps> = ({ sectionRef }) => {
    return (
        <>
            <div className="flex justify-center items-center flex-col scroll-mt-24" ref={sectionRef}>
                <h2 className="font-bold text-8xl mb-20 w-full text-center dark:text-light tablet:text-6xl phone:text-4xl">
                    Skills
                </h2>
                <motion.div className="w-[50%] h-auto flex flex-col justify-around items-center"
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <div className="w-[100%] h-auto flex flex-row justify-around items-center my-10 phone:flex-col phone:space-y-6 phone:my-4">
                        <Details skillLevel={0.9} skillName="NodeJS" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                        <Details skillLevel={0.8} skillName="React" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                        <Details skillLevel={0.95} skillName="JavaScript" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                    </div>
                    <div className="w-[100%] h-auto flex flex-row justify-around items-center my-10 phone:flex-col phone:space-y-6 phone:my-4">
                        <Details skillLevel={0.9} skillName="NodeJS" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                        <Details skillLevel={0.8} skillName="React" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                        <Details skillLevel={0.95} skillName="JavaScript" info="NodeJS is one of my favourite frameworks, used in 4 personal projects." />
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Skills;