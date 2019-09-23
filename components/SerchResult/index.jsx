import React from 'react';
import Link from 'next/link';

import { JSONPretty } from '../../helpers';

const SearchResult = ({data}) => {
  console.log('data', data);

  return (
    <section className="b-result">
      <JSONPretty data={data}/>

      <h4>
        <Link href="/shows/[id]" as={`/shows/${data.show.id}`}>
          <a>{data.show.name}</a>
        </Link>
      </h4>

      <img src={data.show.image.medium} alt=""/>

      <div>
        Rating: {data.score}
      </div>

      <p>
        {data.show.language}
      </p>

      <p>
        {data.show.status}
      </p>

      <p>
        <a href={data.show.url} target="_blank">
          {data.show.url}
        </a>
      </p>
    </section>
  )
};

export default SearchResult;