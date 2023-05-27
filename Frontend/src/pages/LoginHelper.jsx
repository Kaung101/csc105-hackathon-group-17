import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';

function LoginHelper() {
//check for username, pwd, email and phno
  const [username, setName] = useState('');
  const [pwd, setPwd] = useState(''); //Handle submit
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username == "" || pwd == "" ){
      setOpenDialog(true);
    }else{
    const info = {username, pwd};
    //check with db
    }
  }

  //handleDialog
  const closeDialog = () => {
    setOpenDialog(false);
}
//handleCancel
const handleCancel = () => {
    history.push("/");
  }
// styling
const labelStyle = {
    float: 'left',
    fontFamily:'Reem kufi, sans-serif'
  }
const buttonRegisterStyle = {
  color:'white',
  float:'left',
  cursor:'pointer'
}
const buttonCancelStyle = {
    color:'white',
    float:'right',
    cursor:'pointer'
  }
const parentBox = {
  border:'1px solid black',
  borderRadius:'5px',
}
  return (
    <Box className="register-container" 
    sx={{ marginLeft:40}}
    >
        {/* //outer Grid */}
    <Grid  
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
                <Typography variant="h6" component="label" >Sign in</Typography>
            </Grid>
            {/* //end of upper form */}
            <form style={parentBox} onSubmit={handleSubmit}>
                <Grid container spacing={3} alignItems="center" p={2}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rusername' sx={labelStyle}>
                            Username
                        </Typography>
                        <TextField  value={username}  onChange={(e) => {setName(e.target.value);}} required fullWidth id="rusername" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rpassword' sx={labelStyle} type="password">
                            Password
                        </Typography>
                        <TextField value={pwd} onChange={(e) => {setPwd(e.target.value);}} required fullWidth id="rpassword" variant="outlined"></TextField>
                    </Grid>
                    {/* button */}
                    <Grid item xs={6} md={6} style={buttonRegisterStyle}>
                        <Button onClick={handleSubmit} size="small" variant="contained" style={buttonRegisterStyle}  >
                            <Typography style={buttonCancelStyle} className='btn' variant="subtitle2" component="label" >
                                Register
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} style={buttonCancelStyle}>
                        <Button onClick={handleCancel} size="small" variant="contained" style={buttonCancelStyle}>
                            <Typography style={buttonCancelStyle} className='btn' variant="subtitle2" component="label">
                                Cancel
                            </Typography>                
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
        {/* Dialog Box */}
        <Dialog open={openDialog} onClose={closeDialog} >
          <DialogTitle >Login Error</DialogTitle>
          <DialogContent>
            <DialogContentText >
              Please enter all the information.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className='btnDialog' onClick={closeDialog}>OK</Button>
          </DialogActions>
        </Dialog>
    </Grid>
    </Box>
  )
}

export default LoginHelper