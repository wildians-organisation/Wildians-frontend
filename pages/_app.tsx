import React from "react";
import App from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "../components/SnackbarService/SnackbarService";
import { useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/footer.css";
import "../components/NFTCard/NFTCard.css";
import * as config from "../config/config";

declare global {
    interface Window {
        clarity: any;
    }
}

const ClarityScript = () => {
    useEffect(() => {
        const clarityId = config.CLARITY_APPID;

        window.clarity =
            window.clarity ||
            function () {
                (window.clarity.q = window.clarity.q || []).push(arguments);
            };

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${clarityId}`;

        const scriptTag = document.getElementsByTagName("script")[0];
        if (scriptTag.parentNode) {
            scriptTag.parentNode.insertBefore(script, scriptTag);
        }
    }, []);

    return null;
};

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>Wildians</title>
                </Head>
                <ClarityScript />
                <SnackbarProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SnackbarProvider>
            </React.Fragment>
        );
    }

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
}
