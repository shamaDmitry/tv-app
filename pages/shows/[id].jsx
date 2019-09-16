import React from 'react';
import fetch from 'isomorphic-unfetch';

const Show = ({show}) => {
  return (
    <section className="container">
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
        <li dangerouslySetInnerHTML={{__html: show.summary}} />
      </ul>
    </section>
  )
};

Show.getInitialProps = async (context) => {
  const {id} = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return {
    show,
  }
};

export default Show;