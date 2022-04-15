import {Router} from 'express';
import {getMovies, getMovie, addMovie, deleteMovie, updateMovie} from "../controllers/movies.controllers.js";

const router = Router();

router.get('/movies', getMovies );
router.post('/movies', addMovie);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id',deleteMovie );
router.get('/movies/:id',getMovie);

export default router;
