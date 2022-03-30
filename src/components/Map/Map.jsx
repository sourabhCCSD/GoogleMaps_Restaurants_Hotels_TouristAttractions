import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined';
import GoogleMapReact from 'google-map-react';
import React from 'react';
import useStyles from './styles';
import Rating from '@material-ui/lab/Rating';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked /* Step 3 receving it from AppJS */  }) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width: 600px)'); 

  return (
  <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyCTCU-6ylSD1xHRfoDZvkqX-2Hkr-WqZOE'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) =>  {
        setCoordinates({lat: e.center.lat, lng: e.center.lng}) 
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          }}
       onChildClick={(child) => setChildClicked(child)}  //Step 4 Setting its value on every child
      >

         {/* {
          places.map((place, i) => (
            <div 
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
            >
              {
                !isDesktop ? (
                  <LocationOnOutlinedIcon color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} className={classes.paper}>
                    <Typography className={classes.typography} variant='subtitle2' gutterBottom>{place.name}</Typography>
                    <img className={classes.pointer}
                    src={place.photo
                      ? place.photo.images.large.url
                      : "https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg"} />
                      <Rating size="small" value={Number(place.rating) } readOnly />
                  </Paper> 
                  
                )
              }
            </div>
          ))
        }   */}





      </GoogleMapReact>
            
  </div>
  );
};

export default Map;
