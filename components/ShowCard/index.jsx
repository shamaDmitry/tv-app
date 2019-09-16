import React from 'react';
import Link from 'next/link';

const ShowCard = ({data}) => {
  console.log('card data', data);

  return (
    <>
      <section className="b-show-card">
        <Link href="/shows/[id]" as={`/shows/${data.id}`}>
          <figure className="b-show-card-image">
            <img src={data.image.medium} alt=""/>
          </figure>
        </Link>

        <Link href="/shows/[id]" as={`/shows/${data.id}`}>
          <a className="b-show-card-title">
            {data.name}
          </a>
        </Link>
      </section>

      <Link href="/shows/[id]" as={`/shows/${data.id}`}>
        <a className="b-card">
          <img src={data.image.medium} alt=""/>

          <p>
            {data.status}
          </p>

          <p>

          </p>
        </a>
      </Link>
    </>
  )
};

export default ShowCard;