import React from "react";
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/styles'
import { Link } from "react-router-dom"

export const MainBox = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
})

export const Home = () => {
    return(
        <MainBox>
            <Box className="mainDiv">
                <Typography variant = 'h2'>Welcome</Typography>
                <Typography variant = 'body1'>This is Message Handling Application</Typography>
                <Box>
                    <Link to="/message" className = "link">
                        <Button variant="contained" size="large">Create New Message</Button>
                    </Link>
                    <Link to="/message/all" className="link">
                        <Button variant="contained" size="large">Message Lists</Button>
                    </Link>
                </Box>
            </Box>
        </MainBox>
    )
}