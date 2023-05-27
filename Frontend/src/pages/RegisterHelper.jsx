import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import '../style/RegisterHelper.css';


function RegisterHelper() {
//check for username, pwd, email and phno
  const [username, setName] = useState('');
  const [pwd, setPwd] = useState('');
  const [phNo, setPhNo] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [alert, setAlert] = useState('none');
  const [com, setCom] = useState('none');
  const [emailAlert, setEmailAlert] = useState('none');

    //Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if((username != '' && pwd != '' && phNo != '' && email != '' && address != '')||
        (username != '' || pwd != '' || phNo != '' || email != '' || address != '')){
            //do
            const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const patternPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            //if password does not match with the pattern
            if(!(patternPwd.test(pwd))){
                setAlert('block');
            }
            else if(!(email.endsWith('.com'))){
                //check if the email address end with .com
                setCom('block');
                if(!(patternEmail.test(email))){
                    setEmailAlert('block');
                }
            }
            else{
                //submit the info & redirect to login page
                
            }
        }
        else{
            setOpenDialog(true);  
        }
        
    }

  //handleDialog
  const closeDialog = () => {
    setOpenDialog(false);
}
//handleCancel
const handleCancel = () => {
    console.log("cancel");
  }
// styling
const labelStyle = {
    float: 'left',
    fontFamily:'Reem kufi, sans-serif'
  }
const buttonRegisterStyle = {
  padding: '2px 25px',
  margin: '0 auto',
  
}

const buttonCancelStyle = {
  padding: '2px 25px',
  margin: '0 auto',
  
  }

const parentBox = {
  border:'1px solid black',
  borderRadius:'5px',
}
const imgStyle = {
  width:'50px',
  height:'50px',
  border: '1px solid #BE1D1B',
  borderRadius: '50%',
  margin: '0 auto',
}
const dialogBtn = {
  }
  const alertStyle = {
    float:'left',
    color:'#BE1D1B',
  }
  return (
    <Box className="register-container" >
        {/* //outer Grid */}
    <Grid  
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh'}}
    >
        {/* //second container Grid */}
        <Grid item xs={10} sm={5} md={3}>
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
                        <Typography variant='subtitle1' component='label' htmlFor='remail' sx={labelStyle}>
                            Email
                        </Typography>
                        <TextField value={email} onChange={(e) => {setEmail(e.target.value);}} required type="email" fullWidth id="remail" variant="outlined"></TextField>
                        <Typography display={com} style={alertStyle}>Email Address should end with '.com'</Typography>
                        <Typography display={emailAlert} style={alertStyle}>Email Address should include @</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rph_no' sx={labelStyle}>
                            Phone Number
                        </Typography>
                        <TextField  value={phNo}  onChange={(e) => {setPhNo(e.target.value);}} required fullWidth id="rph_no" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='raddress' sx={labelStyle}>
                            Address
                        </Typography>
                        <TextField  value={address}  onChange={(e) => {setAddress(e.target.value);}} required fullWidth id="rph_no" variant="outlined"></TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' component='label' htmlFor='rpassword' sx={labelStyle} type="password">
                            Password
                        </Typography>
                        <TextField value={pwd} onChange={(e) => {setPwd(e.target.value);}} required fullWidth id="rpassword" variant="outlined" ></TextField>
                        <Typography display={alert} style={alertStyle}>Password should be 8 characters or more and should have at least one digit,A-Z and a-z.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{color:'#BE1D1B', fontSize:'11px'}}>Click 'Register' to agree Terms of Service and acknowledge that this website's Privacy Policy applies to you.</Typography>
                    </Grid>
                    {/* button */}
                    <Grid item xs={6} md={6} style={buttonRegisterStyle} className='btn-btn'>
                        <Button onClick={handleSubmit} size="small" variant="contained" style={buttonRegisterStyle}  className='login-btn' >
                            <Typography style={buttonCancelStyle} className='btn' variant="subtitle2" component="label" >
                                Register
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={6} style={buttonCancelStyle} className='btn-btn'>
                        <Button onClick={handleCancel} size="small" variant="contained" style={buttonCancelStyle} className='login-btn'>
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
            <Button sx={dialogBtn} className='btnDialog' onClick={closeDialog}>OK</Button>
          </DialogActions>
        </Dialog>
    </Grid>
    </Box>
  )
}

export default RegisterHelper