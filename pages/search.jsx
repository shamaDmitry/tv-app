import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/index';

const Search = () => (
    <Layout>
      <h1>
        Search
      </h1>


    </Layout>
);

Search.getInitialProps = async (context) => {
  const term = context.query.q;
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${term}`);
  const result = await res.json();

  console.log('result', result);

  return {
    // term
  }
};

export default Search;