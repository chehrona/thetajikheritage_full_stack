import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { langNames } from "./langNames";
import { ClickAwayListener } from "@mui/material";

import { 
    StyledFlag,
    FlagWrapper,
    FlagDropdown,
    StyledIconButton,
    StyledTooltip
} from "./flagsStyles";

export default function Flags() {
    const [showLangMenu, setShowLangMenu] = useState(false),
        { lang, setLang } = useSetLang();

    function showLangOptions() {
        setShowLangMenu(true);
    }

    function changeLang(e) {
        const iconTitle = e.currentTarget.getAttribute("data");

        setLang(iconTitle);
        setShowLangMenu(false);
    }

    function handleClickAway() {
        setShowLangMenu(false);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <FlagWrapper>
                <FlagDropdown showLangMenu={showLangMenu}>
                    {lang !== 'us' && <StyledIconButton data='us' onClick={changeLang}>
                        <StyledTooltip title={langNames['us']} placement="right" arrow>
                            <span><StyledFlag lang={'us'}></StyledFlag></span>
                        </StyledTooltip> 
                    </StyledIconButton>}
                    {lang !== 'tj' && <StyledIconButton data='tj' onClick={changeLang}>
                        <StyledTooltip title={langNames['tj']} placement="right" arrow>
                            <span><StyledFlag lang={'tj'}></StyledFlag></span>
                        </StyledTooltip> 
                    </StyledIconButton>}
                    {/* {lang !== 'kh' && <StyledIconButton data='kh' onClick={changeLang}>
                        <StyledTooltip title={langNames['kh']} placement="right" arrow>
                            <span><StyledFlag lang={'kh'} hovered={"true"}></StyledFlag></span>
                        </StyledTooltip>  
                    </StyledIconButton>} */}
                    {lang !== 'ru' && <StyledIconButton data='ru' onClick={changeLang}>
                        <StyledTooltip title={langNames['ru']} placement="right" arrow>
                            <span><StyledFlag lang={'ru'}></StyledFlag></span>
                        </StyledTooltip> 
                    </StyledIconButton>}
                </FlagDropdown>
                <StyledIconButton onMouseEnter={showLangOptions}>
                    <StyledTooltip title={langNames[lang]} placement="right" arrow>
                        <span><StyledFlag lang={lang}></StyledFlag></span>
                    </StyledTooltip> 
                </StyledIconButton>
            </FlagWrapper>
        </ClickAwayListener>
    )
} 