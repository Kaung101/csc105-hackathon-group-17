import React, { useState } from 'react';
import { TextField, Grid, Button, InputAdornment, Card, CardMedia } from '@mui/material';
import introImage from '../assets/intro.jpeg';
export default function App() {
  const [address, setAddress] = useState('');
  const [space, setSpace] = useState('');
  const [ph_number, setPhNumber] = useState(''); 
  const askForLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleLocationSuccess,
        handleLocationError
      );
    } else {
      console.log('Geolocation is not supported by your browser.');
    }
  };

  const handleLocationSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log('Latitude:', latitude);
    console.log('Longitude:', longitude);

    // Do something with the location coordinates, e.g., send them to the server
  };

  const handleLocationError = (error) => {
    console.log('Error occurred while getting location:', error);
  };

  const handleLocateUser = () => {
    // Code to locate the user
    // You can use browser geolocation API or any other method to determine the user's location
    // Implement your logic here
    askForLocation();

  };
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if(space == "" || address == "" || ph_number == "" ){
    }else{
      const info = {space,address, ph_number, latitude, longitude};
    //check with db
    }
  }
  return (
    <form
      style={{
        position: 'relative',
        backgroundImage: `url(${introImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Grid container spacing={2} justifyContent="center" columnGap="20px">
          <Grid item xs={12} textAlign="center">
            <div className="wrapper">
              <h1>WE NEED SOME INFORMATION</h1>
              <h1>Fill in the information below so we can Rebuild Together Beyond Disaster</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Space"
              value={space} onChange={(e) => {setSpace(e.target.value);}} required 
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Address"
              value={address} onChange={(e) => {setAddress(e.target.value);}} required 
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Contact Number"
              value={ph_number} onChange={(e) => {setPhNumber(e.target.value);}} required 
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
                    <Button
                      variant="contained"
                      onClick={handleLocateUser}
                      sx={{ color: 'white', bgcolor: 'grey', borderRadius: '50%' }}
                    >
                      Locate
                    </Button>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button onClick={handleSubmit} type="submit" variant="contained" sx={{ mb: 4, margin: '10px' }}>
              Submit
            </Button >
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
