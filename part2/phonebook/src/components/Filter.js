
const Filter =( {newSearch, handleNewFilter} ) =>  {
    return(
        <div>
            filter shown with<input 
                value={newSearch}
                onChange={handleNewFilter}
            />
        </div>
    );
}

export default Filter;