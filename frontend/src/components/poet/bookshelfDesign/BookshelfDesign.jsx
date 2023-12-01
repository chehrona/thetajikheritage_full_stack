import React, { useState } from "react";
import BookReader from "../bookReader/BookReader";
import BookDialog from "../bookDialog/BookDialog";

import {
    Book,
    BooksContainer,
    Cuboid,
    CuboidFace,
    MainContainer,
    Shelf,
    BookWrapper,
    StyledTooltip,
} from "./bookshelfDesignStyles";

export default function BookshelfDesign({ shelfNum, work, overlay, setOverlay }) {
    const [openBook, setOpenBook] = useState(false);
    const [bookDialog, setBookDialog] = useState(null);

    function handleBookAction(e) {
        const bookIndex = e.target.getAttribute("data");
        setOverlay(parseInt(bookIndex));

        if (work[overlay - shelfNum]?.msg) {
            setBookDialog(true);
        } else {
            setOpenBook(true);
        }
    }

    return (
        <section>
            <MainContainer>
                <Cuboid>
                    <CuboidFace />
                </Cuboid>
            </MainContainer>
            <BooksContainer>
                {work?.map((book, i) => {
                    return (
                        <StyledTooltip
                            title={book.title}
                            placement="top"
                            arrow={true}
                            key={i}
                        >
                            <span>
                                <BookWrapper>
                                    <Book data={shelfNum + i} src={book.cover} onClick={(e) => handleBookAction(e)}/>
                                </BookWrapper>
                            </span>
                        </StyledTooltip>
                    )
                })}
            </BooksContainer>
            <Shelf />
            {bookDialog && <BookDialog msg={work[overlay - shelfNum]?.msg} bookDialog={true} setBookDialog={setBookDialog} />}
            {openBook && <BookReader book={work[overlay - shelfNum]} setOpenBook={setOpenBook} />}
        </section>
    )
}