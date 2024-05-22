import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
        const topRatedMoviesList = await data.json();
        dispatch(addTopRatedMovies(topRatedMoviesList.results));
    }

    useEffect(() => {
        topRatedMovies();
    }, [])
}

export default useTopRatedMovies;