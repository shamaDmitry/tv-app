import React from 'react';
import Link from 'next/link';

const SearchResult = ({data}) => {

  return (
    <li>
      <h4>
        <Link href="/shows/[id]" as={`/shows/${data.show.id}`}>
          <a>{data.show.name}</a>
        </Link>
      </h4>

      <div>
        Rating: {data.score}
      </div>

      <p>
        {data.show.summary}
      </p>

      <p>
        <a href={data.show.url} target="_blank">
          {data.show.url}
        </a>
      </p>
    </li>
  )
};

export default SearchResult;