import React, { useState } from 'react';
import router from 'next/router'

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
      <div>
        <input type="text" placeholder="search"
               value={term}
               onChange={handleTermChange}/>

        <button onClick={() => searchShow(term)}>
          go
        </button>
      </div>

      <h1 className="example">
        Index
      </h1>
    </section>
  )
}