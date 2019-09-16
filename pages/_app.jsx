import React from 'react';
import App from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NProgress from 'nprogress'
import Router from 'next/router'

import '../styles/Layout/index.scss';
import '../styles/shared/index.scss';
import '../styles/index.scss';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

class Layout extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <section className="App">
        <Header/>

        <div className="App-content">
          {children}
        </div>

        <Footer/>
      </section>
    );
  }
}

export default class TvApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}