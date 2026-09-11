import ContactForms from "@/components/ContactFormNew";
import { SEO, breadcrumbSchema } from "@/components/SEO";
import React from "react";

const Contact: React.FC = () => {
    return (
        <>
            <SEO title="Contact CodMonks | Discuss Your Project" description="Contact CodMonks to discuss your web, mobile, CRM, design, or digital marketing project." path="/contact" jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
            <section className="bg-blur bg-blur-style-9 text-white py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
                    <p className="text-lg"><strong>Ready to transform your vision into reality? Let’s talk!</strong></p>
                </div>
            </section>
            {/* <ContactForm /> */}
            <ContactForms />
        </>
    );
};

export default Contact;
