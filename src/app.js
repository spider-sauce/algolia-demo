import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { Breadcrumb, Configure, InstantSearch, SearchBox, Hits, Pagination } from 'react-instantsearch-hooks-web';

import Hit from './components/hit.js';

const searchClient = algoliasearch('RO95H65NEO', '8d249abc4671e5554fe8f451ffa5db50');
/**
 * add snipet to return smaller description
 * fix breadcrumbs
 * fix results returning as a numbered list
 * add side bar with preview
 * add highlight in the description
 */

const results = algoliasearch

function App() {
  console.log(results);
  return (
    <InstantSearch searchClient={searchClient} indexName='crawler_help_center'>
      <header>
        <Configure hitsPerPage={15} />
        <SearchBox placeholder='What are you searching for?' />
      </header>
      <main>
        <Hits hitComponent={Hit} />
        <Breadcrumb
          attributes={['breadcrumbs.lvl0', 'breadcrumbs.lvl1', 'breadcrumbs.lvl2']}
        />
        <div></div>
        <Pagination />
      </main>
    </InstantSearch>
  );
}

export default App;
