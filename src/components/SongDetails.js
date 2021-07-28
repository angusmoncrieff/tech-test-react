
const SongDetails = ({ song, songs, setSongs }) => {

    const { id, title, key, singer, showBold } = song

    const handleChange = e => {
        const propToChange = e.target.id
        const newValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        // console.log(propToChange, newValue, id)
        setSongs(songs.map(s => s.id === id ? { ...s, [propToChange]: newValue } : s))
    }

    return (
        <form className='song-details'>
            <h2>{title}</h2>

            <ul>
                <li>
                    <label htmlFor="key">key:</label>
                    <input
                        type="text"
                        id="key"
                        value={key}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="singer">singer:</label>
                    <input
                        type="text"
                        id="singer"
                        value={singer}
                        onChange={handleChange}
                    />
                </li>
                <li>
                    <label htmlFor="show-bold">show in bold:</label>
                    <input
                        type="checkbox"
                        id="showBold"
                        // value={showBold}
                        key={Math.random()}        // bit hacky - from https://stackoverflow.com/a/63126124/11571725
                        defaultChecked={showBold}  // (else checkbox doesn't update correctly when click diff songs)
                        onChange={handleChange}
                    />
                </li>
            </ul>

        </form>
    )
}

export default SongDetails