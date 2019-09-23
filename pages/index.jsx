import React, { useState } from 'react';
import router from 'next/router';
import { Button } from 'reactstrap';

export default function Index(props) {
  const [term, setTerm] = useState('');

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function searchShow(term) {
    if (term) return router.push(`/search?q=${term}`);
  }

  return (
    <section className="w-index">
      <div className="container">
        <div className="b-search">
          <input className="b-search-field" type="text" placeholder="search"
                 value={term}
                 onChange={handleTermChange}/>

          <button className="b-search-btn"
                  onClick={() => searchShow(term)}>
            <span className="icon-search" />
          </button>
        </div>

        <h1 className="example">
          Index
        </h1>

        <div className="align-items-center row">
          <div className="col-md-7">
            <figure>
              <img src="http://via.placeholder.com/800x500" alt="" className="img-fluid"/>
            </figure>
          </div>

          <div className="col-md-5">
            <h2 className="content-header">
              Lorem ipsum dolor
            </h2>

            <p className="content-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci autem
              consequatur, culpa cupiditate error eveniet ipsum recusandae repellat tempora voluptate voluptatibus
              voluptatum. Adipisci impedit laborum, maiores molestiae quia veniam voluptatum? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}