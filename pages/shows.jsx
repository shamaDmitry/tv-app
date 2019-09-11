import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout/index';
import ShowCard from '../components/ShowCard/index';

const Shows = ({shows}) => (
    <>
      <Layout>
        <h1>
          Shows
        </h1>

        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {shows.map((show) => (
              <ShowCard key={show.id} data={show}/>
          ))}
        </div>
      </Layout>
    </>
);

Shows.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/shows');
  const shows = await res.json();

  return {
    shows,
  }
};

export default Shows;