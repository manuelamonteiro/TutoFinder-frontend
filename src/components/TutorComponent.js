import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function TutorComponent({ name, price, picture, id }) {
    let navigate = useNavigate();

    return (
        <>
            <TutorCard onClick={() => navigate(`/tutor/${id}`)}>
                <img src={picture} />
                <TutorInfo >
                    <p>{name}</p>
                    <p>R${price},00/hora</p>
                </TutorInfo>
            </TutorCard>
        </>
    )
}

const TutorCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    align-items: center;
    background: -webkit-gradient(linear, left top, left bottom, from(black), to(#C0C0C0));
    border-radius: 15px;
    cursor: pointer;

    @media(max-width: 1150px) {
            width: 220px;
        }

        @media(max-width: 800px) {
            width: 205px;
        }

        @media(max-width: 550px) {
            width: 195px;
        }

    img{
        width: 110px;
        padding-top: 8px;
        border-radius: 30px;

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

const TutorInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;

        p{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #fff;
        }
`;