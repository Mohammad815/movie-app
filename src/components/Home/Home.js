import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAsyncShows, fetchAsyncMovies } from "../../features/movies/movieSlice";
import Banner from "../Banner/Banner";
import Director from "../Director/Director";

import MovieListing from "../MovieListing/MovieListing";



const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      
      <Banner></Banner>
      <MovieListing />
      <Director></Director>
    </div>
  );
};

export default Home;