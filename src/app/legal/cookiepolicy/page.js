import Pageheader from '@/components/Pageheader';

export default function Page() {
    return (
        <div className="flex flex-col gap-8 pt-24 pb-8 justify-center items-center">
            <div className="flex flex-col gap-8 items-center min-w-full">
                <Pageheader 
                header={'Cookie Policy'}
                description={'This is the Cookie Policy for Sabor Delights, accessible from our website.'}
                img={"url('images/banners/menuBanner.jpg')"} 
                padding={12}
                />
            </div>
            <div className="flex text-lg flex-col gap-8 max-w-[60vw]">
                <div>
                    <h2 className="font-bold">Introduction</h2>
                    <p>Luso Delights ("we," "our," "us") uses cookies and other similar technologies on our website ("Site") to enhance your experience and collect information about your usage of our Site. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences.</p>
                </div>

                <div>
                    <h2 className="font-bold">1. What Are Cookies?</h2>
                    <p>Cookies are small data files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the site owners. Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device until they expire or are deleted).</p>
                </div>

                <div>
                    <h2 className="font-bold">2. How We Use Cookies</h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc list-inside">
                        <li><strong>Essential Cookies:</strong> These cookies are necessary for the operation of our Site and enable you to navigate and use its features.</li>
                        <li><strong>Performance Cookies:</strong> These cookies collect information about how visitors use our Site, such as which pages are visited most often. This helps us improve the performance of our Site.</li>
                        <li><strong>Functionality Cookies:</strong> These cookies allow our Site to remember your preferences and provide enhanced features, such as personalized content.</li>
                        <li><strong>Targeting Cookies:</strong> These cookies are used to deliver advertisements that are relevant to you and your interests.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="font-bold">3. Third-Party Cookies</h2>
                    <p>We may also use third-party cookies provided by trusted partners. These cookies may track your browsing activity on other websites and build a profile of your interests. This information is used to make our Site and the advertising displayed on it more relevant to you.</p>
                </div>

                <div>
                    <h2 className="font-bold">4. Managing Your Cookie Preferences</h2>
                    <p>You can manage your cookie preferences through your browser settings. Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but please note that this may affect your ability to use certain features of our Site. For more information on how to manage cookies, please visit your browser's help section.</p>
                </div>

                <div>
                    <h2 className="font-bold">5. Changes to This Cookie Policy</h2>
                    <p>We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our Site after any changes indicates your acceptance of the new terms.</p>
                </div>

                <div>
                    <h2 className="font-bold">6. Contact Us</h2>
                    <p>If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at <a className="text-primary hover:text-accent" href="mailto:legal@lusodelights.com">legal@lusodelights.com</a>.</p>
                </div>
            </div>
        </div>
    );
}