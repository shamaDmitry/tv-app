import React from 'react';
import Link from 'next/link';

const SearchResult = ({data}) => {
  console.log('data search', data);

  return (
    <li>
      <h4>
        <Link href="/shows/[id]" as={`/shows/${data.show.id}`}>
          {data.show.name}
        </Link>
      </h4>

      <div>
        Rating: {data.score}
      </div>

      <p dangerouslySetInnerHTML={{__html: data.show.summary}} />

      <p>
        <a href={data.show.url} target="_blank">
          {data.show.url}
        </a>
      </p>
    </li>
  )
};

export default SearchResult;