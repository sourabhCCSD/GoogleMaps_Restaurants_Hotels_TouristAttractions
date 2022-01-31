import React, { useState, useEffect, createRef } from 'react';
import {Typography, FormControl, InputLabel, Select, MenuItem, Grid, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';



const List = ({places, isLoading, childClicked, type, setType, rating, setRating}) => {

    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    useEffect(() => {
    const refs = Array(places?.length).fill().map((_,i) => elRefs[i] || createRef());  // assigning ref to each place elmnt
    setElRefs(refs);
}, [places]);
    


    return(
        <div className={classes.container}>
        <Typography variant='h4'>Restaurants Hotel & Attractions around you</Typography>
             {
                 isLoading ? (
                     <div className={classes.loading}>
                         <CircularProgress size="5rem" />
                         </div>
                 ) : (
                     <>
        <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onClick= {(e) => setType(e.target.value)}>
                    <MenuItem value="restaurants" >Restaurants</MenuItem>
                    <MenuItem value="hotels" >Hotels</MenuItem>
                    <MenuItem value="attractions" >Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={rating} onClick= {(e) => setRating(e.target.value)}>
                    <MenuItem value={0} >All</MenuItem>
                    <MenuItem value={3} >Above 3.0</MenuItem>
                    <MenuItem value={4} >Above 4.0</MenuItem>
                    <MenuItem value={4.5} >Above 4.5</MenuItem>
                </Select>
            </FormControl>


       {/* BELOW GIRD IS A SPECIFIC ELEMENT ON THE LIST */}

        <Grid container className={classes.list}>
            {places?.map((place, i)=> (
                <Grid item key={i} xs={12}>
                    <PlaceDetails 
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                    />
                </Grid>
            ))}
        </Grid>
        </>
                 ) 
             }
                
               
       
       
            
        </div>
    )
}

export default List


