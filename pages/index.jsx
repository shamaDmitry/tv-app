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
    <section>
      <span className="icon-display" />

      <div>
        <input type="text" placeholder="search"
               value={term}
               onChange={handleTermChange}/>


        <Button color="primary" onClick={() => searchShow(term)}>
          go
        </Button>
      </div>

      <h1 className="example">
        Index
      </h1>
    </section>
  )
}