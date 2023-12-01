import React from "react";

import Dialog from "../../common/dialog/Dialog";

import {
    Desc,
    InfoContainer,
    StyledContent,
    InfoTitle,
    BodyContainer,
    AwardImg,
    Wrapper,
} from "./awardDialogStyles";

export default function AwardDialog({ awardInfo, setShowAwardInfo, showAwardInfo }) {
    function handleClose() {
        setShowAwardInfo(false);
    }

    return (
        <Dialog
            width={"850px"}
            border={"2rem"}
            open={showAwardInfo}
            handleClose={handleClose}
            backdrop={"rgba(252 246 233 / 30%)"}
            background={"#0F0A00"}
        >
            <StyledContent>
                <InfoContainer>
                    <InfoTitle>{awardInfo?.title}</InfoTitle>
                    <BodyContainer>
                        <Wrapper first={true}>
                            <AwardImg src={awardInfo?.img} />
                        </Wrapper>
                        <Wrapper>
                            <Desc dangerouslySetInnerHTML={{__html: awardInfo?.desc}} />
                        </Wrapper>
                    </BodyContainer>
                </InfoContainer>
            </StyledContent>
        </Dialog>
    );
}