import { Box, TextareaAutosize } from "@mui/material";
import React from "react";
import { MainBox } from "./Home";

export const NewMessage = () => {

    const handleSubmit = () => {
        
    }

    return(
        <MainBox>
            <Box>
                <form  onSubmit={handleSubmit}>
                    <TextareaAutosize
                        placeholder="place new message here"
                        minRows={5}>
                    </TextareaAutosize>
                    <Button variant="contained">Submit</Button>
                </form>
            </Box>
        </MainBox>
    );
}