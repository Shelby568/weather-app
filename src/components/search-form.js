import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/search-form.css';

const SearchForm = props => {

    const [searchText, setSearchText] = useState('')

   const handleInputChange = (event) => {
        setSearchText(event.target.value)
    }
    
    return (
        <form className="searchform">
            <input type="text" value={searchText} onChange={handleInputChange} />
            <button className="searchbutton" onClick={() => props.setLocationSearch(searchText)}>Search</button>
        </form>
    )
}

SearchForm.propTypes = {
    setLocationSearch: PropTypes.func,
}

export default SearchForm;