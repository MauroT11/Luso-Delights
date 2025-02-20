import Pageheader from '@/components/Pageheader';

export default function Page() {
    return (
        <div className="flex flex-col gap-8 pt-24 pb-8 justify-center items-center">
                            <div className="flex flex-col gap-8 items-center min-w-full">
                                <Pageheader 
                                header={'Privacy Policy'}
                                description={'Welcome to our Privacy Policy page. Your privacy is critically important to us.'}
                                img={"url('../images/banners/lega.jpg')"} 
                                padding={12}
                                />
                            </div>
            <div className="flex text-lg flex-col gap-8 max-w-[60vw]">

                <div>
                    <h2 className="font-bold">Introduction</h2>
                    <p>Luso Delights ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website ("Site"). By using our Site, you agree to the terms of this Privacy Policy.</p>
                </div>

                <div>
                    <h2 className="font-bold">1. Information We Collect</h2>
                    <p>We may collect the following types of information from you:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you provide when making a reservation or contacting us.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our Site, including IP address, browser type, and pages visited.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold">2. How We Use Your Information</h2>
                    <p>We use the information we collect for the following purposes:</p>
                    <ul className="list-disc list-inside">
                        <li>To provide and improve our services.</li>
                        <li>To process reservations and orders.</li>
                        <li>To communicate with you about your reservations, orders, and other inquiries.</li>
                        <li>To send you promotional materials and updates, with your consent.</li>
                        <li>To analyze and monitor the usage of our Site.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold">3. Sharing Your Information</h2>
                    <p>We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the following cases:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist us in operating our Site and conducting our business.</li>
                        <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or to protect our rights, property, or safety.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold">4. Cookies and Tracking Technologies</h2>
                    <p>We use cookies and other tracking technologies to enhance your experience on our Site. Cookies are small data files stored on your device that help us recognize you and remember your preferences. You can disable cookies through your browser settings, but this may affect your ability to use certain features of our Site.</p>
                </div>

                <div>
                    <h2 className="font-bold">5. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                </div>

                <div>
                    <h2 className="font-bold">6. Your Rights</h2>
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
                        <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your personal information.</li>
                        <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain exceptions.</li>
                        <li><strong>Objection:</strong> You can object to the processing of your personal information in certain circumstances.</li>
                    </ul>
                </div>

                <div>
                <h2 className="font-bold">7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Site after any changes indicates your acceptance of the new terms.</p>
                </div>

                <div>
                    <h2 className="font-bold">8. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a className="text-primary hover:text-accent" href="mailto:legal@lusodelights.com">legal@lusodelights.com</a>.</p>
                </div>
            </div>
        </div>
    );
}