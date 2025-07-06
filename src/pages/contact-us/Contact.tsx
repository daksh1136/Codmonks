import React from "react";
import { useState } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    phone?: string;
};


const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [successMsg, setSuccessMsg] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";
        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setSuccessMsg("Your details has been sent successfully!");
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setTimeout(() => {
            setSuccessMsg("");
        }, 5000);
    };

    return (
        <>
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