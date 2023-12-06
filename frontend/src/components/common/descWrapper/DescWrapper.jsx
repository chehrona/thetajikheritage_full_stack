import React from "react";
import { Tooltip } from "../tooltip/Tooltip";
import { StyledSpan } from "./descWrapperStyles";

export const DescWrapper = ({ desc, TextWrapper }) => {

    const renderContent = () => {
        return Object.keys(desc).map((key) => {
            const content = desc[key];
    
            if (key.startsWith('tooltip')) {
                return <Tooltip key={key} content={content} />;
            } else {
                return <StyledSpan key={key} dangerouslySetInnerHTML={{ __html: content }} />;
            }
        });
    };
  
    return <TextWrapper>{renderContent()}</TextWrapper>;
};