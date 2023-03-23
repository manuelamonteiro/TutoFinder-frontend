import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import Header from "../components/Header";

export default function TutorsPage() {
    const navigate = useNavigate();

    const tutors = [{
        name: "Jungkook",
        picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
        price: 100
    },
    {
        name: "Jungkook",
        picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
        price: 100
    },
    {
        name: "Jungkook",
        picture: "https://i.pinimg.com/originals/f5/24/e1/f524e1f6b54343107fb85d805f4d73f9.jpg",
        price: 100
    },
    {
        name: "Jungkook",
        picture: "https://i.pinimg.com/originals/49/15/d1/4915d18d1de6c9c11694fc9d3492e4de.jpg",
        price: 100
    }
    ]

    return (
        <>
            <Header />
            <ScreenCointaner>
                <h2>
                    Escolha o seu tutor:
                </h2>
                <TutorsContainer>
                    {tutors.map((t) => (
                        <TutorCard>
                            <img src={t.picture} />
                            <TutorName>
                                <p>{t.name}</p>
                            </TutorName>
                            <TutorPrice>
                            <p>R${t.price},00/hora</p>
                            </TutorPrice>
                        </TutorCard>
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

const TutorCard = styled.div`
    height: 120%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: -webkit-gradient(linear, left top, left bottom, from(black), to(#DCDCDC));
    border-radius: 50px;

    img{
        width: 100px;
        border-radius: 100px;

        @media(max-width: 1150px) {
            width: 90px;
        }

        @media(max-width: 800px) {
            width: 80px;
        }

        @media(max-width: 550px) {
            width: 70px;
        }
    }
`;

const TutorName = styled.div`
        margin-top: 5px;
        padding-left: 5px;
        margin-bottom: 5px;

    p{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        margin-top: 5px;

        @media(max-width: 1150px) {
            font-size: 18px;
        }
    }
`;

const TutorPrice = styled.div`
    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`;