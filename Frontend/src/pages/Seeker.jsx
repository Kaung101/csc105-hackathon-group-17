import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer.jsx';

function Seeker() {
    const [cookies] = useCookies(['userType']); // Retrieve cookies
    const [errorDialogOpen, setErrorDialogOpen] = useState(false);
    console.log(cookies.userType);
    const navigate = useNavigate();
    useEffect(() => {
        if (cookies.userType === 'seeker') {
            //navigate to categories
            askForLocation();

            navigate('categories')

        }
      }, [cookies.userType]);

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
        setErrorDialogOpen(true);
      };
      const handleCloseErrorDialog = () => {
        setErrorDialogOpen(false);
      };
  
  return (

    <>
    <Navbar />

    <Box>{/* Error Dialog */}
        <Dialog open={errorDialogOpen} onClose={handleCloseErrorDialog}>
          <DialogTitle>Error</DialogTitle>
          <DialogContent>
            <p>An error occurred while obtaining your location.</p>
            <p>Please make sure location services are enabled and try again.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseErrorDialog} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>

    </Box>
    
    <Footer />
    </>
  );
}

export default Seeker