import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/index';
import SearchResult from '../components/SerchResult';


const Search = ({result}) => {
  return (
    <Layout>
      <h1>
        Search
      </h1>

      <ol>
        {result && result.map((item) => (
          <SearchResult key={item.show.id} data={item}/>
        ))}
      </ol>
    </Layout>
  )
};

Search.getInitialProps = async (context) => {
  const term = context.query.q;
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${term}`);
  const result = await res.json();

  return {
    result
  }
};

export default Search;