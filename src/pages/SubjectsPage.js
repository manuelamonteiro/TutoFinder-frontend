import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getSubjects } from "../services/subjectsApi";
import SubjectComponent from "../components/SubjectComponent";
import { AuthContext } from "../contexts/AuthContext";

export default function SubjectsPage() {
    const { config: token } = useContext(AuthContext);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const subjects = await getSubjects(token);
                setSubjects(subjects);
            } catch (error) {
                toast("Erro inesperado!");
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <ScreenCointaner>
                <h2>
                    Selecione a disciplina:
                </h2>

                <SubjectsContainer>
                    {subjects.map((s) => (
                        <SubjectComponent
                            name={s.name}
                            key={s.id}
                            id={s.id}
                        />
                    ))}
                </SubjectsContainer>
            </ScreenCointaner >
        </>
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background-color: #F5F5F5;

    h2{
        margin-top: 50px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 24px;

        @media(max-width: 1150px) {
            font-size: 26px;
        }

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
    grid-template-columns: repeat(4, 240px);
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    row-gap: 12px;

    @media(max-width: 1150px) {
        grid-template-columns: repeat(3, 240px);
    }

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

        @media(max-width: 1150px) {
            font-size: 20px;
        }

        @media(max-width: 800px) {
            font-size: 16px;
        }

        @media(max-width: 550px) {
            font-size: 14px;
        }
    }
`;
