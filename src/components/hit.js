/* eslint-disable react/prop-types */
import React from 'react'
import {Highlight, Snippet} from 'react-instantsearch-hooks-web'

function Hit({hit}) {
    // console.log(JSON.stringify(hit))
    const lastItem = Object.values(hit.breadcrumbs).pop()
    return (
        <div>
            <h1>{hit.type}</h1>
            <article>
                <a href={hit.url}>
                    <h2>
                        <Highlight attribute="name" hit={hit} classNames={{}} />
                    </h2>
                </a>
                <Snippet hit={hit} attribute="description" />
                <a>
                    <p>{hit.url}</p>
                </a>
                <a className={'myCrumb'}>
                    {hit.type}: {lastItem}
                </a>
            </article>
        </div>
    )
}

export default Hit
