import SongInList from './SongInList'


const SetList = ({ songs, currSongId, setCurrSongId }) => {

    return (
        <ol>
            {songs.map(song => (
                <SongInList
                    key={song.id}
                    id={song.id}
                    title={song.title}
                    showBold={song.showBold}
                    isCurrent={currSongId === song.id}
                    setCurrSongId={setCurrSongId}
                />
            ))}
        </ol>
    )

}


export default SetList
