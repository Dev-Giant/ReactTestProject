import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { MainBox } from './Home';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSingleMessage } from "../redux/actions/messages";

export const MessageDetail = () => {
    const { messageid } = useParams();
    const dispatch = useDispatch();
    const currentMessages = useSelector(state => state.messages);
    const { currentMessage } = currentMessages;

    useEffect(() => {
        dispatch(fetchSingleMessage(messageid));
    }, [dispatch, messageid]);
    
    return(
        <MainBox>
            <Box className="mainDiv">
                <Typography>
                    ID: {currentMessage?._id}
                </Typography>
                <Typography>
                    Message: {currentMessage?.description}
                </Typography>
            </Box>
        </MainBox>
    );
}