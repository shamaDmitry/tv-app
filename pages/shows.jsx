import React from 'react';
import fetch from 'isomorphic-unfetch';
import ShowCard from '../components/ShowCard/';

import { API_ROOT } from '../constants';

const Shows = ({shows}) => (
  <section className="container">
    <h1>
      Shows
    </h1>

    <div className="w-shows">
      {shows.map((show) => (
        <ShowCard key={show.id} data={show}/>
      ))}
    </div>
  </section>
);

Shows.getInitialProps = async () => {
  const res = await fetch(`${API_ROOT}/shows`);
  const shows = await res.json();

  return {
    shows,
  }
};

export default Shows;