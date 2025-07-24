import React from "react";
import App from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "../components/SnackbarService/SnackbarService";
import { useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";

const ClarityScript = () => {
    useEffect(() => {
        const clarityId = process.env.NEXT_PUBLIC_CLARITY_APPID;
        if (clarityId && typeof window !== "undefined" && !window.clarity) {
            (function (c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t = l.createElement(r) as HTMLScriptElement;
                t.async = true;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                if (y && y.parentNode) {
                    y.parentNode.insertBefore(t, y);
                }
            })(window, document, "clarity", "script", clarityId);
            console.log("Microsoft Clarity script loaded.");
        }
    }, []);

    return null;
};

declare global {
    interface Window {
        clarity?: any;
    }
}

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>Wildians</title>
                </Head>
                <SnackbarProvider>
                    <ClarityScript />
                    <Component {...pageProps} />
                </SnackbarProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;
