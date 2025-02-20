import Pageheader from '@/components/Pageheader';


export default function Page() {
    return (
        <div className="flex flex-col gap-8 pt-24 pb-8 justify-center items-center">
                    <div className="flex flex-col gap-8 items-center min-w-full">
                        <Pageheader 
                        header={'Terms of Use'}
                        description={'Welcome to Sabor Delights Terms of Use. Please read these terms of use carefully before using our website.'}
                        img={"url('../images/banners/legal.jpg')"} 
                        padding={12}
                        />
                    </div>
            <div className="flex text-lg flex-col gap-8 max-w-[60vw]">

                <div>
                    <h2 className="font-bold">Introduction</h2>
                    <p>Welcome to the Luso Delights website (&quot;Site&quot;). By accessing or using this Site, you agree to comply with and be bound by the following terms and conditions ("Terms of Use"). Please read these Terms of Use carefully before using our Site.</p>
                </div>

                <div>
                    <h2 className="font-bold">1. Acceptance of Terms</h2>
                    <p>By accessing and using this Site, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our Site.</p>
                </div>
                <div>
                    <h2 className="font-bold">2. Use of the Site</h2>
                    <p>You agree to use the Site only for lawful purposes. You must not use the Site in any way that causes, or may cause, damage to the Site or impairment of the availability or accessibility of the Site.</p>
                </div>

                <div>
                    <h2 className="font-bold">3. Intellectual Property</h2>
                    <p>All content, including but not limited to text, graphics, logos, images, and software, on this Site is the property of Luso Delights or its content suppliers and is protected by applicable intellectual property laws. Unauthorized use of any content on this Site may violate copyright, trademark, and other laws.</p>
                </div>

                <div>
                    <h2 className="font-bold">4. User Content</h2>
                    <p>By submitting any content to our Site, including reviews, comments, or other materials, you grant Luso Delights a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, adapt, publish, and display such content in any media. You also represent and warrant that you own or otherwise control all the rights to the content you submit.</p>
                </div>

                <div>
                    <h2 className="font-bold">5. Privacy</h2>
                    <p>Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>
                </div>

                <div>
                    <h2 className="font-bold">6. Links to Third-Party Websites</h2>
                    <p>This Site may contain links to third-party websites. Luso Delights is not responsible for the content or practices of any linked third-party websites, and such links do not imply an endorsement by Luso Delights.</p>
                </div>

                <div>
                    <h2 className="font-bold">7. Limitation of Liability</h2>
                    <p>Luso Delights shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Site or any content, services, or products obtained through the Site.</p>
                </div>

                <div>
                    <h2 className="font-bold">8. Changes to Terms of Use</h2>
                    <p>Luso Delights reserves the right to modify these Terms of Use at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Use.</p>
                </div>

                <div>
                    <h2 className="font-bold">9. Governing Law</h2>
                    <p>These Terms of Use are governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from or relating to these Terms of Use shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.</p>
                </div>

                <div>
                    <h2 className="font-bold">10. Contact Information</h2>
                    <p>If you have any questions or concerns about these Terms of Use, please contact us at <a className="text-primary hover:text-accent" href="mailto:legal@lusodelights.com">legal@lusodelights.com</a>.</p>
                </div>
            </div>
        </div>
    );
}