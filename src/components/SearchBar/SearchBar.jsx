import React, {useState} from 'react';

const SearchBar = (props) => {
    const [filteredSongs] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (search) => {
        setWordEntered(search.target.value)
        props.filterFunction(search.target.value)
    }

    return (
        <div>
            <div>
                {/* <i class="bi bi-search"></i> */}
                <input 
                type="text"
                placeholder={props.placeholder}
                value={wordEntered}
                onChange={handleFilter}
                className="form-control library-search"
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