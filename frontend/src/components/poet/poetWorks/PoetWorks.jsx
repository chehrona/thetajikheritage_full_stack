import React, { useState } from "react";
import { useSetLang } from "../../../App";
import { useMediaQuery } from 'react-responsive';

import BookshelfDesign from "../bookshelfDesign/BookshelfDesign";
import { MainContainer } from "./poetWorksStyles";

export default function PoetWorks({ poet }) {
    const { lang } = useSetLang();
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [overlay, setOverlay] = useState(null);
    const numBooks = poet[lang].length;
    let shelfNum;

    if (isMobile) {
        shelfNum = Math.ceil(numBooks/2);
    } else {
        shelfNum = Math.ceil(numBooks/4);
    }

    function renderShelves(n){
        let shelves = [];

        if (isMobile) {
            for (let i = 0; i < n; i++) {
                shelves.push(<BookshelfDesign
                                key={i}
                                overlay={overlay}
                                setOverlay={setOverlay}
                                shelfNum={i * 2}
                                work={poet[lang].slice(i * 2, (i + 1) * 2)}
                            />);
            }
        } else {
            for (let i = 0; i < n; i++) {
                shelves.push(<BookshelfDesign
                                key={i}
                                overlay={overlay}
                                setOverlay={setOverlay}
                                shelfNum={i * 4}
                                work={poet[lang].slice(i * 4, (i + 1) * 4)}
                            />);
            }
        }

        return shelves;
    }

    return (
        <MainContainer id='Works'>
            {renderShelves(shelfNum)}
        </MainContainer>
    )
}