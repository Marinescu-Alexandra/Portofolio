import React, {FC} from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string,
    link: string,
    info: string,
    icons: Array<StaticImageData>,
    image: StaticImageData
}

const ProjectCard: FC<ProjectCardProps> = ({ title, link, info, icons, image }) => {
    return (
        <>
            <div className="w-full flex flex-row justify-center items-center sm-desktop:flex-col">
                <motion.div className="w-[50%] bg-dark h-[500px] rounded-l-2xl flex items-center justify-center dark:bg-lightDark
                sm-desktop:w-[90%] sm-desktop:rounded-t-2xl sm-desktop:rounded-b-none sm-desktop:min-h-auto shadow-glow"
                    initial={{ boxShadow: '0 0 5px #65ddf4' }}
                    animate={{ boxShadow: '0 0 30px #65ddf4' }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                >
                    <Image src={image}
                        alt="ProfilePicture"
                        className="w-full h-full rounded-2xl rounded-r-none sm-desktop:rounded-b-none sm-desktop:rounded-t-2xl"
                        style={{ objectFit: 'contain'}}
                        priority
                        sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               50vw"
                    />
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
                    <p className="mx-6 font- text-lg mb-4 dark:text-light">
                        {info}
                    </p>
                    <div className="flex flex-row justify-left items-center mx-6 space-x-4 mb-4">
                        {icons.map((icon) =>
                            <Image
                                src={icon}
                                alt="nextjsImage"
                                className="rounded-full bg-light sm-desktop:h-[30px] sm-desktop:w-[30px] border-2"
                                width={50}
                                height={50}
                                priority
                                sizes="(max-width: 768px) 100vw,
                                       (max-width: 1200px) 50vw,
                                        50vw"
                            />
                        )}
                    </div>
                    <div className="flex text-medium font-medium text-light mx-6 mb-6 dark:text-dark">
                        <a className="rounded-lg bg-dark px-2 py-1 left-0 dark:bg-black dark:text-light dark:border-2 dark:border-light" href={link}>
                            See full details on GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default ProjectCard;