import { Fragment } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { red } from "@mui/material/colors";

export default function Help() {
    return (
        <Fragment>
            <div className="container pt-5 mt-5" style={{ paddingLeft: 150, paddingRight: 100, }}>
                <div className="row mb-5">
                    <div className="col-md-12 pt-5 mb-5">
                        <img src="https://s3.amazonaws.com/notify-resources/divider.png"></img>
                    </div>

                    <div className="col-md-6 mb-5">
                        <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
                            <CardHeader
                                avatar={
                                    <img src="https://s3.amazonaws.com/notify-resources/family.svg" alt="avatar" style={{ display: "flex", top: -40 }} />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={
                                    <h1 className="display-6" style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        color: "#e2642c",
                                        marginLeft: 21
                                    }}>Get Notes In One Place</h1>
                                }

                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16, fontWeight: 600, color: "#2b292d" }}>
                                    Are you rapidly taking Notes? stay on top of the newest trends in Note taking.
                                </Typography>
                            </CardContent>
                        </Card>

                    </div>
                    <div className="col-md-6 mb-5">
                        <Card sx={{ maxWidth: 345, boxShadow: "none", border: "none" }}>
                            <CardHeader
                                avatar={
                                    <img src="https://s3.amazonaws.com/notify-resources/b-meeting.svg" alt="avatar" style={{ display: "flex", top: -40 }} />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={
                                    <h1 className="display-6" style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                        color: "#e2642c",
                                        marginLeft: 21
                                    }}>Make your work Smarter</h1>
                                }

                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16, fontWeight: 600, color: "#2b292d" }}>
                                    Invite your friends, collaborate and work together stay on top of the newest trends in Note taking.
                                </Typography>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}