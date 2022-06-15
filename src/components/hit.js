import React from 'react';
import { Highlight } from 'react-instantsearch-hooks-web';

function Hit({ hit }) {
  console.log(JSON.stringify(hit));
  return (
    <article>
      <h1>
        <Highlight attribute='name' hit={hit} classNames={{}} />
      </h1>
      <p>{hit.description}</p>
      <p>{hit.url}</p>
      <p>{hit.type}</p>
    </article>
  );
}

export default Hit;
