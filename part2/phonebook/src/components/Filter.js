
export default function Filter( {newSearch, handleNewFilter}) {
    return(
        <div>
            filter shown with<input 
                value={newSearch}
                onChange={handleNewFilter}
            />
        </div>
    )
}