
const MOVIE_API_URL = "https://www.omdbapi.com/";

// FIXME: key no debe estar en el codigo
// investigar cuales son las "best practices"
const KEY = "ad71b8de";

function fillElements (movieList, divElement){
    for(let i=0; i<movieList.length; i++) {
        let divMovie = document.createElement("div");
        divMovie.className = "movie";
        divMovie.innerHTML = "<button><img src='" + movieList[i].Poster + "'></button>";
                      
        
        divMovie.addEventListener("click", ()=>showMovieInfo(movieList[i]));
        divElement.insertAdjacentElement("beforeend", divMovie);
    }
}


function showMovieInfo(movie){
    document.getElementById("welcomeCarrousel").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("topClassicsScreen").style.display= "none";
    document.getElementById("topModernScreen").style.display= "none"
    document.getElementById ("serchedMovies").style.display= "none";
    document.getElementById("movieDetailScreen").style.display = "block";

    if(movie.Response === "True") {
        let divMovieInfo = document.getElementById("movieDetailScreen");
        let movieScreen = divMovieInfo.getElementsByTagName("p");

        movieScreen[0].innerHTML = "Título: " + movie.Title;
        movieScreen[1].innerHTML = "<img src='" + movie.Poster + "'>";
        movieScreen[2].innerHTML = movie.Runtime;
        movieScreen[3].innerHTML = "Director: " + movie.Director;
        movieScreen[4].innerHTML = "Rating: " + movie.imdbRating;
        movieScreen[5].innerHTML = "Plot: " + movie.Plot;
    }
    else {
        document.getElementById("movieDetailScreen").style.display = "none";
        document.getElementById("notFoundScreen").style.display = "block";
    }
      
}
  
let topHorrorMoviesIds =  window.moviesHandler.topHorrorMovieIds;

for (let index = 0; index <  topHorrorMoviesIds.length; index++) {
    const movieId = topHorrorMoviesIds[index];
    let url = new URL(MOVIE_API_URL);

    let urlDataRequest = new URL(`?i=${movieId}&apikey=${KEY}`, url);
    
    fetch(urlDataRequest)
        .then((data) => {
            // convertimos nuestra data a JSON
            return data.json();
        }).then((dataAsJSON) => {
           
            fillElements([dataAsJSON], document.getElementById("welcomeCarrousel"));
        }
    );
}

function topClasicHorrorMovies() {
    document.getElementById("welcomeCarrousel").style.display= "none";
    document.getElementById("movieDetailScreen").style.display = "none";
    document.getElementById("topClassicsScreen").style.display= "block";
let topClasicHorrorMoviesIds =  window.moviesHandler.topClasicHorrorMoviesIds;

for (let index = 0; index <  topClasicHorrorMoviesIds.length; index++) {
    const movieId = topClasicHorrorMoviesIds[index];
    let url = new URL(MOVIE_API_URL);

    let urlDataRequest = new URL(`?i=${movieId}&apikey=${KEY}`, url);
    
    fetch(urlDataRequest)
        .then((data) => {
            // convertimos nuestra data a JSON
            return data.json();
        }).then((dataAsJSON) => {
            
            fillElements([dataAsJSON], document.getElementById("topClassicsScreen"));
        }
    );
}
                                }
document.getElementById("topClassicsBtn").addEventListener("click", topClasicHorrorMovies);

function topModernHorrorMovies() {
    document.getElementById("welcomeCarrousel").style.display= "none";
    document.getElementById("movieDetailScreen").style.display = "none";
    document.getElementById("topClassicsScreen").style.display= "none";
    document.getElementById("topModernScreen").style.display= "block";
let topModernHorrorMoviesIds =  window.moviesHandler.topModernHorrorMoviesIds;

for (let index = 0; index <  topModernHorrorMoviesIds.length; index++) {
    const movieId = topModernHorrorMoviesIds[index];
    let url = new URL(MOVIE_API_URL);

    let urlDataRequest = new URL(`?i=${movieId}&apikey=${KEY}`, url);
    
    fetch(urlDataRequest)
        .then((data) => {
            // convertimos nuestra data a JSON
            return data.json();
        }).then((dataAsJSON) => {
            
            fillElements([dataAsJSON], document.getElementById("topModernScreen"));
        }
    );
}
                                }
document.getElementById("topModernBtn").addEventListener("click", topModernHorrorMovies);

const startingScreen =()=> {

    document.getElementById ("welcomeScreen").style.display="flex";
    document.getElementById ("welcomeCarrousel").style.display="flex";
    document.getElementById ("movieDetailScreen").style.display="none";
    document.getElementById ("notFoundScreen").style.display="none";
    document.getElementById ("topClassicsScreen").style.display="none";
    document.getElementById ("topModernScreen").style.display="none";
    };
 
    document.getElementById ("homeBtn").addEventListener("click",startingScreen);

    function search(){
        document.getElementById ("welcomeScreen").style.display="none";
        document.getElementById ("welcomeCarrousel").style.display="none";
        document.getElementById ("movieDetailScreen").style.display="none";
        document.getElementById ("notFoundScreen").style.display="none";
        document.getElementById ("topClassicsScreen").style.display="none";
        document.getElementById ("topModernScreen").style.display="none";
        document.getElementById ("serchedMovies").style.display= "block";

        let title = document.getElementById("searchBar").value;
        let url = new URL(MOVIE_API_URL);
        let urlDataRequest = new URL(`?t=${title}&apikey=${KEY}`, url);
        
        fetch(urlDataRequest).then((data) => {
            // convertimos nuestra data a JSON
            return data.json();
        }).then((movieJSONdata) => {
            showMovieInfo(movieJSONdata);
        });
        
      }
      
      document.getElementById("searchBtn").addEventListener("click", search);
           