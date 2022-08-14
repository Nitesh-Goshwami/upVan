import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const { url, handleUser } = props
    return (
        <Card onClick={() => { handleUser() }} sx={{ maxWidth: "100%", display: "flex", textAlign: "left",marginTop:"20px" }}>
            <CardMedia
                component="img"
                height="80"
                image={url}
                alt="user"
                style={{ width: "20%", border: "1px solid lightgreen", margin: "10px", borderRadius: "50px", cursor: "pointer" }} />
            <CardContent>
                <Typography gutterBottom variant="small" component="div" style={{ fontFamily: "Quattrocento , serif" }}>
                    Hello,
                </Typography>
                <Typography variant="h5" color="text.primary" style={{ fontFamily: "Quattrocento , serif" }}>
                    User Name
                </Typography>
            </CardContent>
        </Card>
    );
}
