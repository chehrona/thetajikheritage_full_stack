import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { IconButton, ClickAwayListener } from "@mui/material";
import { OpenInNew } from '@mui/icons-material';

import {
    DropDownContainer,
    IconContainer,
    Line,
    StyledDownIcon,
    RefContainer,
    Reference,
    SubTitle,
    StyledUpIcon,
    RefWrapper,
    RefBox,
    RefIndex,
    SourceLink
} from "./sourceStyles";

export default function Sources({ data, line, color, title, background }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(0);
    const { lang } = useSetLang();

    function handleClickAway() {
        setIsDropdownOpen(0);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <DropDownContainer>
                <IconContainer>
                    <Line right={1} line={line} />
                    <IconButton onClick={() => setIsDropdownOpen(prevState => !prevState)}>
                        {isDropdownOpen ? <StyledUpIcon line={line} /> : <StyledDownIcon line={line} />}
                    </IconButton>
                    <Line right={0} line={line} />
                </IconContainer>
                    <RefContainer
                        open={isDropdownOpen}
                        color={color}
                        background={background}
                    >
                        <RefWrapper>
                            <SubTitle title={title}>
                                {lang === 'ru' ? 'Литература' : (lang === 'tj' ? 'Адабиёт' : 'References')}
                            </SubTitle>
                            {data?.references[lang].map((source, i) => {
                                return (
                                    <RefBox key={i}>
                                        <RefIndex>
                                            <div>{i + 1}.</div>
                                        </RefIndex>
                                        <Reference dangerouslySetInnerHTML={{__html: source?.name}} />
                                        {source?.link.length ? (
                                            <SourceLink href={source?.link} target="_blank">
                                                <OpenInNew />
                                            </SourceLink>
                                        ) : null}
                                    </RefBox>   
                                )
                            })}
                        </RefWrapper>
                    </RefContainer>
            </DropDownContainer>
        </ClickAwayListener>
    )
}