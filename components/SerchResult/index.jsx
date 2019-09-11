import React from 'react';
// import Link from 'next/link';
import _ from 'lodash';

const SearchResult = ({data}) => {
  return (
    <li>
      <p>
        {data.show.name}
      </p>

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