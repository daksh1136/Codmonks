const ContactForm = () => {
  return (
    <form
      action="https://formsubmit.co/mahesh@codmonks.com"
      method="POST"
    >
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      
      {/* Optional settings */}
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Contact Form Submission" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://www.codmonks.com/thank-you" />

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;