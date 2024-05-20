import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION);
        const nowPlayingMoviesList = await data.json();
        dispatch(addNowPlayingMovies(nowPlayingMoviesList.results));
    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;