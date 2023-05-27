import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import '../style/Housing.css';

export default function Login() {
  const [address, setAddress] = useState('');
  const [space, setSpace] = useState('');
  const [contact, setContact] = useState('');

  const handleAddressChange = (e) => setAddress(e.currentTarget.value);

  const handleSpaceChange = (e) => setSpace(e.currentTarget.value);

  const handleContactChange = (e) => setContact(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginMutation.mutate();
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
                <Typography variant="h6" component="label" >Housing</Typography>
            </Grid>
            {/* //end of upper form */}
            <form style={parentBox} onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center" p={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='raddress'sx={labelStyle} >
                            Address
                        </Typography>
                        <TextField  value={address}  onChange={(e) => {setName(e.target.value);}} required fullWidth id="raddress" sx={labelStyle} variant="outlined"></TextField>
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rspace' >
                            Space
                        </Typography>
                        <TextField value={space} onChange={(e) => {setPwd(e.target.value);}} required fullWidth id="rspace" variant="outlined"></TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rcontact' sx={labelStyle}>
                            Contact
                        </Typography>
                        <TextField value={contact} onChange={(e) => {setPwd(e.target.value);}} required fullWidth id="rcontact" variant="outlined"></TextField>
                    </Grid>
                    
                    <Grid item xs={6} md={6}>
                        <Button size="small" variant="contained" >
                            <Typography  className='btn' variant="subtitle2" component="label">
                                Submit
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
  )
}
