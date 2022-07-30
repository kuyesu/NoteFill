import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './css/pricing.module.css';
import clsx from 'clsx';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export function FreePlan() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, justifyContent: 'center', alignItems: 'center' }}>
            <div className=" pt-3 mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://s3.amazonaws.com/notify-resources/kiteIcon.svg" alt="Paella dish" />

            </div>

            <CardContent sx={{ height: 114, borderRadius: 2, backgroundColor: "rgba(266, 100, 44, 0.02)", justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div className="position-relative" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="position-absolute " style={{ fontSize: 24, fontWeight: 300, color: "#e2642c", textTransform: "capitalize", paddingLeft: 50 }}>Free</div>
                    <div className="position-relative top-0 start-0" style={{ justifyContent: 'center', paddingLeft: 50 }}>
                        <span className={clsx("d-block text-center", styles.pricing)} style={{ fontSize: 57, fontWeight: 700, lineHeight: 0.56, color: "#4d274e", marginBottom: 7, }}>0</span>
                        <span className="d-block text-center" style={{ opacity: 0.6, fontSize: 12, letterSpacing: -0.3, color: "#4d274e", }}>Per Month</span>
                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text" style={{lineHeight: 1.43,fontWeight: 700, color: "#e2642c",fontSize: 14}}>Acess to Basic Features</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Create Notes</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Present Notes</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Note Limites 20</span>

                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-button pt-10", styles.pricinbutton)}>
                    <button type="button" className={clsx("btn ", styles.button)}>Start Now</button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export function StarterPlan() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, justifyContent: 'center', alignItems: 'center' }}>
            <div className=" pt-3 mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://s3.amazonaws.com/notify-resources/ballonIcon.svg" alt="Paella dish" />

            </div>

            <CardContent sx={{ height: 114, borderRadius: 2, backgroundColor: "rgba(266, 100, 44, 0.02)", justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div className="position-relative" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="position-absolute " style={{ fontSize: 24, fontWeight: 300, color: "#e2642c", textTransform: "capitalize", paddingLeft: 50 }}>Starter</div>
                    <div className="position-relative top-0 start-0" style={{ justifyContent: 'center', paddingLeft: 50 }}>
                        <span className={clsx("d-block text-center", styles.pricing)} style={{ fontSize: 57, fontWeight: 700, lineHeight: 0.56, color: "#4d274e", marginBottom: 7, }}>6</span>
                        <span className="d-block text-center" style={{ opacity: 0.6, fontSize: 12, letterSpacing: -0.3, color: "#4d274e", }}>Per Month</span>
                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text" style={{lineHeight: 1.43,fontWeight: 700, color: "#e2642c",fontSize: 14}}>Acess to Advanced Features</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Email Support</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Present Notes</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Help-desk Support</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Invite Classmates upto 20</span>

                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-button pt-10", styles.pricinbutton)}>
                    <button type="button" className={clsx("btn ", styles.button)} style={{
                        backgroundColor: "#e2642c",
                        color: "#fff",
                    }}>Start Now</button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export function ProPlan() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345, justifyContent: 'center', alignItems: 'center' }}>
            <div className=" pt-3 mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://s3.amazonaws.com/notify-resources/rocketIcon.svg" alt="Paella dish" />

            </div>

            <CardContent sx={{ height: 114, borderRadius: 2, backgroundColor: "rgba(266, 100, 44, 0.02)", justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div className="position-relative" style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div className="position-absolute " style={{ fontSize: 24, fontWeight: 300, color: "#e2642c", textTransform: "capitalize", paddingLeft: 50 }}>Pro</div>
                    <div className="position-relative top-0 start-0" style={{ justifyContent: 'center', paddingLeft: 50 }}>
                        <span className={clsx("d-block text-center", styles.pricings)} style={{ fontSize: 57, fontWeight: 700, lineHeight: 0.56, color: "#4d274e", marginBottom: 7, }}>10</span>
                        <span className="d-block text-center" style={{ opacity: 0.6, fontSize: 12, letterSpacing: -0.3, color: "#4d274e", }}>Per Month</span>
                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text" style={{lineHeight: 1.43,fontWeight: 700, color: "#e2642c",fontSize: 14}}>Acess to All Features</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Help-desk support</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Email and Phone Support</span>

                    </div>
                    <div className={clsx("pricing-wrapper", styles.pricingwrapper)}>
                        <span className="pricing-monitor-text">Unlimited Collaborators </span>

                    </div>
                </div>
            </CardContent>
            <CardContent className="border-box" sx={{ borderRadius: 2, justifyContent: "center", alignItems: "center", margin: 3 }}>
                <div>
                    <div className={clsx("pricing-button pt-10", styles.pricinbutton)}>
                    <button type="button" className={clsx("btn ", styles.button)}>Start Now</button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
