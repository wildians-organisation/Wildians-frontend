import React from "react";
import Head from "next/head";
import HeaderVitrine from "../components/Header/HeaderVitrine";
import fs from "fs";
import path from "path";

interface PrivacyPolicyProps {
    privacyContent: string;
}

export default function PrivacyPolicy({ privacyContent }: PrivacyPolicyProps) {
    return (
        <>
            <Head>
                <title>Privacy Policy - Wildians</title>
                <meta
                    name="description"
                    content="Privacy Policy for Wildians - Learn how we collect, use, and protect your personal information."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Privacy Policy - Wildians" />
                <meta
                    property="og:description"
                    content="Privacy Policy for Wildians - Learn how we collect, use, and protect your personal information."
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://wildians.org/privacy-policy"
                />
            </Head>

            {/* Full-screen background matching the brown color from BottomPartVitrine */}
            <div
                className="min-h-screen"
                style={{ backgroundColor: "#403831" }}
            >
                <HeaderVitrine />

                {/* Main content wrapper - follows CSS best practices */}
                <main className="wrapper">
                    {/* Privacy policy content container */}
                    <div className="content-container">
                        <div
                            dangerouslySetInnerHTML={{ __html: privacyContent }}
                            className="privacy-policy-content"
                        />
                    </div>
                </main>
            </div>

            <style jsx>{`
                /* Wrapper implementation following CSS best practices */
                .wrapper {
                    /* Use max-width instead of width for better responsiveness */
                    max-width: 90%;
                    /* Center horizontally using margin auto */
                    margin: 0 auto;
                    /* Add padding for edge cases when content approaches screen edges */
                    padding: 2rem 1rem;
                    /* Use box-sizing border-box for consistent sizing */
                    box-sizing: border-box;
                    /* Increased top padding for better spacing */
                    padding-top: 4rem;
                    padding-bottom: 4rem;
                }

                .content-container {
                    /* White background for the content */
                    background: white;
                    /* Subtle shadow for depth */
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    /* Rounded corners for modern look */
                    border-radius: 0.75rem;
                    /* Internal padding for content */
                    padding: 3rem;
                    /* Smooth transition for any hover effects */
                    transition: box-shadow 0.3s ease;
                    /* Ensure good readability */
                    line-height: 1.6;
                }

                .content-container:hover {
                    /* Subtle elevation on hover */
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                        0 4px 6px -2px rgba(0, 0, 0, 0.05);
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .wrapper {
                        max-width: 95%;
                        padding: 1rem 0.5rem;
                        padding-top: 2rem;
                        padding-bottom: 2rem;
                    }

                    .content-container {
                        padding: 1.5rem;
                        border-radius: 0.5rem;
                    }
                }

                @media (max-width: 480px) {
                    .wrapper {
                        max-width: 98%;
                        padding: 0.5rem 0.25rem;
                        padding-top: 1.5rem;
                        padding-bottom: 1.5rem;
                    }

                    .content-container {
                        padding: 1rem;
                    }
                }

                /* Ensure the privacy policy content has proper styling */
                .privacy-policy-content {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, "Helvetica Neue", Arial, sans-serif;
                    color: #333;
                }

                /* Style headings within the privacy policy */
                .privacy-policy-content h1,
                .privacy-policy-content h2,
                .privacy-policy-content h3,
                .privacy-policy-content h4,
                .privacy-policy-content h5,
                .privacy-policy-content h6 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                }

                .privacy-policy-content h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 0.5rem;
                }

                .privacy-policy-content p {
                    margin-bottom: 1rem;
                    text-align: justify;
                }

                .privacy-policy-content a {
                    color: #3b82f6;
                    text-decoration: underline;
                }

                .privacy-policy-content a:hover {
                    color: #1d4ed8;
                }

                /* Handle tables if any */
                .privacy-policy-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1rem 0;
                }

                .privacy-policy-content th,
                .privacy-policy-content td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem;
                    text-align: left;
                }

                .privacy-policy-content th {
                    background-color: #f9fafb;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

// This function gets called at build time on server-side
export async function getStaticProps() {
    try {
        const filePath = path.join(
            process.cwd(),
            "pages",
            "privacy-policy.html"
        );
        const privacyContent = fs.readFileSync(filePath, "utf8");

        return {
            props: {
                privacyContent
            }
        };
    } catch (error) {
        console.error("Error reading privacy policy HTML file:", error);
        return {
            props: {
                privacyContent:
                    "<p>Privacy policy content is temporarily unavailable. Please contact us at administration@wildians.org for more information.</p>"
            }
        };
    }
}
