import React from 'react';
import axios from 'axios';

function MusicSearchResults (props) {
    

    

    

    const displayMusicList =()=> {
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
                {props.musicToDisplay.map((song) => (
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
    
 
        return (
            <div>
                {props.musicToDisplay.length > 0 ? displayMusicList()
                : <h4>Searching for Music....</h4>}
            </div>
        );

}

export default MusicSearchResults;

