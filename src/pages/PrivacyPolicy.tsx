import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - Beginnix</title>
                <meta name="description" content="Read Beginnix's privacy policy to understand how we collect, use, and protect your personal information." />
                <meta property="og:title" content="Privacy Policy - Beginnix" />
                <meta property="og:description" content="Read Beginnix's privacy policy to understand how we collect, use, and protect your personal information." />
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-barlow">Privacy Policy</h1>
                        <p className="text-muted-foreground">
                            Last updated: January 2025
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="space-y-8" variants={fadeInUp}>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    We collect information you provide directly to us, such as when you:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Contact us through our website or email</li>
                                    <li>Request a quote or consultation</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Engage with our services</li>
                                </ul>
                                <p className="text-muted-foreground">
                                    This information may include your name, email address, phone number, company information,
                                    and any other details you choose to provide.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Provide, maintain, and improve our services</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                    <li>Send you technical notices, updates, and administrative messages</li>
                                    <li>Communicate with you about our services and promotional offers</li>
                                    <li>Monitor and analyze trends and usage</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>To trusted service providers who assist us in operating our website and conducting our business</li>
                                    <li>When required by law or to protect our rights and safety</li>
                                    <li>In connection with a merger, acquisition, or sale of assets</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    We implement appropriate security measures to protect your personal information against unauthorized access,
                                    alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic
                                    storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Our website may use cookies and similar tracking technologies to enhance your experience. You can control
                                    cookie settings through your browser preferences.
                                </p>
                                <p className="text-muted-foreground">
                                    For more detailed information about our use of cookies, please see our <Link to="/cookie-policy" className="text-crimson hover:underline">Cookie Policy</Link>.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    You have the right to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Access and update your personal information</li>
                                    <li>Request deletion of your personal information</li>
                                    <li>Opt-out of marketing communications</li>
                                    <li>Withdraw consent for data processing</li>
                                </ul>
                                <p className="text-muted-foreground">
                                    To exercise these rights, please contact us at <a href="mailto:rohan20ctbisht@gmail.com" className="text-crimson hover:underline">rohan20ctbisht@gmail.com</a>.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                                    Privacy Policy on this page and updating the "Last updated" date.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    If you have any questions about this Privacy Policy, please contact us:
                                </p>
                                <div className="text-muted-foreground space-y-2">
                                    <p>Email: <a href="mailto:rohan20ctbisht@gmail.com" className="text-crimson hover:underline">rohan20ctbisht@gmail.com</a></p>
                                    <p>Phone: <a href="tel:+917302287997" className="text-crimson hover:underline">+91 7302287997</a></p>
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
