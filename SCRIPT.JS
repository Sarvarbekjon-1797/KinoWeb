const numberOfFilms = +prompt('How many movies have You watched?', 'Your answer');


let personlaMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat : false
}

const a = prompt('One of the last movies watched?', 'your answer here');
const b = prompt('How do you rate it?', 'on a ten -point scale');
const c = prompt('One of the last movies watched?', 'your answer here');
const d = prompt('How do you rate it?', 'on a ten -point scale');

personlaMovieDB.movies[a] =b;
personlaMovieDB.movies[c] =d;

console.log(personlaMovieDB)
