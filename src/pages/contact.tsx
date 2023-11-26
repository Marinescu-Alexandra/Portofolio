import React, { FormEvent, useRef } from "react";
import Head from "next/head";
import PageTransition from "@/components/transitions/pageTransitions";
import Layout from "@/components/layouts/layout";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e:FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_nj6oyeb', 'template_wrxae7e', form.current, 'TnmQsHzVVyOyJrD_o')
                .then((result) => {
                    console.log(result.text);
                    alert('Message successfully sent.')
                    window.location.reload()
                }, (error) => {
                    console.log(error.text);
                    alert('Something went wrong, please try again.')
                });
        }
    }

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
                            <form action="#" ref={form} onSubmit={sendEmail} className="space-y-8">
                                <div>
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Your email</label>
                                    <input type="email" id="email" name="from_email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base 
                                    rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark font-semibold" 
                                    placeholder="name@mail.com" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Subject</label>
                                    <input type="text" id="subject" name="from_subject" className="block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border 
                                    border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 font-semibold
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark" placeholder="Let me know how can I help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block mb-2 text-lg font-semibold text-gray-900 dark:text-light">Message</label>
                                    <textarea id="message" rows={6} name="message" className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg 
                                    shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 font-semibold
                                    dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark " placeholder="Your message..." required></textarea>
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

export default Contact;