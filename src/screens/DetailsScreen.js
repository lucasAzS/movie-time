import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation, route }) => {
  console.log(route);
  const movie = route.params.movie;
  const [movieDetails, setMovieDetails] = React.useState(null);

  React.useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      'GET',
      'http://www.omdbapi.com/?apikey=957aa0ee&t=Star+Wars&y=1977'
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        setMovieDetails(response);
      } else {
        console.log(`http Request Failed ${xhr.status}`);
      }
    };
  }, []);
  return (
    <View style={styles.mainView}>
      <Text>{movieDetails === null ? '' : movieDetails.Title}</Text>
      <Text>{movieDetails === null ? '' : movieDetails.Released}</Text>
      <Text>{movieDetails === null ? '' : movieDetails.Plot}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});

export default DetailsScreen;
