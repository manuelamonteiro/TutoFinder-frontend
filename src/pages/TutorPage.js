import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getTutorInfo } from "../services/tutorsApi";
import PaymentComponent from "../components/PaymentComponent";
import { AuthContext } from "../contexts/AuthContext";
import { createBooking } from "../services/bookingApi";

export default function TutorPage() {
    const { config: token } = useContext(AuthContext);
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState({});
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const tutor = await getTutorInfo(tutorId, token);
            if (tutor.length === 0) {
                toast("Erro inesperado!");
            }
            setTutor(tutor);
        }

        fetchData();
    }, []);

    async function sendMessage() {
        const message = "Oi! Vi o seu perfil no TutoFinder e gostaria de tirar algumas dúvidas. Você se importa?"
        window.location.href = 'https://wa.me/5521999999999?text=' + encodeURIComponent(message);
    }

    async function bookClass() {
        try {
            await createBooking(tutorId, token);
            toast('Agendamento realizado com sucesso!');
        } catch (error) {
            toast('Não foi possível realizar o agendamento!');
        }
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
            <BookingAndPaymentContainer>
                <BookingContainer>
                    <h2>Primeira vez? Agende duas horas de aula e pague apenas uma!</h2>
                    <BookingButton onClick={() => bookClass()}><h2>AGENDAR AULA</h2></BookingButton>
                </BookingContainer>
                {showPayment ?
                    <PaymentContainer>
                        <PaymentComponent />
                    </PaymentContainer> : ""}
            </BookingAndPaymentContainer>
        </>
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 30px;
    background-color: #F5F5F5;

    @media(max-width: 700px) {
        flex-direction: column;
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
`;

const BookingAndPaymentContainer = styled.div`
    width: 100vw;
    padding-bottom: 30px;
    background-color: #F5F5F5;

    @media(max-width: 700px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h2{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;

        @media(max-width: 1150px) {
            font-size: 20px;
        }

        @media(max-width: 800px) {
            font-size: 18px;
        }
    }
`;

const BookingContainer = styled.div`
    padding-left: 15px;
`;

const BookingButton = styled.button`
    background-color: #DCDCDC;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    height: 40px;
    width: 200px;
    margin-top: 15px;
    border-radius: 10px;
`;

const PaymentContainer = styled.div`
    display: flex;
    padding-left: 15px;
    margin-top: 25px;
`;