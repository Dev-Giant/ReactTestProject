import React from "react";
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/styles'

export const MainBox = styled(Box)({
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
})

export const Home = () => {
    return(
        <MainBox>
            <Typography variant = 'h3'>Welcome</Typography>
            <Typography variant = 'body1'>This is Message Handling Application</Typography>
            <Box>
                <Button>Create New Message</Button>
                <Button>Message Lists</Button>
            </Box>
        </MainBox>
    )
}