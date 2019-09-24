import React from 'react';
import Link from 'next/link';
import { IMAGE_PLACEHOLDER_MEDIUM } from '../../constants';
import { JSONPretty } from '../../helpers';

const SearchResult = ({data}) => {
  console.log('data', data);

  return (
    <section className="b-result">
      {/*<JSONPretty data={data}/>*/}

      <figure className="b-result-image">
        <img className="img-fluid"
             src={data.show.image && data.show.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>
      </figure>

      <div className="b-result-inner">
        <div className="b-tags">
          <div className="badge">Drama</div>
          <div className="badge">Science-Fiction</div>
          <div className="badge">Thriller</div>
        </div>

        <h4 className="b-result-name">
          <Link href="/shows/[id]" as={`/shows/${data.show.id}`}>
            <a>{data.show.name}</a>
          </Link>
        </h4>

        <div>
          Rating: {data.score}
        </div>

        <div>
          <div className="badge badge-primary badge-pills">
            {data.show.language}
          </div>

          <div className="badge badge-primary badge-pills">
            {data.show.status}
          </div>
        </div>

        <p dangerouslySetInnerHTML={{__html: data.show.summary}} />

        <p>
          <a href={data.show.url} target="_blank">
            {data.show.url}
          </a>
        </p>
      </div>
    </section>
  )
};

export default SearchResult;