
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

export default function DisplayCartoonShows({tvShows})
{
    console.log(tvShows)
    return(
        <>
            <Grid container spacing={3}>
                {tvShows.map((tvshow)=>{
                   return <Grid key={tvshow.id}>
                        <Card>
                            <CardMedia component="img" height="250" width="250" alt='No Image Available' image={tvshow.image} item xs={12} sm={6} md={4} lg={3}>
                            </CardMedia>
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    {tvshow.title}
                                </Typography>
                                <Typography variant='h4'>
                                    {tvshow.episodes}
                                </Typography>
                                <Typography variant='h4'>
                                    {tvshow.year}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                })}

                
            </Grid>      
        </>
    )
}