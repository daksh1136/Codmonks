import Head from "next/head";

const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms and Conditions | CodMonks</title>
                <meta name="description" content="Welcome to the home page" />
            </Head>
            <div className="max-w-4xl mx-auto px-4 py-16 text-gray-800">
                <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

                <p className="mb-6">
                    Welcome to CodMonks! By accessing and using our website, you agree to the following terms and conditions. Please read them carefully.
                </p>

                <h2 className="text-2xl font-semibold mb-3">1. Use of Website</h2>
                <p className="mb-4">
                    You agree to use our website for lawful purposes only. You must not use it in any way that breaches any applicable local, national, or international law.
                </p>

                <h2 className="text-2xl font-semibold mb-3">2. Intellectual Property</h2>
                <p className="mb-4">
                    All content on this site, including text, graphics, logos, and code, is the property of CodMonks and is protected by intellectual property laws. You may not reproduce, distribute, or use any material without prior written permission.
                </p>

                <h2 className="text-2xl font-semibold mb-3">3. Limitation of Liability</h2>
                <p className="mb-4">
                    CodMonks shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the website.
                </p>

                <h2 className="text-2xl font-semibold mb-3">4. Third-Party Links</h2>
                <p className="mb-4">
                    Our website may contain links to external websites. We are not responsible for the content, privacy policies, or practices of any third-party websites.
                </p>

                <h2 className="text-2xl font-semibold mb-3">5. User Content</h2>
                <p className="mb-4">
                    By submitting content (e.g., feedback, comments), you grant CodMonks a non-exclusive, royalty-free, perpetual license to use, reproduce, and display such content.
                </p>

                <h2 className="text-2xl font-semibold mb-3">6. Changes to Terms</h2>
                <p className="mb-4">
                    We may revise these terms at any time without prior notice. By continuing to use the site, you agree to the updated terms.
                </p>

                <h2 className="text-2xl font-semibold mb-3">7. Governing Law</h2>
                <p className="mb-4">
                    These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.
                </p>

                <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
                <p>
                    If you have any questions about these Terms, please contact us at{' '}
                    <a href="mailto:sales@codmonks.com" className="text-primary underline">
                        sales@codmonks.com
                    </a>.
                </p>
            </div>
        </>
    );
};

export default TermsAndConditions;
