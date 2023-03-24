import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TutorComponent({ name, price, picture }) {
    const navigate = useNavigate();

    return (
        <>
            <TutorCard>
                <img src={picture} />
                <TutorName>
                    <p>{name}</p>
                </TutorName>
                <TutorPrice>
                    <p>R${price},00/hora</p>
                </TutorPrice>
            </TutorCard>
        </>
    )
}

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