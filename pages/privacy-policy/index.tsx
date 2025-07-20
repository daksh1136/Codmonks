import Head from "next/head";

const PrivacyPolicy = () => {
    return (
        <>
        <Head>
            <title>Privacy Policy | CodMonks</title>
            <meta name="description" content="Welcome to the home page" />
        </Head>
        <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-6">
                At CodMonks, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website.
            </p>

            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information that you voluntarily provide to us including your name, email address, and any other details submitted via contact forms or newsletter sign-ups. We also collect non-personal data like browser type, IP address, and usage patterns using cookies and analytics tools.
            </p>

            <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc ml-6 mb-4 space-y-2">
                <li>To respond to your inquiries and provide customer support.</li>
                <li>To send updates, newsletters, and marketing content (with your consent).</li>
                <li>To improve our website performance and user experience.</li>
                <li>To ensure compliance with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-3">3. Sharing Your Information</h2>
            <p className="mb-4">
                We do not sell or share your personal data with third parties, except when required by law or when necessary to deliver our services (e.g., with email providers or analytics platforms).
            </p>

            <h2 className="text-2xl font-semibold mb-3">4. Cookies & Tracking</h2>
            <p className="mb-4">
                We use cookies to enhance your browsing experience and track website traffic. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p className="mb-4">
                We implement industry-standard measures to protect your information. However, no transmission over the internet is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p className="mb-4">
                You may request access to, modification, or deletion of your personal information by contacting us directly.
            </p>

            <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy periodically. Changes will be reflected on this page with a revised date.
            </p>

            <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
            <p>
                If you have any questions or concerns about this policy, please contact us at{' '}
                <a href="mailto:privacy@codmonks.com" className="text-primary underline">
                    privacy@codmonks.com
                </a>.
            </p>
        </div>
        </>
    );
};

export default PrivacyPolicy;
