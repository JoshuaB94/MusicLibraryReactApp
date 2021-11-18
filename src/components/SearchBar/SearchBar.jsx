import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    const [filteredSongs] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (search) => {
        setWordEntered(search.target.value)
        props.filterFunction(search.target.value)
    }

    return (
        <div className="searchBar-container">
            <div className="searchBar-block">
                <input 
                type="text"
                placeholder={props.placeholder}
                value={wordEntered}
                onChange={handleFilter}
                className="searchInput"
                />
            </div>

            {filteredSongs.length !== 0 && (
                <div>
                    {filteredSongs.slice(0, 24).map((value, key) => {return (<p>{value.title}</p>);})}
                </div>
            )}
        </div>
        
    )    
}

export default SearchBar;