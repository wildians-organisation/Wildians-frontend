import React from "react";
import App from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "../components/SnackbarService/SnackbarService";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/footer.css";
import "../components/NFTCard/NFTCard.css";
import * as config from "../config/config";

export default class MyApp extends App {
    componentDidMount() {
        if (super.componentDidMount) {
            super.componentDidMount();
        }
        this.loadClarityAndAblaScripts();
    }

    loadClarityAndAblaScripts() {
        const clarityScript = document.createElement("script");
        clarityScript.src = `https://www.clarity.ms/tag/${config.CLARITY_APPID}`;
        document.getElementsByTagName("head")[0].appendChild(clarityScript);

        const ablaScript = document.createElement("script");
        ablaScript.dataset.cache = "true";
        ablaScript.dataset.websiteId = "b25f950c-8e53-400e-afef-df879dabda06";
        ablaScript.src = "https://s.abla.io/abla.js";
        document.getElementsByTagName("head")[0].appendChild(ablaScript);
    }

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
