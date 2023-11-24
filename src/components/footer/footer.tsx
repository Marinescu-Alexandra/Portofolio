import React from "react";
import Layout from "../layouts/layout";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light tablet:py-6 ">
            <Layout className="py-8 flex items-center justify-center ">
                <span className="dark:text-light phone:text-sm">
                    {new Date().getFullYear()} &copy; All Rights Reserved.
                </span>
            </Layout>
        </footer>
    )
}

export default Footer;