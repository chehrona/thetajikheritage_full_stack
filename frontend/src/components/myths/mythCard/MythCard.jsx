import React, { useState } from "react";
import { useSetLang } from "../../../App";

import {
    MythCardWrapper,
    MythImage,
    StyledLink
} from "./mythCardStyles";

export default function MythCard({ myth, i }) {
    const { lang } = useSetLang();
    const [hovered, setHovered] = useState(0);

    return (   
        <StyledLink
            to={"/customs/mythology/" + myth?.id}
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(0)}
        >
            <MythCardWrapper delay={`${0.01*i}s`}>
                <MythImage src={hovered ? myth?.img?.animated[lang] : myth?.img?.static[lang]} />
            </MythCardWrapper>
        </StyledLink>
    );
}