// Write a constructor for the class Movie, 
// which takes a String representing the title of the movie, 
// a String representing the studio, and 
// a String representing the rating as its arguments, 
// and sets the respective class properties to these values.

class Movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating; 
    }

    static getPG(flims) {
        
        return flims.filter(Movie => Movie.rating === "PG"); 
    }

}

let Movie01 = new Movie("Casino Royale", "Eon Productions", "PG-13");

let flims = [

    Movie01,
    new Movie("Finding Nemo", "Pixar", "G"),
    new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Iron Man", "Marvel Studios", "PG-13"),
    new Movie("Frozen", "Disney", "PG"),
    new Movie("Aladdin", "Disney", "PG")
    
];

let pgMovies = Movie.getPG(flims);
console.log(pgMovies);



                    // output

// [
//     Movie { title: 'Frozen', studio: 'Disney', rating: 'PG' },
//     Movie { title: 'Aladdin', studio: 'Disney', rating: 'PG' }
// ]



