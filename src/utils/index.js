const movieArrI = [];

class Movie {
    constructor (title = "unknown title", actor = "unknown actor", director = "unknown director") {

        this.title = title;
        this.actor = actor;
        this.director = director;
        if (this.title === true) {
            this.title = "unknown title";
        }       
        if (this.actor === true) {
            this.actor = "unknown actor";
        }
        if (this.director === true) {
            this.director = "unknown director";
        }

    }

    add() {
        movieArrI.push(this);
    }

    list() {
        return movieArrI;
    }
}

module.exports = Movie;
// module.exports = movieArrI;