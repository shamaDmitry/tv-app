import React from 'react';
import App from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/Layout/index.scss';
import '../styles/shared/index.scss';
import '../styles/index.scss';

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