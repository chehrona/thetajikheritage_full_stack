import React, { useState } from "react";
import { useSetLang } from "../../../App";
import MovieDialog from "../movieDialog/MovieDialog";

import { MainContainer, MovieCard, Image, StyledIconButton, StyledExpand, MovieWrapper } from "./poetMovieStyles.js";

export default function PoetMovies({ poet }) {
    const { lang } = useSetLang();
    const [showMovieInfo, setShowMovieInfo] = useState(false);
    const [movieInfo, setMovieInfo] = useState(null);

    function handleMovieDialog(e, movie) {
        setShowMovieInfo(true);
        setMovieInfo(movie);
    }

    return (
        <MainContainer id="Films">
            <MovieWrapper>
                {poet[lang].map((movie, i) => {
                    return (
                        <MovieCard key={i} delay={`${0.1*i}s`}>
                            <Image src={movie.img} />
                            <StyledIconButton onClick={(e) => handleMovieDialog(e, movie)}>
                                <StyledExpand />
                            </StyledIconButton>
                        </MovieCard>
                    )})
                }
            </MovieWrapper>
            <MovieDialog
                movieInfo={movieInfo}
                showMovieInfo={showMovieInfo}
                setShowMovieInfo={setShowMovieInfo}
            />
        </MainContainer>
    );
}