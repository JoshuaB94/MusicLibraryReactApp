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

    displayMusicResults() {
        let renderedMusic = this.state.music.map((song) => {
            return (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.album}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.releaseDate}</td>
                </tr>
            );
        });
            return (
                <table>
                    <tr>
                        <th>Song Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                    {renderedMusic}
                </table>
            );
    };
    
    render() {
        console.log(this.state)
        return (
            <div className="MusicSearchResults">
                {this.state.music.length > 0 ? this.displayMusicResults()
                : <h3>Searching For Music...</h3> }
            </div>
        );
    }
}

export default MusicSearchResults;

