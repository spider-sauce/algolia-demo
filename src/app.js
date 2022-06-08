/* global instantsearch */

import { hitTemplate } from "./helpers";

const search = instantsearch({
    appId: "RO95H65NEO",
    apiKey: "eb980e41546c08d3e422562074fa0380",
    indexName: "crawler_help_center",
    searchParameters: {
        hitsPerPage: 5,
        attributesToSnippet: ["description:24"],
        snippetEllipsisText: " [...]"
    }
});

// Uncomment the following widget to add hits list.

search.addWidget(
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            empty: "No results.",
            item: function (hit) {
                return hitTemplate(hit);
            }
        }
    })
);

// Uncomment the following widget to add a search bar.

search.addWidget(
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search for products",
        autofocus: false
    })
);

// Uncomment the following widget to add search stats.

search.addWidget(
    instantsearch.widgets.stats({
        container: "#stats",
        templates: {
            body(hit) {
                return `<span role="img" aria-label="emoji">⚡️</span> <strong>${
                    hit.nbHits
                }</strong> results found ${
                    hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
                } in <strong>${hit.processingTimeMS}ms</strong>`;
            }
        }
    })
);

// Uncomment the following widget to add categories list.

search.addWidget(
    instantsearch.widgets.refinementList({
        container: "#categories",
        attributeName: "type",
        autoHideContainer: false,
        templates: {
            header: "Sources"
        }
    })
);

// Uncomment the following widget to add pagination.

search.addWidget(
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
);

search.start();
