import React from "react";
import App from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "../components/SnackbarService/SnackbarService";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/footer.css";
import "../components/NFTCard/NFTCard.css";

export default class MyApp extends App {
    componentDidMount() {
        let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
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
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                var script = document.createElement('script'); 
                script.dataset.cache = true; 
                script.dataset.websiteId = "b25f950c-8e53-400e-afef-df879dabda06";
                script.src="https://s.abla.io/abla.js";
                document.getElementsByTagName("head")[0].appendChild(script);
            `
                        }}
                    />
                </Head>
                <SnackbarProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                </SnackbarProvider>
            </React.Fragment>
        );
    }
}
