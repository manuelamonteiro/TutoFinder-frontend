import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getTutorsBySubject } from "../services/tutorsApi";
import TutorComponent from "../components/TutorComponent";

export default function TutorsPage() {
    const navigate = useNavigate();
    const [tutors, setTutors] = useState([]);
    const { subjectId } = useParams();

    useEffect(() => {
        async function fetchData() {
            const tutors = await getTutorsBySubject(subjectId);
            if (tutors.length === 0) {
                toast("Não temos tutores dessa disciplina ainda :(");
            }
            setTutors(tutors);
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <ScreenCointaner>
                <h2>
                    Escolha o seu tutor:
                </h2>
                <TutorsContainer>
                    {tutors.map((t) => (
                        <TutorComponent
                            key={t.id}
                            name={t.name}
                            price={t.pricePerHour}
                            picture={t.picture}
                        />
                    ))}
                </TutorsContainer>
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

const TutorsContainer = styled.div`
    width: 100%;
    display: grid;
    margin-top: 50px;
    padding-bottom: 40px;
    grid-template-columns: repeat(4, 220px);
    justify-content: center;
    align-items: center;
    column-gap: 25px;
    row-gap: 50px;

    @media(max-width: 1150px) {
        grid-template-columns: repeat(3, 210px);
    }

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 200px);
    }

    @media(max-width: 550px) {
        grid-template-columns: repeat(1, 180px);
    }
`;