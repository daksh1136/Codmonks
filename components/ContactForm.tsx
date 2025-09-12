import { useState } from "react";
import PageLoader from "./PageLoader/PageLoader";
import React from 'react'; // <--- ADD THIS LINE: Import React if you haven't already
                           //      This is necessary for React.FormEvent

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Correctly type 'e' as a React.FormEvent
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsLoading(true);

    // To access the form elements by name, you need to cast e.target to HTMLFormElement
    const form = e.target as HTMLFormElement; // Cast e.target to HTMLFormElement

    const formData = new FormData();
    formData.append("name", (form.elements.namedItem("name") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("email") as HTMLInputElement).value);
    formData.append("phone", (form.elements.namedItem("phone") as HTMLInputElement).value);
    formData.append("message", (form.elements.namedItem("message") as HTMLTextAreaElement).value);


    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzcvrEJAj98eJ2k9FAyfZBhLpSLMdZ8ivedZjU8mdk4FKqwRjI2TRzMwIa2BexAM92-/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message Sent!");
        setIsLoading(false);
        form.reset(); // Use the 'form' variable for reset
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
                { (status) ? <h3 className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md text-center mb-3">{status}</h3> : '' }
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    <div className="col-span-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            id="fullName" // Added ID for label association
                            name="name"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="emailAddress" // Added ID for label association
                            name="email"
                            required
                            placeholder="you@example.com"
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber" // Added ID for label association
                            name="phone"
                            placeholder=""
                            maxLength={10}
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="messageText" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            id="messageText" // Added ID for label association
                            name="message"
                            placeholder="Tell us about your project..."
                            className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div className="col-span-2 text-right">
                      <button type="submit" className="button-pri px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                        Send Message
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
}