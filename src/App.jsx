import React, {Component} from 'react';
import MusicSearchResults from './components/MusicSearchResults/MusicSearchResults';
import SearchBar from './components/SearchBar/SearchBar';

class App extends (Component) {
    render() {
        return (
            <div>
                <SearchBar />
                <MusicSearchResults />
            </div>
        )
    }
}

export default App;