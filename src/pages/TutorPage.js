import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getTutorInfo } from "../services/tutorsApi";

export default function TutorPage() {
    const navigate = useNavigate();
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState({});

    useEffect(() => {
        async function fetchData() {
            const tutor = await getTutorInfo(tutorId);
            if (tutor.length === 0) {
                toast("Erro inesperado!");
            }
            console.log(tutor)
            setTutor(tutor);
        }

        fetchData();
    }, []);

    async function sendMessage() {
        const message = "Oi! Vi o seu perfil no TutoFinder e gostaria de tirar algumas dúvidas. Você se importa?"
        window.location.href = 'https://wa.me/5521999999999?text=' + encodeURIComponent(message);
    }

    return (
        <>
            <Header />
            <ScreenCointaner>
                <TutorPicture>
                    <img src={tutor.picture} />
                </TutorPicture>
                <TutorInfo>
                    <p><strong><big><big>Nome:</big></big></strong> {tutor.name}</p><br></br>
                    <p><strong><big><big>Preço:</big></big></strong> R${tutor.pricePerHour},00/hora</p><br></br>
                    <p><strong><big><big>Descrição:</big></big></strong> {tutor.description}</p><br></br>
                    <h2 onClick={() => sendMessage()}>Dúvidas? Fale comigo!</h2>
                </TutorInfo>
            </ScreenCointaner >
        </>
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;

    @media(max-width: 700px) {
        flex-direction: column;
    }
`;

const TutorPicture = styled.div`
    padding-left: 15px;

    @media(max-width: 700px) {
        padding-left: 0;
    }

    img{
        width: 250px;
        border-radius: 10px;
    }
`;

const TutorInfo = styled.div`
    margin-top: 25px;
    margin-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;

    p{
        text-align: justify;
        overflow-wrap: break-word;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;

        @media(max-width: 1150px) {
            font-size: 14px;
        }
    }
    
    h2{
        margin-top: 20px;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;
        cursor: pointer;

        @media(max-width: 1150px) {
            font-size: 20px;
        }

        @media(max-width: 800px) {
            font-size: 18px;
        }
    }
`;