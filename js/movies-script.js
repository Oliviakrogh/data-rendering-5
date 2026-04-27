"use strict";

const movies = [
    {
        id : 1,
        title : "Inception",
        genre : "Science-fiction",
        year : 2010,
        duration : 2.28,
        img : "img/inception.webp",
        url: "https://www.imdb.com/title/tt1375666/"
    },
    {
        id : 2,
        title : "The Dark Knight",
        genre : "Action",
        year : 2008,
        duration : 2.32,
        img : "img/the-dark-knight.webp",
        url: "https://www.imdb.com/title/tt0468569/"
    },
    {
        id : 3,
        title : "Forrest Gump",
        genre : "Drama",
        year : 1994,
        duration : 2.22,
        img : "img/forrest-gump.webp",
        url: "https://www.imdb.com/title/tt0109830/"
    },

    {
        id : 4,
        title : "Superbad",
        genre : "Comedy",
        year : 2007,
        duration : 2.16,
        img : "img/superbad.webp",
        url: "https://www.imdb.com/title/tt0829482/"

    },

    {
        id : 5,
        title : "It",
        genre : "Horror",
        year : 2017,
        duration : 2.15,
        img : "img/it.webp",
        url: "https://www.imdb.com/title/tt1396484/"
    },

    {
  id: 6,
  title: "The Hangover",
  genre: "Comedy",
  year: 2009,
  duration: 1.4,
  img: "img/the-hangover.webp",
  url: "https://www.imdb.com/title/tt1119646/"
},
{
  id: 7,
  title: "The Conjuring",
  genre: "Horror",
  year: 2013,
  duration: 1.52,
  img: "img/the-conjuring.webp",
  url: "https://www.imdb.com/title/tt1457767/"
},
{
  id: 8,
  title: "Interstellar",
  genre: "Science-fiction",
  year: 2014,
  duration: 2.55,
  img: "img/interstellar.jpg",
  url: "https://www.imdb.com/title/tt0816692/"
},
{
  id: 9,
  title: "The Matrix",
  genre: "Science-fiction",
  year: 1999,
  duration: 3.02,
  img: "img/the-matrix.webp",
  url: "https://www.imdb.com/title/tt0133093/"
},
{
  id: 10,
  title: "Pulp Fiction",
  genre: "Drama",
  year: 1994,
  duration: 1.39,
  img: "img/pulp-fiction.webp",
  url: "https://www.imdb.com/title/tt0110912/"
}
];


const moviesContainer = document.querySelector("#movies-container");

const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

function filterMovies(){
        const selectedValue = selectedCategory.value;
        const searchTerm = searchInput.value.toLowerCase().trim();

        let filteredMovies = movies;

        if (selectedValue != "Alle") {
            filteredMovies = filteredMovies.filter((item)=>{
                return item.genre === selectedValue;
            });

        }

        if (searchTerm !="") {
            filteredMovies = filteredMovies.filter((item)=>{
                return item.title.toLowerCase().includes(searchTerm);
        });
    }
    displayMovies(filteredMovies);
}

selectedCategory.addEventListener("change", filterMovies);

searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    filterMovies();
})

function displayMovies(movielist) {
moviesContainer.innerHTML += "";
const html = movielist.map((item) => {
    return `
<article>
    <h2>${item.title}</h2>
    <ul>
        <li>Genre: ${item.genre}</li>
        <li>År: ${item.year}</li>
        <li>Varighed: ${item.duration}</li>
    </ul>
    <figure>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer">
            <img src="${item.img}" alt="${item.title}">
        </a>
        <figcaption>Læs mere på IMDB</figcaption>
    </figure>
</article>
       
        `;
        
}).join("");

moviesContainer.innerHTML = html;
}

displayMovies(movies);

