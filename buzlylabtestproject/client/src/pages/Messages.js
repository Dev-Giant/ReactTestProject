import React, { useEffect } from 'react'
import { MainBox } from './Home'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchMessages } from '../redux/actions/messages';
import { Typography, Box } from '@mui/material';

export const Messages = () => {
    const listMessages = useSelector(state => state.messages)
    const { messages, loading, error } = listMessages;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return(
        <MainBox>
            <Box className="mainDiv">
                {messages.map((item, index) =>
                    <Link to={`/message/${item?._id}`}>
                        <Typography variant ="body1" key={index}>{item?.description}</Typography>
                    </Link>
                )}
            </Box>
        </MainBox>
    )
}