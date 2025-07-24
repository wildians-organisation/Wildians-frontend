import React from "react";
import Head from "next/head";
import HeaderVitrine from "../components/Header/HeaderVitrine";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>Terms of Service - Wildians</title>
                <meta
                    name="description"
                    content="Terms of Service for Wildians - Learn about the terms and conditions for using our website and services."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="Terms of Service - Wildians"
                />
                <meta
                    property="og:description"
                    content="Terms of Service for Wildians - Learn about the terms and conditions for using our website and services."
                />
                <meta property="og:type" content="website" />
                <link
                    rel="canonical"
                    href="https://yourwebsite.com/terms-of-service"
                />
            </Head>

            <div style={{ backgroundColor: "#223734", minHeight: "100vh" }}>
                <HeaderVitrine />

                <div className="container mx-auto px-4 py-8 max-w-4xl">
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                        {/* Terms of Service Styles */}
                        <style jsx>{`
                            [data-custom-class="body"],
                            [data-custom-class="body"] * {
                                background: transparent !important;
                            }
                            [data-custom-class="title"],
                            [data-custom-class="title"] * {
                                font-family: Arial !important;
                                font-size: 26px !important;
                                color: #000000 !important;
                            }
                            [data-custom-class="subtitle"],
                            [data-custom-class="subtitle"] * {
                                font-family: Arial !important;
                                color: #595959 !important;
                                font-size: 14px !important;
                            }
                            [data-custom-class="heading_1"],
                            [data-custom-class="heading_1"] * {
                                font-family: Arial !important;
                                font-size: 19px !important;
                                color: #000000 !important;
                            }
                            [data-custom-class="heading_2"],
                            [data-custom-class="heading_2"] * {
                                font-family: Arial !important;
                                font-size: 17px !important;
                                color: #000000 !important;
                            }
                            [data-custom-class="body_text"],
                            [data-custom-class="body_text"] * {
                                color: #595959 !important;
                                font-size: 14px !important;
                                font-family: Arial !important;
                            }
                            [data-custom-class="link"],
                            [data-custom-class="link"] * {
                                color: #3030f1 !important;
                                font-size: 14px !important;
                                font-family: Arial !important;
                                word-break: break-word !important;
                            }
                            .terms-content {
                                line-height: 1.6;
                            }
                            .terms-content h1 {
                                margin-bottom: 1.5rem;
                                margin-top: 2rem;
                            }
                            .terms-content h2 {
                                margin-bottom: 1rem;
                                margin-top: 1.5rem;
                            }
                            .terms-content p {
                                margin-bottom: 1rem;
                            }
                            .back-link {
                                display: inline-flex;
                                align-items: center;
                                color: #223734;
                                text-decoration: none;
                                font-weight: 600;
                                margin-bottom: 2rem;
                                transition: color 0.3s ease;
                            }
                            .back-link:hover {
                                color: #36544f;
                            }
                            .back-link svg {
                                margin-right: 0.5rem;
                            }
                        `}</style>

                        {/* Back to Home Link */}
                        <a href="/" className="back-link">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M19 12H5M12 19L5 12L12 5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Back to Home
                        </a>

                        {/* Terms of Service Content */}
                        <div className="terms-content" data-custom-class="body">
                            {/* Logo */}
                            <div className="text-center mb-8">
                                <span
                                    style={{
                                        display: "block",
                                        margin: "0 auto 3.125rem",
                                        width: "11.125rem",
                                        height: "2.375rem",
                                        backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiCg==")`
                                    }}
                                />
                            </div>

                            {/* Title */}
                            <h1
                                data-custom-class="title"
                                style={{ textAlign: "center" }}
                            >
                                Terms of Service
                            </h1>

                            <div
                                data-custom-class="subtitle"
                                style={{
                                    textAlign: "center",
                                    marginBottom: "2rem"
                                }}
                            >
                                Last updated: {new Date().toLocaleDateString()}
                            </div>

                            {/* Introduction */}
                            <div data-custom-class="body_text">
                                <p>
                                    Welcome to Wildians. These Terms of Service
                                    ("Terms") govern your use of our website and
                                    services. By accessing or using our service,
                                    you agree to be bound by these Terms.
                                </p>
                                <p>
                                    Please read these Terms carefully before
                                    using our Service. If you do not agree with
                                    any part of these terms, then you may not
                                    access the Service.
                                </p>
                            </div>

                            {/* Placeholder for full content */}
                            <div id="terms-content">
                                <h2 data-custom-class="heading_1">
                                    Acceptance of Terms
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        By accessing and using this website, you
                                        accept and agree to be bound by the
                                        terms and provision of this agreement.
                                        If you do not agree to abide by the
                                        above, please do not use this service.
                                    </p>
                                </div>

                                <h2 data-custom-class="heading_1">
                                    Use License
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        Permission is granted to temporarily
                                        download one copy of the materials on
                                        Wildians' website for personal,
                                        non-commercial transitory viewing only.
                                    </p>
                                    <p>
                                        This license shall automatically
                                        terminate if you violate any of these
                                        restrictions.
                                    </p>
                                </div>

                                <h2 data-custom-class="heading_1">
                                    Disclaimer
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        The materials on Wildians' website are
                                        provided on an 'as is' basis. Wildians
                                        makes no warranties, expressed or
                                        implied, and hereby disclaims and
                                        negates all other warranties including
                                        without limitation, implied warranties
                                        or conditions of merchantability,
                                        fitness for a particular purpose, or
                                        non-infringement of intellectual
                                        property or other violation of rights.
                                    </p>
                                </div>

                                <h2 data-custom-class="heading_1">
                                    Limitations
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        In no event shall Wildians or its
                                        suppliers be liable for any damages
                                        (including, without limitation, damages
                                        for loss of data or profit, or due to
                                        business interruption) arising out of
                                        the use or inability to use the
                                        materials on Wildians' website.
                                    </p>
                                </div>

                                <h2 data-custom-class="heading_1">
                                    Accuracy of Materials
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        The materials appearing on Wildians'
                                        website could include technical,
                                        typographical, or photographic errors.
                                        Wildians does not warrant that any of
                                        the materials on its website are
                                        accurate, complete, or current.
                                    </p>
                                </div>

                                <h2 data-custom-class="heading_1">
                                    Contact Information
                                </h2>
                                <div data-custom-class="body_text">
                                    <p>
                                        If you have any questions about these
                                        Terms of Service, please contact us at:
                                    </p>
                                    <p>
                                        <strong>Wildians</strong>
                                        <br />
                                        Email:{" "}
                                        <a
                                            href="mailto:contact@wildians.com"
                                            data-custom-class="link"
                                        >
                                            contact@wildians.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer spacing */}
                <div style={{ height: "4rem" }}></div>
            </div>
        </>
    );
}
