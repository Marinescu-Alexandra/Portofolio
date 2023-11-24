import React from "react";

const Footer = () => {
    return (
        <footer className="w-full h-[100px] flex items-center justify-center border-t-2 border-solid border-dark dark:border-light 
                           font-medium text-lg">
            <span className="dark:text-light phone:text-sm">
                {new Date().getFullYear()} &copy; All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer;