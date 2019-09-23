import React from 'react';
import fetch from 'isomorphic-unfetch';
import SearchResult from '../components/SerchResult';


const Search = ({result}) => {
  return (
    <section className="container">
      <h1>
        Search page
      </h1>

      {result ? result.map((item) => (
        <SearchResult key={item.show.id} data={item}/>
      )) : (
        <h3 className="text-center mt-5">
          Nothing is find
        </h3>
      )}
    </section>
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