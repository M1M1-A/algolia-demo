import './App.css';
import React from 'react'
import algoliasearch from 'algoliasearch';
import 'instantsearch.css/themes/satellite.css';
import { 
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  RefinementList,
  Pagination,
  Stats,
  RangeInput
} from 'react-instantsearch'
import Hit from '../src/Hits'

const searchClient = algoliasearch("01CN0SZU4L", "f84955f5594599f74793db888253a03e")

function App() {
  return (
    <InstantSearch searchClient={searchClient} indexName='demo_products'>
      <Configure 
        hitsPerPage={10}
        attributesToSnippet={['description:24']}
        snippetEllipsisText='[...]'
      />
      <div className='main-container'>
        <div className='filters-container'>
          <div className='title'>
            <p className='title-text'>Algolia Demo</p>
          </div>
          <p className='refine-search-text'>Refine your search</p>
          <div className='filters'>
            <p className='filter-title'>Brand</p>
            <RefinementList attribute="brand" />
          </div>
          <div className='filters'>
            <p className='filter-title'>Categories</p>
            <RefinementList attribute='categories'/>
          </div>
          <div className='price-range'>
            <p className='filter-title'>Price</p>
            <RangeInput attribute='price'/>
          </div>
        </div>
        <div className='content'>
          <SearchBox placeholder='Search for products' />
          <div id='stats'>
            <Stats />
          </div>
          <Hits hitComponent={Hit} />
          <div className='pagination'>
            <Pagination />
          </div>
        </div>
      </div>
    </InstantSearch>
  );
}

export default App;
