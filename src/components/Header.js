import styled from "styled-components";
import {BiArrowFromLeft} from "react-icons/bi";

export default function Header() {
    return (
        <LogoContainer>
            <h1>TutoFinder</h1>
            <BiArrowFromLeft size="32px" color="white"/>
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;
        color: white;

        @media(max-width: 550px) {
            font-size: 30px;
        }
    }
`;