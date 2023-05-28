import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useMutation } from 'react-query';
import Axios from '../utils/Axios.js';
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

  const handleConfirmPasswordChange = (e) =>
    setConfirmPassword(e.currentTarget.value);

  const isValid = () => {
    return password == confirmPassword;
  };

  const { data, error, mutate } = useMutation(() => {
    Axios.post('register', {
      username,
      email,
      ph_number: phoneNumber,
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
      <Typography variant="h3">Register</Typography>
      <div>
        <TextField
          varient="filled"
          label="username"
          sx={{ m: 1 }}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <TextField
          type="email"
          varient="filled"
          label="email"
          sx={{ m: 1 }}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <TextField
          varient="filled"
          label="phone number"
          sx={{ m: 1 }}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div>
        <TextField
          varient="filled"
          label="address"
          sx={{ m: 1 }}
          onChange={handleAddressChange}
        />
      </div>
      <div>
        <TextField
          varient="filled"
          label="password"
          type="password"
          sx={{ m: 1 }}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <TextField
          varient="filled"
          label="confirm password"
          type="password"
          sx={{ m: 1 }}
          onChange={handleConfirmPasswordChange}
        />
      </div>
      <div>
        <Button variant="outlined" sx={{ m: 1 }} onClick={handleRegister}>
          Register
        </Button>
      </div>
    </>
  );
}
