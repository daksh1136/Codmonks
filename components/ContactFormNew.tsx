import { useState } from 'react';
import PageLoader from './PageLoader/PageLoader';

export default function ContactForms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');

  const [status, setStatus] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setIsLoading(true);
    setStatus("Sending...");
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, message }),
    });

    const data = await res.json();
    setIsLoading(false);

    if (res.ok) {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setStatus("Message has been sent successfully...");
    }
    else {
        setStatus("Something went wrong...");
    }
  }

  return (
    <section className="py-16 bg-white">
            { isLoading && <PageLoader /> }
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white shadow-lg rounded-2xl p-8">
                    { (status) ? <h3 className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md text-center mb-3">{status}</h3> : '' }
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        <div className="col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                                type="text"
                                id="name" // Added ID for label association
                                name="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Your Name"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                                type="tel"
                                id="phone" // Added ID for label association
                                name="phone"
                                placeholder=""
                                onChange={e => setPhone(e.target.value)}
                                maxLength={10}
                                className="w-full border border-gray-300 p-3 rounded-xl focus:ring-indigo-500 focus:border-indigo-500"
                                required
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="messageText" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={e => setMessage(e.target.value)}
                                required
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
