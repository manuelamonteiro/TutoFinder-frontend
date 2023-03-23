import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TutorsPage() {
    const navigate = useNavigate();

    return (
        <ScreenCointaner>
            <h2>
                Escolha o seu tutor:
            </h2>
        </ScreenCointaner >
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00CED1;

    h2{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 24px;

        @media(max-width: 700px) {
            font-size: 22px;
        }

        @media(max-width: 450px) {
            font-size: 20px;
        }
    }
`;