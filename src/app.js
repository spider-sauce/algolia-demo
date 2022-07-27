import React, {useRef} from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
    Configure,
    Hits,
    InstantSearch,
    Pagination,
    SearchBox,
} from 'react-instantsearch-hooks-web'

import Hit from './components/hit.js'
import Modal from './components/modal.jsx'

const searchClient = algoliasearch(
    'RO95H65NEO',
    '8d249abc4671e5554fe8f451ffa5db50',
)
/**
 * add snipet to return smaller description
 * fix breadcrumbs
 * fix results returning as a numbered list
 * add side bar with preview
 * add highlight in the description
 */

function App() {
    const modal = useRef(null)
    return (
        <InstantSearch
            searchClient={searchClient}
            indexName="crawler_help_center">
            <header>
                <Configure hitsPerPage={15} />
                <SearchBox
                    placeholder="What are you searching for?"
                    onSubmit={() => modal.current.open()}
                />
            </header>
            <main>
                <Modal ref={modal}>
                    <Hits hitComponent={Hit} />
                    <Pagination />
                </Modal>
            </main>
        </InstantSearch>
    )
}

export default App
