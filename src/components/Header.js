import styled from "styled-components";
import { BiArrowFromLeft } from "react-icons/bi";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
    const { setConfig } = useContext(AuthContext);
    let navigate = useNavigate();

    function logout() {
        localStorage.clear();
        setConfig(null);
        navigate("/");
    }

    return (
        <LogoContainer>
            <h1>TutoFinder</h1>
            <BiArrowFromLeft size="32px" color="white" onClick={() => logout()} />
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