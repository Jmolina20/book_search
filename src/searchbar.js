function Searchbar () {
    return(
        <div class="searchbar">
            <input type="text" name="Enter book name here"></input>
            <button id="book_enter"  onClick={book_search()}></button>
        </div>
    )
}

function book_search() {
    //fetch function with open library api to use text entered into fetch request
}

export default Searchbar;