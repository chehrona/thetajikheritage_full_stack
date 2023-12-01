import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    min-height: 27rem;
    padding-bottom: 5rem;
`;

export const Header = styled.div`
    height: 6rem;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const Title = styled.div`
    font-weight: bold;
`;

export const LogoWrapper = styled.div`
    border-right: 0.1rem solid #0F0A00;
    height: 5rem;
    margin-right: 0.5rem;
`;

export const PrintHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const RecipeTitle = styled.div`
    font-size: 3rem;
    font-family: "EB Garamond", serif;
    font-style: italic;
    font-weight: 500;
`;

export const Logo = styled.img`
    height: 100%;
    margin-right: 0.5rem;
`;

export const Subtitle = styled.div`
    font-size: 1.1rem;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid #0F0A00;
`;

export const IconBox = styled.div`
    text-align: center;
`;

export const StyledTotalIcon = styled.img`
    width: 1.8rem;
    height: 1.8rem;
`;

export const StyledCookIcon = styled.img`
    width: 2.23rem;
`;

export const StyledServeIcon = styled.img`
    width: 1.8rem;
`;

export const StyledPrepIcon = styled.img`
    width: 1.8rem;
`;

export const QuantityContainer = styled.div`
    text-align: center;
    padding-top: 0.5rem;
`;

export const StyledAddIcon = styled(Add)`
    background: #dedbdb;
    border-radius: 0.5rem;
    color: black;
    
    &.MuiSvgIcon-root {
        font-size: 2rem;
    }
`;

export const ServeAmount = styled.input`
    width: 3rem;
    height: 2rem;
    outline: none;
    font-size: 1.1rem;
    padding: 0.2rem;
    text-align: center;
    font-family: 'IBM Plex Serif', serif;
`;

export const StyledMinusIcon = styled(Remove)`
    background: #dedbdb;
    border-radius: 0.5rem;
    color: black;

    &.MuiSvgIcon-root {
        font-size: 2rem;
    }
`;

export const ServeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PrintContainer = styled.div`
    text-align: center;
    margin-left: 2rem;
`;

export const PrintBox = styled.img`
    width: 1.8rem;
`;

export const ServeBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

export const PrintBodyContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PrintImage = styled.img`
    border-radius: 0.5rem;
    width: 15rem;
    height: 15rem;
    margin-bottom: 1.2rem;
`;

export const LeftSection = styled.div`
    border-right: 0.1rem solid #000;
    padding-right: 1rem;
`;

export const RightSection = styled.div`
    width: 28rem;
    padding-left: 1rem;
`;  

export const Ingredient = styled.div`
    line-height: 2rem;
    font-size: 1.1rem;
`;

export const BoxTitle = styled.div`
    font-size: 2rem;
    font-family: 'EB Garamond', serif;
    font-style: italic;
    font-weight: 500;
    margin-bottom: 1.2rem;
`;

export const DirectionBox = styled.div`
    display: flex;
    align-items: start;
`;

export const StepIndex = styled.div`
    margin-right: 0.5rem;
    line-height: 2rem;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;