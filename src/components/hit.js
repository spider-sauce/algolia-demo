import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';

function Hit({ hit }) {
  // console.log(JSON.stringify(hit));
  return (
    <div>
      <article>
        <h1>
          <Highlight attribute='name' hit={hit} classNames={{}} />
        </h1>
        <Snippet hit={hit} attribute='description' />
        <a>
          <p>{hit.url}</p>
        </a>
        <p>{hit.type}</p>
      </article>
    </div>
  );
}

export default Hit;
