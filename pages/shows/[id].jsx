import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout/index';

const Show = ({show}) => {

  return (
      <Layout>
        <h1>
          Show Item
        </h1>

        <img src={show.image.medium} alt=""/>
        <ul>
          <li>
            {show.name}
          </li>
          <li>
            <a href={show.officialSite} target="_blank">{show.officialSite}</a>
          </li>
          <li>
            {show.summary.replace(/<[/]?p>/g, '')}
          </li>
        </ul>
      </Layout>
  )
};

Show.getInitialProps = async (context) => {
  console.log('context page item', context);

  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return {
    show,
  }
};

export default Show;