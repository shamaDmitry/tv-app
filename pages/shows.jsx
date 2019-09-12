import React from 'react';
import fetch from 'isomorphic-unfetch';
import ShowCard from '../components/ShowCard/';

const Shows = ({shows}) => (
  <section>
    <h1>
      Shows
    </h1>

    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {shows.map((show) => (
        <ShowCard key={show.id} data={show}/>
      ))}
    </div>
  </section>
);

Shows.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const shows = await res.json();

  return {
    shows,
  }
};

export default Shows;