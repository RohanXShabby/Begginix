import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const CookiePolicy = () => {
    return (
        <>
            <Helmet>
                <title>Cookie Policy - Beginnix</title>
                <meta name="description" content="Learn about how Beginnix uses cookies and similar technologies to enhance your browsing experience." />
                <meta property="og:title" content="Cookie Policy - Beginnix" />
                <meta property="og:description" content="Learn about how Beginnix uses cookies and similar technologies to enhance your browsing experience." />
                <meta property="og:type" content="website" />
            </Helmet>
            <motion.div
                className="min-h-screen bg-background pt-24"
                variants={staggerContainer(0.08, 0.1)}
                initial="hidden"
                animate="show"
            >
                <div className="container mx-auto px-4 py-20 max-w-4xl">
                    {/* Back Button */}
                    <motion.div variants={fadeInUp} className="mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-crimson transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div className="text-center mb-12" variants={fadeInUp}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-barlow">Cookie Policy</h1>
                        <p className="text-muted-foreground">
                            Last updated: January 2025
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="space-y-8" variants={fadeInUp}>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                                    They are widely used to make websites work more efficiently and to provide information to website owners.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Beginnix uses cookies for the following purposes:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>To ensure our website functions properly</li>
                                    <li>To remember your preferences and settings</li>
                                    <li>To analyze how visitors use our website</li>
                                    <li>To improve our website's performance and user experience</li>
                                    <li>To provide personalized content and recommendations</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                            <div className="prose prose-gray max-w-none">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies are necessary for the website to function properly. They enable basic functions like
                                            page navigation, access to secure areas, and remembering your preferences. The website cannot
                                            function properly without these cookies.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies help us understand how visitors interact with our website by collecting and
                                            reporting information anonymously. This helps us improve our website's performance and user experience.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies enable enhanced functionality and personalization, such as remembering your
                                            language preference or region. They may be set by us or by third-party providers.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                                        <p className="text-muted-foreground">
                                            These cookies are used to track visitors across websites to display relevant and engaging
                                            advertisements. They help us measure the effectiveness of our marketing campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    We may use third-party services that set their own cookies, including:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Google Analytics for website analytics</li>
                                    <li>Social media platforms for sharing functionality</li>
                                    <li>Content delivery networks for improved performance</li>
                                    <li>Marketing platforms for advertising and retargeting</li>
                                </ul>
                                <p className="text-muted-foreground">
                                    These third parties have their own privacy policies and cookie practices. We recommend reviewing
                                    their policies for more information.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Managing Your Cookie Preferences</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    You can control and manage cookies in several ways:
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Browser Settings</h3>
                                        <p className="text-muted-foreground">
                                            Most web browsers allow you to control cookies through their settings. You can set your
                                            browser to refuse cookies or delete certain cookies. However, disabling cookies may affect
                                            the functionality of our website.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
                                        <p className="text-muted-foreground">
                                            When you first visit our website, you may see a cookie consent banner. You can choose to
                                            accept or decline non-essential cookies. You can change your preferences at any time.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Opt-Out Links</h3>
                                        <p className="text-muted-foreground">
                                            For specific third-party services, you can opt out directly through their websites:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                                            <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-crimson hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                                            <li>Facebook: <a href="https://www.facebook.com/settings?tab=ads" className="text-crimson hover:underline" target="_blank" rel="noopener noreferrer">Facebook Ad Preferences</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Cookie Retention</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    The length of time cookies remain on your device depends on their type:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                                    <li>Session cookies are deleted when you close your browser</li>
                                    <li>Persistent cookies remain for a set period or until you delete them</li>
                                    <li>Some cookies may be refreshed automatically to extend their lifespan</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices or for
                                    other operational, legal, or regulatory reasons. We will notify you of any material changes by
                                    posting the updated policy on our website.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    If you have any questions about our use of cookies, please contact us:
                                </p>
                                <div className="text-muted-foreground space-y-2">
                                    <p>Email: <a href="mailto:rohan20ctbisht@gmail.com" className="text-crimson hover:underline">rohan20ctbisht@gmail.com</a></p>
                                    <p>Phone: <a href="tel:+918449998879" className="text-crimson hover:underline">+91 8449998879</a></p>
                                    <p>Location: Dehradun, Uttarakhand, India</p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};
