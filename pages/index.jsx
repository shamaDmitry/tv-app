import React, { useState } from 'react';
import router from 'next/router'
import Layout from '../components/Layout';

export default function Index(props) {
  const [term, setTerm] = useState('');

  function handleTermChange(event) {
    setTerm(event.target.value);
  }

  function searchShow(term) {
    if (term) return router.push(`/search?q=${term}`);
  }

  return (
      <Layout>
        <style global jsx>{`
          body {
            margin: 0;
          }
      `}</style>

        <div>
          <input type="text" placeholder="search"
                 value={term}
                 onChange={handleTermChange}/>

          <button onClick={() => searchShow(term)}>
            go
          </button>
        </div>

        <h1>
          Index
        </h1>
      </Layout>
  )
}