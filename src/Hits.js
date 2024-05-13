import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch';

function Hit ({hit}) {
  return (
    <article>
      <div className="hit">
        <div className="hit-image">
          <img src={hit.image} alt={hit.name} />
        </div>
        <div className="hit-content">
          <div>
            <div className="hit-name">
              <Highlight attribute="name" hit={hit} />
            </div>
            <div className="hit-description">
              <Snippet attribute="description" hit={hit} />
            </div>
          </div>
          <div className="hit-price">£{hit.price}</div>
        </div>
      </div>
    </article>
  )
}

export default Hit;

