import React from 'react';
import Link from 'next/link';

const ShowCard = ({data}) => {
  return (
    <Link href="/shows/[id]" as={`/shows/${data.id}`}>
      <a style={{display: 'flex', flexDirection: 'column', margin: '10px'}}>
        <img src={data.image.medium} alt=""/>

        <p>
          {data.name}
        </p>
      </a>
    </Link>
  )
};

export default ShowCard;