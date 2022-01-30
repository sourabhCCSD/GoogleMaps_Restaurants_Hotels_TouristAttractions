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
  const [childClicked, setChidClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, []);
  

  useEffect(() => {
/*     setIsLoading(true); */
    console.log(bounds, 'are my bounds')
      getPlacesData(bounds.sw, bounds.ne)
      .then(data=> {
        console.log(data);
        setPlaces(data);
     /*    setIsLoading(false); */
      })
  }, [coordinates, bounds]);
  
  
  return (
    <div>
     <CssBaseline />
     <Header />
     <Grid container spacing={3} style={{width: '100%'}}>
      <Grid item sm={12} md={4}>
       <List 
       places={places}
       /* isLoading={isLoading} */
      /*  childClicked={childClicked} */
       /> 
      </Grid>
      <Grid item sm={12} md={8}>
       <Map 
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        places={places}
       /*  setChidClicked={setChidClicked} */
       /> 
      </Grid>
     </Grid>
    </div>
  );
}

export default App;
