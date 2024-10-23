const numberOfFilms = +prompt('How many movies have You watched?', '');


let personlaMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat : false
}

if(personlaMovieDB.count<=10 ){
    console.log('watched quite a few films')
}else if(personlaMovieDB.count>10 && personlaMovieDB.count<30){
    console.log('you are a classic viewer')
}




for (let i=0; i<2; i++){
    const a = prompt('One of the last movies watched?', ''),
          b = prompt('How do you rate it?', '');
    if(a!=null && b!=null && a!='' && b!='' && a.length<50){
        personlaMovieDB.movies[a] =b;
    }else {
        i-- 
    }
    
}

console.log(personlaMovieDB)
