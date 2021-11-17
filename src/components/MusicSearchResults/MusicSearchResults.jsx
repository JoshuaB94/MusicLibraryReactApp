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

    displayMusicList() {
        return <div>
                <table>
                <thead>
                    <tr>
                        <th>Song Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.music.map((song) => (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.album}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.releaseDate}</td>
                    </tr>
                ))}
                </tbody>
                </table>
            </div>;
    };
    
    render() {
        return (
            <div>
                {this.state.music.length > 0 ? this.displayMusicList()
                : <h4>Searching for Music....</h4>}
            </div>
        );
    }
}

export default MusicSearchResults;

