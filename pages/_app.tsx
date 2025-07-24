import React from "react";
import App from "next/app";
import Head from "next/head";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import "styles/footer.css";

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
                <Layout>
                    <Component {...pageProps} />
                </Layout>
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
