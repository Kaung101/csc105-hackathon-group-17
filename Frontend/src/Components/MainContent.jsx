import Typography from '@mui/material/Typography';
import Logo from '../assets/logo.png';
import '../style/MainContent.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
//kaungkaung edit
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

export default function MainContent() {
    const navigate = useNavigate();
    //set user Type
    const [cookies, setCookies] = useCookies(['userType'] ); 
    const handleSeekerClick = e => {
  //set cookies
  setCookies('userType', 'seeker');
  navigate('seeker');
    }
    const handleHelperClick = e => {
      setCookies('userType', 'helper');
      navigate('helperInfo');
    };

    return (
      <div className="app-container">
        <div className="app-background-image"/>
        <img src={Logo} alt="Logo" className="logo" />
  
        <div className="logo-buttons-container">
            <Typography variant="h5" align="center">
            Are you a   _____?
            </Typography> <br />
            {/* kaungkaung edit onclick button */}
          <Button variant="contained" color="primary" className="logo-button" onClick={handleHelperClick}>
            Helper
          </Button>
          <Button variant="contained" color="primary" className="logo-button" onClick={handleSeekerClick}>
            Seeker
          </Button>
        </div>
      </div>
    );
  }
