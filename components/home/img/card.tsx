import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import clsx from 'clsx'
import styles from './css/card.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


export function User1() {
    return (
        <Card sx={{ maxWidth: 345, }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                    <TwitterIcon />@random_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                   NoteFill is such an incredible web application ,
                    It makes my work look organised which is easier to work with.

                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}

export function User2() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><InstagramIcon /></span>@smart_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}

export function User3() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><FacebookIcon /></span>@organisation
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}


export function User4() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><TwitterIcon /></span>@school_student
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}

export function User5() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><InstagramIcon /></span>@histogram_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={3.0} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}


export function User6() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><TwitterIcon /></span>@twitter_username
                </Typography>
                <Typography variant="body2" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}

export function User7() {
    return (
        <Card sx={{ maxWidth: 345 }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                <span><InstagramIcon sx={{color: "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)"}} /></span>@lizard_data
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                </Stack>
            </CardActions>
        </Card>
    );
}

// export all the cards
