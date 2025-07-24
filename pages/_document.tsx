import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="shortcut icon" href="/img/brand/favicon.ico" />
                    <link
                        rel="apple-touch-icon"
                        sizes="76x76"
                        href="/img/brand/apple-icon.png"
                    />
                    {/* Termly Consent Management Platform */}
                    <script
                        type="text/javascript"
                        src="https://app.termly.io/resource-blocker/3b3cb168-99e4-4e4f-8bb5-68119d7cabdc?autoBlock=on"
                        charSet="utf-8"
                    ></script>
                </Head>
                <body className="text-blueGray-700 antialiased">
                    <div id="page-transition"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
