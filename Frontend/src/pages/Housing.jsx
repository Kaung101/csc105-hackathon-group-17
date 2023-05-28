import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import '../style/Housing.css';
import { useCookies } from 'react-cookie';
<<<<<<< HEAD
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

=======
import Axios from '../utils/Axios.js';
>>>>>>> 1f992823cd88f06fe5f02fd41cc2bcc4bd734d9e
export default function Login() {
  //when the user log in it will keep cookies
    const userId = "userId from cookies in login page";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');

  // const handleAddressChange = (e) => setAddress(e.currentTarget.value);

  // const handleSpaceChange = (e) => setSpace(e.currentTarget.value);

  // const handleContactChange = (e) => setContact(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  //Styling 

  const labelStyle = {
    float: 'left',
    fontFamily:'Reem kufi, sans-serif'
  }

  const parentBox = {
    border:'1px solid black',
    borderRadius:'5px',
  }

  return (
    <>
    <Navbar />
    <Box className="housing-container" 
    sx={{ marginLeft:40}}
    >
        {/* //outer Grid */}
    <Grid className='grid-background' 
      container
      spacing={3}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh'}}
    >
        {/* //second container Grid */}
        <Grid item xs={10} sm={5} md={6}>
            {/* //start of upper form */}
            <Grid item mb={2} >
                <Typography variant="h6" component="label" >Helper Information</Typography>
            </Grid>
            {/* //end of upper form */}
            <form style={parentBox} onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center" p={2}>
                    <Grid item xs={12}>
                      {/* username */}
                        <Typography variant='subtitle1' component='label' htmlFor='username'sx={labelStyle} >
                          Username
                        </Typography>
                        <TextField value={""} onChange={(e) => {setUsername(e.target.value);}} required fullWidth id="username" sx={labelStyle} variant="outlined"></TextField>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='password'sx={labelStyle} >
                          Password
                        </Typography>
                        <TextField value={""} onChange={(e) => {setPassword(e.target.value);}} required fullWidth id="password" sx={labelStyle} variant="outlined"></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rcontact' sx={labelStyle}>
                            Contact
                        </Typography>
                        <TextField value={""} onChange={(e) => {setContact(e.target.value);}} required fullWidth id="rcontact" variant="outlined"></TextField>
                    </Grid>
                    
                    <Grid item xs={6} md={6}>
                        <Button size="small" variant="contained" >
                            <Typography  className='btn' variant="subtitle2" component="label">
                                Update
                            </Typography>                
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button size="small" variant="contained">
                            <Typography  className='btn' variant="subtitle2" component="label">
                                Delete Account
                            </Typography>                
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
        {/* Dialog Box */}
        {/* <Dialog open={openDialog} onClose={closeDialog} >
          <DialogTitle >Login Error</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Please enter all the information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className='btnDialog' onClick={closeDialog}>OK</Button>
          </DialogActions>
        </Dialog> */}
    </Grid>
    </Box>

    <Footer />
    </>
  )
}
