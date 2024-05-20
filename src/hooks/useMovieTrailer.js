import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addTailerVideos } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const fetchMovieTrailor = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
        const jsonData = await data.json();
        const filterData = jsonData.results.filter(video => video.type == "Trailer");
        const trailerVideo = filterData.length ? filterData[0] : jsonData.results[0];
        dispatch(addTailerVideos(trailerVideo));
    }

    useEffect(() => {
        fetchMovieTrailor();
    }, [])
}

export default useMovieTrailer;