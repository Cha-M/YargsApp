const movieArrI = [];

class Movie {
    constructor (title, actor = "unknown actor", director = "unknown director") {
        this.title = title;
        this.actor = actor;
        this.director = director;     
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