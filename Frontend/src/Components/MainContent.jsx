
import Typography from '@mui/material/Typography';
import Logo from '../assets/logo.png';
import '../style/MainContent.css';
import { Button } from '@mui/material';

function MainContent() {
    return (
      <div className="app-container">
        <div className="app-background-image"/>
        <img src={Logo} alt="Logo" className="logo" />
  
        <div className="logo-buttons-container">
            <Typography variant="h5" align="center">
            Are you a   _____?
            </Typography> <br />
          <Button variant="contained" color="primary" className="logo-button" >
            Helper
          </Button>
          <Button variant="contained" color="primary" className="logo-button">
            Seeker
          </Button>
        </div>
      </div>
    );
  }
  
  export default MainContent;