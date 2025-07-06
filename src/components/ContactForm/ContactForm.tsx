import { useState } from "react";
import PageLoader from "../PageLoader/PageLoader";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("message", e.target.message.value);


    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzcvrEJAj98eJ2k9FAyfZBhLpSLMdZ8ivedZjU8mdk4FKqwRjI2TRzMwIa2BexAM92-/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message Sent!");
        setIsLoading(false);
        e.target.reset();
      } else {
        setStatus("Something went wrong.");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Error sending message.");
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
        { isLoading && <PageLoader /> }
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <h3 className="text-success">{status}</h3>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder=""
                            maxLength={10}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"

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
                </form>
            </div>
        </div>
    </section>
  );
}
