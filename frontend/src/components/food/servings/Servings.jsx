import React from "react";
import { useEffect } from "react";
import { useSetLang } from "../../../App";

import { IconButton } from "@mui/material";

import {
    QuantityContainer,
    ServeAmount,
    StyledAddIcon,
    StyledMinusIcon,
    SubTitle,
    ServeContainer,
} from "./servingsStyles"

export default function Servings({ servings, setServings }) {
    const { lang } = useSetLang();

    useEffect(() => {
        if (servings?.length > 0 && !parseInt(servings)) {
            setServings(1);
        } 

        if (servings?.length > 0 && servings < 0) {
            setServings(1);
        }
    }, [servings]);

    function reduceServings() {
        let inputValue = servings;
        if (inputValue > 1) {
            inputValue = inputValue - 1;
            setServings(inputValue);
        }
    }

    function increaseServings(e) {
        let inputValue = servings;
        inputValue = inputValue + 1;
        setServings(inputValue);
    }

    function getServings(e) {
        let inputValue = e.target.value;
        setServings(inputValue);
    }

    return (
        <QuantityContainer>
            <SubTitle>
                {lang === 'ru' ? 'Порции' : 
                (lang === 'tj' ? 'Портсия' : 'Servings')}
            </SubTitle>
            <ServeContainer>
                <IconButton onClick={reduceServings}>
                    <StyledMinusIcon />
                </IconButton>
                <ServeAmount value={servings} onChange={(e) => getServings(e)}/>
                <IconButton onClick={increaseServings}>
                    <StyledAddIcon />
                </IconButton>
            </ServeContainer>
        </QuantityContainer>
    )
}