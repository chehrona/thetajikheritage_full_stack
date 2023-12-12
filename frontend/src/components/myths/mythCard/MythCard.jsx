import React from "react";

import {
    MythCardWrapper,
    MythImage,
    StyledLink
} from "./mythCardStyles";

export default function MythCard({ myth, i }) {
    return (   
        <StyledLink to={"/language/mythology/" + myth?.id}>
            <MythCardWrapper delay={`${0.01*i}s`}>
                <MythImage src={myth?.img?.card} />
            </MythCardWrapper>
        </StyledLink>
    );
}