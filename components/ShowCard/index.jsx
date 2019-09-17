import React from 'react';
import Link from 'next/link';
import { IMAGE_PLACEHOLDER_MEDIUM } from '../../constants';

import './ShowCard.scss';

const ShowCard = ({data}) => {
  console.log('card data', data);

  return (
    <section className="b-show-card">
      <Link href="/shows/[id]" as={`/shows/${data.id}`}>
        <figure className="b-show-card-image">
          <img src={data.image.medium || IMAGE_PLACEHOLDER_MEDIUM} alt=""/>

          <div className="b-show-card-tags">
            {data.genres.map((genre, key) => (
              <div className="badge badge-secondary" key={key}>
                {genre}
              </div>
            ))}
          </div>
        </figure>
      </Link>

      <div className="b-show-card-body">
        <Link href="/shows/[id]" as={`/shows/${data.id}`}>
          <a className="b-show-card-title">
            {data.name}
          </a>
        </Link>
      </div>
    </section>
  )
};

export default ShowCard;