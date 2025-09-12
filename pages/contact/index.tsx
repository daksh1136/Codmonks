import ContactForm from "@/components/ContactForm";
import ContactForms from "@/components/ContactFormNew";
import Head from "next/head";
import React from "react";

const Contact: React.FC = () => {
    return (
        <>
            <Head>
                <title>Contact Us | CodMonks</title>
                <meta name="description" content="Welcome to the home page" />
            </Head>
            <section className="bg-blur bg-blur-style-9 text-white py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-lg">Ready to transform your vision into reality? Let’s talk!</p>
                </div>
            </section>
            {/* <ContactForm /> */}
            <ContactForms />
        </>
    );
};

export default Contact;