import { useState, useContext, useEffect } from "react";
import { redirect, useNavigate, Redirect } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";

export default function TutorPage() {
    const navigate = useNavigate();

    const tutor = [{
        name: "Jungkook",
        picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum ut nibh id convallis. Praesent vitae lorem id dolor aliquam bibendum. Sed quis congue quam, id rutrum turpis. Donec a blandit dolor. Duis arcu ex, ultricies a vulputate eu, feugiat eu mauris. Donec pharetra libero sed orci fringilla, sed pellentesque dolor semper. In hac habitasse platea dictumst. Sed vitae vestibulum massa, in sodales neque. Fusce sollicitudin venenatis libero. Cras auctor, risus ut tristique tristique, neque justo egestas est, a tincidunt ante eros vitae purus. Aenean et justo bibendum, rhoncus nisi et, ultrices velit. Etiam id iaculis nisi, vitae condimentum nisi. Pellentesque in iaculis diam, at accumsan libero. Morbi magna dui, pretium vitae tortor eu, sagittis finibus diam. Nullam sit amet nisi sem. Duis elementum, quam nec pulvinar placerat, neque magna egestas enim, eget finibus massa eros ut mi. Sed mollis, mauris consequat scelerisque eleifend, neque justo tincidunt lectus, quis dapibus erat quam et urna. Proin lacinia tempus efficitur. Aenean maximus ornare orci vitae egestas. In eleifend gravida lacus at fringilla. Aliquam eget neque in dolor sagittis semper. Sed vitae iaculis libero. Proin luctus, velit et bibendum placerat, leo erat porta eros, in faucibus dui leo nec massa. Nulla ante tortor, laoreet in leo sit amet, elementum vestibulum ex."
    }];

    async function sendMessage() {
        const message = "Oi! Vi o seu perfil no TutoFinder e gostaria de tirar algumas dúvidas. Você se importa?"    
        window.location.href = 'https://wa.me/5521999999999?text=' + encodeURIComponent(message);
    }

    return (
        <>
            <Header />
            <ScreenCointaner>
                <TutorPicture>
                    <img src={tutor[0].picture} />
                </TutorPicture>
                <TutorInfo>
                    <p><strong><big><big>Nome:</big></big></strong> {tutor[0].name}</p><br></br>
                    <p><strong><big><big>Preço:</big></big></strong> R${tutor[0].price},00/hora</p><br></br>
                    <p><strong><big><big>Descrição:</big></big></strong> {tutor[0].description}</p><br></br>
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