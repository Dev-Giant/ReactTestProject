import { Box, TextareaAutosize, Button } from "@mui/material";
import React, { useState } from "react";
import { MainBox } from "./Home";
import { createMessage } from "../redux/actions/messages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const NewMessage = () => {

    const [message, setMessage] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createMessage(message));
        navigate("/message/all");
    }

    return(
        <MainBox>
            <Box className="mainDiv">
                <form action="post" onSubmit={handleSubmit}>
                    <TextareaAutosize
                        placeholder="place new message here"
                        minRows={6}
                        value={message}
                        onChange={handleChange}>
                    </TextareaAutosize>
                    <Button variant="contained" type="submit">Submit</Button>
                </form>
            </Box>
        </MainBox>
    );
}