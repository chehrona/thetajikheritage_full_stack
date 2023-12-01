import React from "react";
import { BoxSix, Year } from "./poetBioStyles";

export default function SixthBox({ poet }) {
    return (
        <BoxSix>
            <Year color={'#bd9d52'}>{poet?.year}</Year>
            <div dangerouslySetInnerHTML={{__html: poet?.desc}}></div>
        </BoxSix>
    );
}