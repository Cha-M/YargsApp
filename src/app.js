const yargs = require("yargs");
const Movie = require("./utils");

let movies = [];


const returnMovieProperty = (property, index) => {
    console.log(property);
        if(property instanceof Array) {
            return property;
        }
        else {
            return property[index];
        }
    }


const app = (yargsObj) => {
    if (yargsObj.add) {

        //Loop over prperties of yargsObj, as defined by console user.
        for (let m = 0; m < yargsObj.title.length; m +=1 )
        {
            
            // let movie = new Movie(yargsObj.title[m], yargsObj.actor[m], yargsObj.director[m]);
            let movie = new Movie(yargsObj.title[m], yargsObj.actor[m], returnMovieProperty(yargsObj.director, m));
            movies.push(movie);
            movie.add();
            console.log(`Movie added: ${movie.title}, directed by ${movie.director}, featuring ${movie.actor}.`);
        }
        console.log("Movies: ", movies);

    }
    else {
        console.log("Add property not defined. Add command not selected.");
    }
}

app(yargs.argv);