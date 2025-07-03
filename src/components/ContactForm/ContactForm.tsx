import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData();
    formData.append("name", e.target.name.value);
    formData.append("email", e.target.email.value);
    formData.append("phone", e.target.phone.value);
    formData.append("message", e.target.message.value);


    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxgDQW8pTAk3R_jqh6xJCsDob2bsuDg0uQy7dDG2_F6vm8__inXFgwQi9xEI-__NS8/exec", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.result === "success") {
        setStatus("Message Sent!");
        e.target.reset();
      } else {
        setStatus("Something went wrong.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="phone" placeholder="Phone Number" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
        <p>{status}</p>
    </form>
  );
}
