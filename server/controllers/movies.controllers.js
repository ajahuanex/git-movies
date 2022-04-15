import Movie from "../models/Movie.js";

export const getMovies=async (req, res)=>{
    const movies = await Movie.find();
    res.send(movies);
};

export const addMovie= async (req, res)=> {
    const {title, description,year, duration,genre,rating, image} = req.body;
    const newMovie = new Movie({title, description,year, duration,genre,rating, image});
    await newMovie.save(); //Guarda en la base de datos
    console.log(newMovie);
    return res.send(newMovie)
};

export const updateMovie=async (req, res)=>{
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(movie);
    res.send(movie);}

export const deleteMovie= async (req, res)=> {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    console.log(movie);
    if(!movie){
        return res.status(404).send("Movie not found");
    }

    res.status(200).send("Movie deleted");
};

export const getMovie = async (req, res)=> {

    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    if(!movie){
        return res.status(404).send("Movie not found");
    }

    res.status(200).send(movie);

};

