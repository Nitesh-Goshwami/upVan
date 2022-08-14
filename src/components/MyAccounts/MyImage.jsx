import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
const MyIamge = () => {
    return (
        <Stack >
            <Avatar sx={{
                bgcolor: deepOrange[500],
                width: 100,
                height: 100,
                margin: "auto",
                textAlign: "center",
                marginTop: "20px"
            }} src="/static/images/avatar/2.jpg" />
            <br />
            <h3>User Name</h3>
            <span>sample@gmail.com</span>
        </Stack>
    );
}

export { MyIamge }


