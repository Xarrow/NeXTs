import React from 'react'
import App, { Container } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import Header from '../components/Header';

const linkStyle = {
    margin: '0 10px 0 0'
}

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <div className="root">
                {/* <Header headName={"Index"} /> */}
                <Container>
                    <Component {...pageProps} />
                </Container>
            </div>
        )
    }
}