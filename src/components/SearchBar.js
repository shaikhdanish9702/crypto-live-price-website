import React from 'react'

export default function SearchBar({ setData, data }) {
   const handleSearch = (e) => {
        setData(e.target.value)
    }
  return (
      <div className='search-background'>
          <div className='search-margin'>
              <h1><span>Search</span><input className='input' placeholder='Search' value={data} onChange={handleSearch} /></h1>
              </div>
    </div>
  )
}
