const movieArr = [];

class Movie {
    constructor (title, actor = "You don't know who.") {
        this.title = title;
        this.actor = actor;        
    }
    add() {
        movieArr.push(this);
    }

    list() {
        return movieArr;
    }
}

module.exports = Movie;