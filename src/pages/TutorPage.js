import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getTutorInfo } from "../services/tutorsApi";
import PaymentComponent from "../components/PaymentComponent";
import { AuthContext } from "../contexts/AuthContext";
import { createBooking } from "../services/bookingApi";
import { ScreenContainer } from "../assets/ScreenContainers-style";
import { TutorCointaner, BookingAndPaymentContainer } from "../assets/PrincipalContainers-style";
import { TutorInfo, TutorPicture, BookingContainer, BookingButton, PaymentContainer } from "../assets/TutorPage-style";

export default function TutorPage() {
    const { config: token } = useContext(AuthContext);
    const { tutorId } = useParams();
    const [tutor, setTutor] = useState({});
    const [emptyPage, setEmptyPage] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const tutor = await getTutorInfo(tutorId, token);
                setTutor(tutor);
            } catch (error) {
                toast("Erro inesperado!");
                setEmptyPage(true);
            }
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
        (!emptyPage ?
            (<ScreenContainer>
                <Header />
                <TutorCointaner>
                    <TutorPicture>
                        <img src={tutor.picture} />
                    </TutorPicture>
                    <TutorInfo>
                        <p><strong><big><big>Nome:</big></big></strong> {tutor.name}</p><br></br>
                        <p><strong><big><big>Preço:</big></big></strong> R${tutor.pricePerHour},00/hora</p><br></br>
                        <p><strong><big><big>Descrição:</big></big></strong> {tutor.description}</p><br></br>
                        <h2 onClick={() => sendMessage()}>Dúvidas? Fale comigo!</h2>
                    </TutorInfo>
                </TutorCointaner >
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
            </ScreenContainer>
            ) :
            <ScreenContainer>
                <Header />
            </ScreenContainer>)
    )
}