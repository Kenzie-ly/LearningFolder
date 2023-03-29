document.addEventListener("DOMContentLoaded", function () {

    function clearSearchSection(){
        try{
            const table = document.querySelector("table");
            table.innerHTML = "" ;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    function putLoading(){
        const table = document.querySelector("table");
        table.innerHTML = "Loading...";
    }

    function addMoviesToResultSection(movies){
        const table = document.querySelector("table"); 
        movies.forEach(movie => {
            const row = document.createElement("tr");
            const title = document.createElement("td"); 
            title.append(movie.Title);
            const year = document.createElement("td");
            year.append(movie.Year);
            const imgPoster = document.createElement("img"); 
            imgPoster.src = movie.Poster;
            imgPoster.alt = movie.Title;
            const poster = document.createElement("td");
            poster.append(imgPoster);

            row.append(title);
            row.append(year);
            row.append(poster);
            table.append(row);
        });
    }

    function getFilm(searchQuery){

        const ajax = new XMLHttpRequest();
        ajax.onload = function(){
            clearSearchSection();
            putLoading();
            if (this.status === 200){
                setTimeout(()=>{
                    const response = JSON.parse(this.responseText);
                    clearSearchSection();
                    addMoviesToResultSection(response.Search);
                }, 2000);
            } else {
                clearSearchSection();
                console.log("Error get movies!");
                alert("Error get movies!")
            }
        }

        ajax.open("GET", `${url+searchQuery}`);
        ajax.send();
    }

    document.querySelector("button").addEventListener("click", () => {
        const sQ = document.querySelector("#search-entry").value;
        // getFilm(sq);
        getFilmWithErrorHandler(sQ);
    })
    
})