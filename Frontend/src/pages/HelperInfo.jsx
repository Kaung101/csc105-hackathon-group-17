import React from 'react';
import { TextField, Grid, Button, InputAdornment, Card, CardMedia } from '@mui/material';
import introImage from '../assets/intro.jpeg';

export default function App() {
  const handleLocateUser = () => {
    // Code to locate the user
    // You can use browser geolocation API or any other method to determine the user's location
    // Implement your logic here
  };

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
              <h1>Fill in the information below so we can help you get started</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Full name"
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Email address"
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Address"
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              label="Contact Number"
              fullWidth
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <TextField
              label="Location"
              fullWidth
              InputProps={{
                style: { backgroundColor: 'white', color: 'black' },
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={handleLocateUser}
                      sx={{ color: 'white', bgcolor: 'grey', borderRadius: '50%' }}
                    >
                      Locate
                    </Button>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{ style: { color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained" sx={{ mb: 4, margin: '10px' }}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </form>
  );
}
