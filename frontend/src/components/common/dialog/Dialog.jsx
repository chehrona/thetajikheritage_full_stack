import React from "react";

import { Zoom } from '@mui/material';

import {
    StyledDialog,
    StyledCloseButton,
    StyledCloseIcon
} from "./dialogStyles";

const Transition = ({ children, ...props }) => (
    <Zoom {...props}>
        {children}
    </Zoom>
);

export default function Dialog({
    handleClose,
    open,
    children,
    width,
    backdrop,
    background,
    height,
    border
}) {
    return (
        <StyledDialog
            open={open}
            fullWidth
            TransitionComponent={Transition}
            TransitionProps={{
                in: open,
                easing: {enter: "linear", exit: "linear"}
            }}
            width={width}
            border={border}
            height={height}
            backdrop={backdrop}
            background={background}
        >
            <StyledCloseButton onClick={handleClose}>
                <StyledCloseIcon />
            </StyledCloseButton>
            {children}
        </StyledDialog>
    );
}