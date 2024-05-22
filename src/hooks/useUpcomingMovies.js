import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
        const useUpcomingMoviesList = await data.json();
        dispatch(addUpcomingMovies(useUpcomingMoviesList.results));
    }

    useEffect(() => {
        upcomingMovies();
    }, [])
}

export default useUpcomingMovies;