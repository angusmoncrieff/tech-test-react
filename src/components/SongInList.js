
const SongInList = ({ id, title, showBold, isCurrent, setCurrSongId }) => {

    const handleSelectSong = e => {
        const selectedSongId = e.target.name
        setCurrSongId(selectedSongId)
    }

    return (
        <li
            className={`song-in-list ${showBold ? 'bold' : ''} ${isCurrent ? 'highlight' : ''}`}
        >
            <button
                onClick={handleSelectSong}
                name={id}
            >
                {title}
            </button>
        </li>
    )
}

export default SongInList