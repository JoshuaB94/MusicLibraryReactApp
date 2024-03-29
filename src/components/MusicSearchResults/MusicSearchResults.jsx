import React from 'react';
import './MusicSearchResults.css';

function MusicSearchResults (props) {

    const displayMusicList =()=> {
        return <div className="container--xl musicContainer">
                <table className="musicTable caption-top">
                <caption>devCodeCamp Music Playlist</caption>
                <thead className="musicTable-heading">
                    <tr>
                        <th>#</th>
                        <th>Song Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Genre</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody className="musicTable-body">
                {props.musicToDisplay.map((song) => (
                    <tr key={song.id}>
                        <td>{song.id}</td>
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
                : <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
            </div>
        );

}

export default MusicSearchResults;

