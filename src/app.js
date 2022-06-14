import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Breadcrumb, Configure, InstantSearch, SearchBox, Hits, Highlight, Pagination } from 'react-instantsearch-hooks-web';

const searchClient = algoliasearch('RO95H65NEO', '8d249abc4671e5554fe8f451ffa5db50');
/**
 * add snipet to return smaller description
 * fix breadcrumbs
 * fix pagination, now with bullets
 * fix results returning as a numbered list
 * add side bar wuth preview
 * add highlight in the description
 */
function Hit({ hit }) {
    console.log(JSON.stringify(hit));
    return (
      <article>
        <h1>
          <Highlight attribute='name' hit={hit} />
        </h1>
        <p>{hit.description}</p>
        <p>{hit.url}</p>
        <p>{hit.type}</p>
      </article>
    );
}

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName='crawler_help_center'>
      <Configure hitsPerPage={20} />
      <SearchBox />
      <Hits hitComponent={Hit} />
      <Breadcrumb attributes={['categories.lvl0', 'categories.lvl1', 'categories.lvl2']} />
      <Pagination />
    </InstantSearch>
  );
}

export default App;
