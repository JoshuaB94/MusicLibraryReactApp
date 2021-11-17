import React, {Component} from 'react';
import MusicSearchResults from './components/MusicSearchResults/MusicSearchResults';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';

class App extends (Component) {
    constructor(props) {
        super(props);
        this.state = {
            music:[],
            filteredSongs: []
        };
    }

    componentDidMount() {
        this.fetchMusic();
    }

    filterSongs = (searchTerm) => {
        let filter = this.state.music.filter(function(song){
            if(song.title.includes(searchTerm) ||
            song.artist.includes(searchTerm) || song.album.includes(searchTerm) ||song.genre.includes(searchTerm))
            {
                return true;
            }
        })
        this.setState({
            filteredSongs: filter
        })
    }

    async fetchMusic() {
        try {
            let musicLibrary = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
            console.log(musicLibrary.data);
            this.setState({
                music: musicLibrary.data, filteredSongs : musicLibrary.data
            });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div>
                <SearchBar placeholder="Search for Song, Album, Artist, etc." filterFunction = {this.filterSongs}/>
                <br></br>
                <MusicSearchResults musicToDisplay = {this.state.filteredSongs}/>
            </div>
        )
    }
}

export default App;