import React from "react";
import { CircularText } from "../../../public/svg/svg";
import Link from "next/link";

const HireMeText = () => {
    return (
        <div className="fixed right-10 bottom-10 items-center justify-center overflow-hidden sm-desktop:top-14 sm-desktop:bottom-auto tablet:hidden">
            <div className="w-40 h-40 flex items-center justify-center relative">
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <Link href="mailto:alexandra.marinescu.dev@proton.me" className="flex items-center justify-center
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark
                w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light dark:border-light
                "
                > Hire Me</Link>
            </div>
        </div>
    )
}

export default HireMeText;