import React from "react";

import { Border, HomeImage, MainContainer } from "./imageBallStyles";

export default function ImageBall({ entry, opacities, index }) {
    return (
        <MainContainer>
            {entry.outer?.map((ball) => {
                return (
                    <Border 
                        key={ball.size}
                        size={ball.size}
                        opacity={opacities[index]}
                        bottom={ball.bottom}
                        right={ball.right}
                        top={ball.top}
                    />
                );
            })}
            {entry.inner?.map((ball, i) => {
                return (
                    <HomeImage
                        key={ball.size}
                        src={ball.img}
                        size={ball.size}
                        opacity={opacities[index]}
                        bottom={ball.bottom}
                        right={ball.right}
                        top={ball.top}
                    />
                );
            })}
        </MainContainer>
    )
}