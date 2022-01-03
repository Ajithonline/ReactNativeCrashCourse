import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

const MoviesListApp = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMoviesList = async () => {
      const response = await fetch('https://reactnative.dev/movies.json');
      const movies = await response.json();
      setMovies(movies.movies);
    };

    fetchMoviesList();
  }, []);

  return (
    <SafeAreaView>
      <FlatList data={movies} renderItem={({ item }) => <Text>{item.title}</Text>}></FlatList>
    </SafeAreaView>
  );
};

export default MoviesListApp;
