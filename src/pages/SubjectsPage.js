import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

export default function SubjectsPage() {
    const navigate = useNavigate();

    const subjects = [
        "Português",
        "Matemática",
        "Física",
        "Química",
        "Geografia",
        "História",
        "Filosofia",
        "Sociologia",
        "Biologia"
    ];

    return (
        <>
            <Header />
            <ScreenCointaner>
                <h2>
                    Selecione a disciplina:
                </h2>

                <SubjectsContainer>
                    {subjects.map((s) => (
                        <Subject><p>{s}</p></Subject>
                    ))}
                </SubjectsContainer>
            </ScreenCointaner >
        </>
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    h2{
        margin-top: 50px;
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 24px;

        @media(max-width: 800px) {
            font-size: 22px;
        }

        @media(max-width: 550px) {
            font-size: 20px;
        }
    }
`;

const SubjectsContainer = styled.div`
    width: 100%;
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(3, 240px);
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    row-gap: 12px;

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 240px);
    }

    @media(max-width: 550px) {
        grid-template-columns: repeat(1, 240px);
        padding-bottom: 20px;
    }

    p{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;

        @media(max-width: 800px) {
            font-size: 16px;
        }

        @media(max-width: 550px) {
            font-size: 14px;
        }
    }
`;

const Subject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    height: 60px;
    border-radius: 10px;
`;
