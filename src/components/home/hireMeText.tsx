import React from "react";
import Link from "next/link";
import { CircularText } from "@/svg/svg";

const HireMeText = () => {
    return (
        <div className="fixed z-10 right-10 bottom-10 items-center justify-center overflow-hidden sm-desktop:top-14 sm-desktop:bottom-auto tablet:hidden">
            <div className="w-40 h-40 relative flex items-center justify-center">
                <CircularText className={"animate-spin-slow fill-dark dark:fill-light"} />
                <Link
                    href="mailto:alexandra.marinescu.dev@proton.me"
                    className="w-20 h-20 absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                    bg-dark dark:bg-light text-light dark:text-dark shadow-md border border-solid border-dark dark:border-light
                    hover:bg-light hover:dark:bg-dark hover:text-dark hover:dark:text-light 
                    rounded-full font-semibold"
                > Hire Me </Link>
            </div>
        </div>
    )
}

export default HireMeText;