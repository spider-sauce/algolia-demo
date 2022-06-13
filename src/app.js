/* global instantsearch */
import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import {
    Breadcrumb,
    Highlight,
    Hits,
    InstantSearch,
    Pagination,
    SearchBox,
} from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('RO95H65NEO', '8d249abc4671e5554fe8f451ffa5db50');

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image} alt={hit.name} />
      <p>{hit.categories[0]}</p>
      <h1>
        <Highlight attribute='name' hit={hit} />
      </h1>
      <p>${hit.price}</p>
    </article>
  );
}

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName='crawler_help_center'>
      <SearchBox />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  );
}
