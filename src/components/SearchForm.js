import React, { useContext } from 'react'
import { ContextCoctail } from '../context/ContextCoctail';

const SearchForm = () => {
    const { setSearchTerm } = useContext(ContextCoctail);

    return (
        <div>
            SearchForm
        </div>
    )
}

export default SearchForm
