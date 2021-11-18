import React from 'react';
import './MusicSearchResults.css';

function MusicSearchResults (props) {

    const displayMusicList =()=> {
        return <div className="container--xl">
                <table className="table table-hover table-striped caption-top table-borderless shadow p-3 mb-5 bg-body rounded">
                <caption>devCodeCamp Music Playlist</caption>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
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

