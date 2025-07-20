import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import React from "react";

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact Us | CodMonks</title>
                <meta name="description" content="Welcome to the home page" />
            </Head>
            <section className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
                    <p className="text-lg opacity-90">Ready to transform your vision into reality? Let’s talk!</p>
                </div>
            </section>
            <ContactForm />
        </>
    );
};

export default Contact;