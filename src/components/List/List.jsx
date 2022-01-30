import React, { useState, useEffect, createRef } from 'react';
import {Typography, FormControl, InputLabel, Select, MenuItem, Grid, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';



const List = ({places, isLoading, childClicked}) => {

    const [type, setType] = useState();
    const [rating, setRating] = useState();
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles();

    console.log({childClicked})


    return(
        <div className={classes.container}>
        <Typography variant='h4'>Restaurants Hotel & Attractions around you</Typography>
             
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
        <Grid container className={classes.list}>
            {places?.map((place, i)=> (
                <Grid item key={i} xs={12}>
                    <PlaceDetails place={place} />
                </Grid>
            ))}
        </Grid>
               
       
       
            
        </div>
    )
}

export default List


