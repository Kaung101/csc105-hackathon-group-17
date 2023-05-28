import { Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import '../style/Categories.css'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Navbar from '../Components/Navbar';
const itemList = [
  { id: 1, name: 'House', imageUrl: 'house.jpg' },
  { id: 2, name: 'Medicine', imageUrl: 'medicine.jpg' },
  { id: 3, name: 'Food', imageUrl: 'food.jpg' },
  { id: 4, name: 'Clothes', imageUrl: 'cloth.jpg' },
];

export default function Categories() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/helperDataInfo')
  };
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar/>
      <Grid container spacing={2} alignItems="center" justifyContent="center" margin="10px">
        <Grid item xs={12}>
          <div className='wrapper' style={{ textAlign: 'center' }}>
            <h1>What do you need_________?</h1>
          </div>
        </Grid>
        {/* on click */}
        <Grid className="cards" item container spacing={2} justifyContent="center" onClick={handleClick}>
          {itemList.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={item.id}>
              <Card sx={{ border: '1px solid lightgray', borderRadius: '8px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200px"
                  width="150px"
                  image={item.imageUrl}
                  alt={item.name}
                  sx={{
                    objectFit: 'contain',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ margin: 'auto', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {item.name}
                  </Typography>
                </CardContent>
                {index !== itemList.length - 1 && <Divider />}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
