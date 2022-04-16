import Movie from "../models/Movie.js";

export const getMovies=async (req, res)=>{
    try {
        const movies = await Movie.find();
        res.send(movies);
        
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
   
};

export const addMovie= async (req, res)=> {
    try {
        const {title, description,year, duration,genre,rating, image} = req.body;
        const newMovie = new Movie({title, description,year, duration,genre,rating, image});
        await newMovie.save(); //Guarda en la base de datos
        console.log(newMovie);
        return res.send(newMovie)
        
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
        
    

};

export const updateMovie=async (req, res)=>{
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(movie);
        res.send(movie);
    
    } catch (error) {
        return res.status(500).json({message:error.message});
        
    }
        
    
};

export const deleteMovie= async (req, res)=> {
try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    console.log(movie);
    if(!movie){
        return res.status(404).send("Movie not found");
    }

    res.status(200).send("Movie deleted");
} catch (error) {
    return res.status(500).json({message:error.message});
    
}
    
};

export const getMovie = async (req, res)=> {
try {
    const movie = await Movie.findById(req.params.id);
    console.log(movie);
    if(!movie){
        return res.status(404).send("Movie not found");
    }

    res.status(200).send(movie);
} catch (error) {
    return res.status(500).json({message:error.message});
    
}


};

