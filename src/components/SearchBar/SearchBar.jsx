import React, {useState} from 'react';
import MusicSearchResults from '../MusicSearchResults/MusicSearchResults';

const SearchBar = ({placeholder, props}) => {
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (search) => {
        const searchSong = search.target.value;
        setWordEntered(searchSong);

        const newSearchFilter = props.filter((inputValue) => {
            return inputValue.title.toLowerCase().includes(searchSong.toLowerCase());
        });
    
        if (searchSong === "") {
            setFilteredSongs([]);
        } else {
            setFilteredSongs(newSearchFilter);
        }
    };

        const clearUserInput = () => {
            setFilteredSongs([]);
            setWordEntered("");
        };

        return (
            <div>
                <div>
                    <input 
                    type="text"
                    placeholder="Search for Song, Artist, Album, etc."
                    value={wordEntered}
                    onChange={handleFilter}
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