import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import clsx from 'clsx'
import styles from './css/card.module.css'

export function User1() {
    return (
        <Card sx={{ maxWidth: 345,  }} className={clsx("", styles.card)}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className={clsx("", styles.header)}>
                    @Lrandom_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @smart_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @organisation
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @school_student
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @histogram_user
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @twitter_username
                </Typography>
                <Typography variant="body2"  className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
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
                    @lizard_data
                </Typography>
                <Typography variant="body2" color="text.secondary" className={clsx("", styles.content)}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

// export all the cards
