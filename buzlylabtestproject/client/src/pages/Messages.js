import React, { useEffect, useState } from 'react'
import { MainBox } from './Home'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMessages } from '../redux/actions/messages';
import { Typography, Box, Button } from '@mui/material';

export const Messages = () => {
    const listMessages = useSelector(state => state.messages)
    const { messages } = listMessages;
    const [ displayCount, setDisplayCount ] = useState(1);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return(
        <MainBox>
            <Box className="mainDiv">
                {messages.filter((message, index) => {
                        return index < 5 * displayCount
                }).map((item, index) =>
                    <Link to={`/message/${item?._id}`} key={index}>
                        <Typography variant ="body1">{item?.description}</Typography>
                    </Link>
                )}
                <Button onClick = {() => setDisplayCount(displayCount + 1)}>Show More</Button>
            </Box>
        </MainBox>
    )
}