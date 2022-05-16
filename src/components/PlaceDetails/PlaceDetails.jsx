import React from "react"
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './PlaceDetailsStyles';

function PlaceDetails({place, selected, refProp}) {
    if (selected) {
        refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 

    const classes = useStyles()

    return (
        <Card elevation={6}>
        <CardMedia style={{height: 350}}
        image={place.photo ? place.photo.images.large.url : 'https://www.petmd.com/sites/default/files/2187242989_2eacb23b1e_z-slide1.jpg'}
        title={place.name}
        />
        <CardContent>
            <Box display="flex" justifyContent="space-between">
                <Rating value={Number(place.rating)} readOnly />
                <Typography variant="subtitle1">{place.distance_string}</Typography>
            </Box>

            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <Typography variant="overline">{place.open_now_text}</Typography>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">{place.price_level}</Typography>
                <Typography gutterBottom variant="subtitle1">{place.num_reviews} Reviews</Typography>
            </Box>

            <hr/>

            <Box>
                <Typography variant="button" paragraph>{place.ranking}</Typography>
                <Typography variant="body2">{place.description}</Typography>
            </Box>

            {place?.cuisine?.map(({name}) => (
                <Chip key={name} size="small" label={name} className={classes.chip}/>
            ))}

            {place?.address && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                    <LocationOnIcon/> {place.address}
                </Typography>
            )}

            {place?.phone && (
                <Typography gutterBottom variant="body2" color="textSecondary" className={classes.spacing}>
                    <PhoneIcon/> {place.phone}
                </Typography>
            )}

            <CardActions>
                <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                </Button>
                <Button size="small" color="primary" onClick={() => window.open(place.website_url, '_blank')}>
                    Website
                </Button>
            </CardActions>
        </CardContent>
        </Card>
    )
}


export default PlaceDetails