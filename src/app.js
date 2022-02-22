const yargs = require("yargs");
const Movie = require("./utils");

let movies = [];

const app = (yargsObj) => {
    if (yargsObj.add) {

        //Loop over prperties of yargsObj, as defined by console user.
        for (let m = 0; m < yargsObj.title.length; m +=1 )
        {
            let movie = new Movie(yargsObj.title[m], yargsObj.actor[m], yargsObj.director[m]);
            movies.push(movie);
            movie.add();
            console.log(`Movie added: ${movie.title}, directed by ${movie.director}, featuring ${movie.actor}.`);
        }

        const v = movies.map((props) => {return `${props.title}, d. ${props.director}, f. ${props.actor}`});
        console.log("Movies: ", movies);
        // console.log(yargsObj);

    }
    else {
        console.log("Add property not defined. Add command not selected.");
    }
}

app(yargs.argv);
//Example shell command: node src/app.js --add --title "Star Wars" --actor "James Earl Jones"  --director --title "Marathon Man" --actor "Dustin Hoffman" --director "John Schlesinger" --title "Come and See"