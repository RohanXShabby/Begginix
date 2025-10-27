import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const TermsOfService = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service - Beginnix</title>
                <meta name="description" content="Read Beginnix's terms of service to understand the terms and conditions for using our services." />
                <meta property="og:title" content="Terms of Service - Beginnix" />
                <meta property="og:description" content="Read Beginnix's terms of service to understand the terms and conditions for using our services." />
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-barlow">Terms of Service</h1>
                        <p className="text-muted-foreground">
                            Last updated: January 2025
                        </p>
                    </motion.div>

                    {/* Content */}
                    <motion.div className="space-y-8" variants={fadeInUp}>
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    By accessing and using Beginnix's services, you accept and agree to be bound by the terms and
                                    provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Beginnix provides digital services including but not limited to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Brand identity and logo design</li>
                                    <li>Website design and development</li>
                                    <li>UI/UX design services</li>
                                    <li>Digital marketing and SEO</li>
                                    <li>Creative design and content creation</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    As a client, you agree to:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Provide accurate and complete information</li>
                                    <li>Respond to requests for feedback and approval in a timely manner</li>
                                    <li>Make payments according to the agreed schedule</li>
                                    <li>Respect intellectual property rights</li>
                                    <li>Use our services in compliance with applicable laws</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Payment terms will be specified in individual project agreements. Generally:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Projects require a deposit before work begins</li>
                                    <li>Final payment is due upon project completion</li>
                                    <li>Late payments may incur additional charges</li>
                                    <li>All prices are exclusive of applicable taxes</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Intellectual property rights are handled as follows:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Client retains ownership of their existing intellectual property</li>
                                    <li>Beginnix retains ownership of pre-existing work and methodologies</li>
                                    <li>Upon full payment, client receives rights to commissioned work</li>
                                    <li>Beginnix may use completed work for portfolio and marketing purposes</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">6. Project Timeline and Revisions</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Project timelines and revision policies:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Timelines are estimates and may vary based on project complexity</li>
                                    <li>Client delays in feedback may extend project timelines</li>
                                    <li>Revisions are included as specified in project agreements</li>
                                    <li>Additional revisions may incur additional charges</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">7. Confidentiality</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    We respect the confidentiality of your business information and will not disclose any
                                    confidential information to third parties without your written consent, except as required by law.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    Beginnix's liability is limited to the amount paid for the specific service. We are not liable
                                    for any indirect, incidental, or consequential damages arising from the use of our services.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    Either party may terminate services with written notice. Upon termination:
                                </p>
                                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                                    <li>Client pays for work completed up to the termination date</li>
                                    <li>Beginnix delivers completed work to the client</li>
                                    <li>Confidentiality obligations continue to apply</li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground">
                                    These terms are governed by the laws of India. Any disputes will be resolved through
                                    arbitration in Dehradun, Uttarakhand.
                                </p>
                            </div>
                        </Card>

                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-muted-foreground mb-4">
                                    For questions about these Terms of Service, please contact us:
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
