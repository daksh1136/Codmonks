import React from "react";
import { useState } from "react";
import ContactForm from "../../Components/ContactForm/ContactForm";

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

            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder=""
                                    maxLength={10}
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            <div className="col-span-2 text-right">
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-600 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                                >
                                    Send Message
                                </button>
                            </div>
                            {successMsg && (
                                <div className="col-span-2 mt-4 text-green-600 font-semibold text-center">
                                    {successMsg}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;