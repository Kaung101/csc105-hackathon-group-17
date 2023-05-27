import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const itemList = [
  { id: 1, name: 'House', imageUrl: 'house.jpg' },
  { id: 2, name: 'Medicine', imageUrl: 'medicine.jpg' },
  { id: 3, name: 'Food', imageUrl: 'food.jpg' },
  { id: 4, name: 'Cloth', imageUrl: 'cloth.jpg' },
];

export default function Categories() {

  return (
    <Grid container spacing={2} direction="row" alignItems="center">
      {itemList.map((item) => (
        <Grid item xs={12} sm={6} lg={3} key={item.id}>
	      <Card>
            <Grid container direction="column" spacing={0}>
              <Grid item>
                <CardMedia
                  component="img"
                  height={300}
                  image={item.imageUrl}
                  alt={item.name}
                />
              </Grid>
              <Grid item>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  {/* Add more text content as needed */}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
