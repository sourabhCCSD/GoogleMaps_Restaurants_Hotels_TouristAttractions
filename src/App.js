import { CssBaseline, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [childClicked, setChidClicked] = useState(null);  // Step 1 (declaring the state)
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, []);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => (place.rating > rating));
    setFilteredPlaces(filteredPlaces);
  }, [rating]);
  
  

  useEffect(() => {
 setIsLoading(true);
    console.log(bounds, 'are my bounds')
      getPlacesData(type, bounds.sw, bounds.ne)
      .then(data=> {
        console.log(data);
        setPlaces(data);
        setFilteredPlaces([]);
      setIsLoading(false); 
      })
  }, [type, coordinates, bounds]);
  
  
  return (
    <div>
     <CssBaseline />
     <Header />
     <Grid container spacing={3} style={{width: '100%'}}>
      <Grid item sm={12} md={4}>
       <List 
       places = {filteredPlaces.length ? filteredPlaces : places}
       isLoading={isLoading} 
      childClicked={childClicked}  //Step 5 Providing the newState value to list
      type={type}
      setType={setType}
      rating={setRating}
      setRating={setRating}
       /> 
      </Grid>
      <Grid item sm={12} md={8}>
       <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places = {filteredPlaces.length ? filteredPlaces : places}
       setChildClicked={setChidClicked}  // Step 2 (Sending it to Maps via props)
       /> 
      </Grid>
     </Grid>
    </div>
  );
}

export default App;
