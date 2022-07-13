import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-hooks-web';

function Hit({ hit }) {
  // console.log(JSON.stringify(hit));
  const lastItem = Object.values(hit.breadcrumbs).pop();
  return (
    <div>
      <article>
        <a href={hit.url}><h1>
          <Highlight attribute='name' hit={hit} classNames={{}} />
        </h1></a>
        <Snippet hit={hit} attribute='description' />
        {/*<a>*/}
        {/*  <p>{hit.url}</p>*/}
        {/*</a>*/}
        <p className={'myCrumb'}>{hit.type}: {lastItem}</p>
      </article>
    </div>
  );
}

export default Hit;
