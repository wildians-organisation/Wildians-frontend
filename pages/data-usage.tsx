import React from "react";
import Head from "next/head";
import HeaderVitrine from "../components/Header/HeaderVitrine";
import fs from "fs";
import path from "path";

interface DataUsageProps {
    dataUsageContent: string;
}

export default function DataUsage({ dataUsageContent }: DataUsageProps) {
    return (
        <>
            <Head>
                <title>Data Usage Policy - Wildians</title>
                <meta
                    name="description"
                    content="Data Usage Policy for Wildians - Learn how we use cookies and tracking technologies on our website."
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Data Usage Policy - Wildians" />
                <meta
                    property="og:description"
                    content="Data Usage Policy for Wildians - Learn how we use cookies and tracking technologies on our website."
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://wildians.org/data-usage"
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
                    {/* Data usage content container */}
                    <div className="content-container">
                        <div
                            dangerouslySetInnerHTML={{ __html: dataUsageContent }}
                            className="data-usage-content"
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

                /* Ensure the data usage content has proper styling */
                .data-usage-content {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
                        Roboto, "Helvetica Neue", Arial, sans-serif;
                    color: #333;
                }

                /* Style headings within the data usage policy */
                .data-usage-content h1,
                .data-usage-content h2,
                .data-usage-content h3,
                .data-usage-content h4,
                .data-usage-content h5,
                .data-usage-content h6 {
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1f2937;
                }

                .data-usage-content h1 {
                    font-size: 2rem;
                    font-weight: 700;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 0.5rem;
                }

                .data-usage-content p {
                    margin-bottom: 1rem;
                    text-align: justify;
                }

                .data-usage-content a {
                    color: #3b82f6;
                    text-decoration: underline;
                }

                .data-usage-content a:hover {
                    color: #1d4ed8;
                }

                /* Handle tables if any */
                .data-usage-content table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 1rem 0;
                }

                .data-usage-content th,
                .data-usage-content td {
                    border: 1px solid #e5e7eb;
                    padding: 0.75rem;
                    text-align: left;
                }

                .data-usage-content th {
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
            "data-usage.html"
        );
        const dataUsageContent = fs.readFileSync(filePath, "utf8");

        return {
            props: {
                dataUsageContent
            }
        };
    } catch (error) {
        console.error("Error reading data usage HTML file:", error);
        return {
            props: {
                dataUsageContent:
                    "<div style='text-align: center; padding: 2rem;'><h1>Data Usage Policy</h1><p>Data usage policy content is temporarily unavailable. Please contact us at contact@wildians.org for more information.</p></div>"
            }
        };
    }
}
