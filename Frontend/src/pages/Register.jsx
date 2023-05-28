import Typography from '@mui/material/Typography';
import { Button, Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from '../utils/Axios.js';
import '../style/Register.css';
import introImage from '../assets/intro.jpeg';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => setUsername(e.currentTarget.value);
  const handleEmailChange = (e) => setEmail(e.currentTarget.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.currentTarget.value);
  const handleAddressChange = (e) => setAddress(e.currentTarget.value);
  const handlePasswordChange = (e) => setPassword(e.currentTarget.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.currentTarget.value);

  const isValid = () => {
    return password === confirmPassword;
  };

  const { data, error, mutate } = useMutation(() => {
    Axios.post('/register', {
      username,
      email,
      phoneNumber,
      address,
      password,
    });
  });

  const handleRegister = (e) => {
    e.preventDefault();
    mutate();
  };

  return (
    <>
    <Navbar />
    <Box
      className="container"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${introImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        className="form-container"
        bgcolor="rgba(255, 255, 255, 0.8)" // White transparent background
        borderRadius="10px"
        p={4}
        width="100%"
        maxWidth="400px"
        sx={{
          display: 'grid',
          gridGap: '20px',
        }}
      >
        <Typography variant="h3" textAlign="center" gutterBottom>
          Register
        </Typography>
        <TextField variant="filled" label="Username" onChange={handleUsernameChange} />
        <TextField variant="filled" type="email" label="Email" onChange={handleEmailChange} />
        <TextField variant="filled" label="Phone Number" onChange={handlePhoneNumberChange} />
        <TextField variant="filled" label="Address" onChange={handleAddressChange} />
        <TextField variant="filled" type="password" label="Password" onChange={handlePasswordChange} />
        <TextField
          variant="filled"
          type="password"
          label="Confirm Password"
          onChange={handleConfirmPasswordChange}
        />
        <Button variant="outlined" onClick={handleRegister}>
          Register
        </Button>
      </Box>
    </Box>

    <Footer />
    </>
  );
}
