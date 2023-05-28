import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import '../style/Housing.css';
import { useMutation, useQuery } from 'react-query';
import Axios from '../utils/Axios.js';
export default function Login() {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    ph_number: '',
    address: '',
  });
  const [email, setEmail] = useState('');
  const [phNo, setPhNo] = useState('');
  const [address, setAddress] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhNo(e.target.value);
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  }


  const { data, error, mutate } = useMutation(() => {
    Axios.patch('/profile', {
      email,
      phone_number,
      address,
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate();
  };

  useQuery(
    'user',
    () => {
      Axios.get(`/profile`);
    },
    {
      onSuccess: (data) => {
        setProfile(data.data);
      },
    },
  );

  //Styling

  const labelStyle = {
    float: 'left',
    fontFamily: 'Reem kufi, sans-serif',
    color: 'white',
  };

  const parentBox = {
    border: '1px solid black',
    borderRadius: '5px',
  };

  return (
    <Box className="housing-container" sx={{ marginLeft: 40 }}>
      {/* //outer Grid */}
      <Grid
        className="grid-background"
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        {/* //second container Grid */}
        <Grid item xs={10} sm={5} md={6}>
          {/* //start of upper form */}
          <Grid item mb={2}>
            <Typography variant="h6" component="label">
              Helper Information
            </Typography>
          </Grid>
          {/* //end of upper form */}
          <form style={parentBox}>
            <Grid container spacing={3} alignItems="center" p={2}>
              <Grid item xs={12}>
                {/* username */}
                <Typography
                  variant="subtitle1"
                  component="label"
                  htmlFor="username"
                  sx={labelStyle}
                >
                  Username
                </Typography>
                <TextField
                  value={profile.username}
                  required
                  fullWidth
                  id="username"
                  sx={labelStyle}
                  variant="outlined"
                  disabled={true}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="label"
                  htmlFor="rcontact"
                  sx={labelStyle}
                >
                  Email
                </Typography>
                <TextField
                  defaultValue={profile.email}
                  required
                  fullWidth
                  id="rcontact"
                  variant="outlined"
                  onChange={handleEmailChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="label"
                  htmlFor="rcontact"
                  sx={labelStyle}
                >
                  Phone Number
                </Typography>
                <TextField
                  defaultValue={profile.ph_number}
                  required
                  fullWidth
                  id="rcontact"
                  variant="outlined"
                  onChange={handlePhoneChange}
                ></TextField>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  component="label"
                  htmlFor="rcontact"
                  sx={labelStyle}
                >
                  Address
                </Typography>
                <TextField
                  defaultValue={profile.address}
                  required
                  fullWidth
                  id="rcontact"
                  variant="outlined"
                  onChange={handleAddressChange}
                ></TextField>
              </Grid>

              <Grid item xs={6} md={6}>
                <Button size="small" variant="contained" onClick={handleSubmit}>
                  <Typography
                    className="btn"
                    variant="subtitle2"
                    component="label"
                  >
                    Update
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6} md={6}>
                <Button size="small" variant="contained">
                  <Typography
                    className="btn"
                    variant="subtitle2"
                    component="label"
                  >
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
  );
}
