import React from "react";
import Head from "next/head";
import PageTransition from "@/components/transitions/pageTransitions";
import Layout from "@/components/layouts/layout";

const contact = () => {
    return (
        <>
            <Head>
                <title>Alexandra Marinescu</title>
                <meta name="description" content="content" />
            </Head>
            <PageTransition />
            <main>
                <Layout>
                    <div className="min-h-screen w-full flex items-center justify-center ">
                        <div className="px-4 w-[50%] self-center mb-24 laptop:w-[70%] phone:w-[80%] phone:mb-0 sm-desktop:my-24">
                            <form action="#" className="space-y-8">
                                <div>
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Your email</label>
                                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                                    rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white" placeholder="name@mail.com" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Subject</label>
                                    <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border 
                                    border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Let me know how can I help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Message</label>
                                    <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg 
                                    shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Your message..."></textarea>
                                </div>
                                <button type="submit" className="py-3 px-5 text-lg font-semibold text-center text-light dark:text-dark rounded-lg 
                                bg-dark dark:bg-light sm:w-fit hover:bg-dark/70 focus:ring-4 focus:outline-none
                                focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                            </form>
                        </div>
                    </div>
                </Layout>
            </main>
            

        </>
    )
}

export default contact;