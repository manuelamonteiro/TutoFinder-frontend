import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TutorPage() {
    const navigate = useNavigate();

    return (
        <ScreenCointaner>
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
`;