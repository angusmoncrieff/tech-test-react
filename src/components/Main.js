import React, { useState } from 'react'

import SetList from './SetList';
import { songData } from '../data/songData'
import SongDetails from './SongDetails'


const Main = () => {

    const [songs, setSongs] = useState(songData)
    const [currSongId, setCurrSongId] = useState()

    return (
        <React.Fragment>
            <SetList
                songs={songs}
                currSongId={currSongId}
                setCurrSongId={setCurrSongId}
            />
            {currSongId &&
                <SongDetails
                    song={songs.find(s => s.id === currSongId)}
                    songs={songs}
                    setSongs={setSongs}
                />
            }
        </React.Fragment>
    );
}

export default Main;
