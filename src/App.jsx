import React, {Component} from 'react';
import axios from 'axios';
import MusicSearchResults from './components/MusicSearchResults/MusicSearchResults';
import SearchBar from './components/SearchBar/SearchBar';
import NavBar from './components/NavBar/NavBar';
import './App.css';

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
            if(song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm) || song.album.toLowerCase().includes(searchTerm) ||song.genre.toLowerCase().includes(searchTerm) || song.releaseDate.toLowerCase().includes(searchTerm))
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
            let musicLibrary = await axios.get("http://localhost:1000/api/songs");
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
                <NavBar />
                <div className="app-container">
                <SearchBar placeholder="Search for Song, Album, Artist, etc." filterFunction = {this.filterSongs}/>
                <br></br>
                <MusicSearchResults musicToDisplay = {this.state.filteredSongs}/>
                </div>
            </div>
        )
    }
}

export default App;