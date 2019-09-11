import React, { Component } from 'react'

import Header from '../Header';
import Footer from '../Footer';

const appStyles = {};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
        <>
          <style jsx>{`
            .App {
              display: flex;
              min-height: 100vh;
              flex-direction: column;
            }

            .App-content {
              width:100%;
              max-width:1200px;
              margin: 0 auto;
            }
          `}</style>

          <section className="App">
            <Header/>

            <div className="App-content">
              {this.props.children}
            </div>

            <Footer/>
          </section>
        </>
    )
  }
}

export default Layout;