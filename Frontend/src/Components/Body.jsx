import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Card, CardMedia } from '@mui/material';

const IntroScreen = () => {
  const handleSeekerClick = () => {
    // Handle seeker button click
    console.log('Seeker button clicked');
    // Add  logic here for what should happen when the seeker button is clicked
  };

  const handleHelperClick = () => {
    // Handle helper button click
    console.log('Helper button clicked');
    // Add  logic here for what should happen when the helper button is clicked
  };

  const buttonStyle = {
    fontSize: '1.2rem',
    padding: '12px 24px',
    marginTop: '150px',
    margin: '10px',
  };

  return (
    <>
          <Grid container direction="column">

<Grid item alignItems="center">
  <Box
    sx={{
        display: "flex",
        justifyContent: "center",
    }}
  >
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image="https://e7.pngegg.com/pngimages/500/662/png-clipart-preparedness-logo-emergency-management-disaster-call-911-logo-logo-natural-disaster.png"
        alt="Logo"
        sx={{
            marginTop: "80px",
            
            mx: "auto", // Center the image horizontally
          }}
      />
    </Card>
  </Box>
</Grid>
 
    
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSeekerClick}
          style={buttonStyle}
        >
          Seeker
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleHelperClick}
          style={buttonStyle}
        >
          Helper
        </Button>
      </Grid>
    </Grid>
    </Grid>
    </>
  );
};

export default IntroScreen;
