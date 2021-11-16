import React, {Component} from 'react';
import axios from 'axios';

class MusicSearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            music: []
        };
    }

    componentDidMount() {
        this.fetchMusic();
    }

    async fetchMusic() {
        try {
            let musicLibrary = await axios.get("http://www.devcodecampmusiclibrary.com/api/music");
            console.log(musicLibrary.data);
            this.setState({music: musicLibrary.data});
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        console.log(this.state)
        return (
            <div className="MusicSearchResults">
                <h2>Music Search Results</h2>
                {this.state.music.length > 0 ? this.state.music.map((song) => {
                    return <p key={song.id}>{song.title}</p>
                }) : <h3>Searching For Music...</h3> }
            </div>
        );
    }
}

export default MusicSearchResults;

