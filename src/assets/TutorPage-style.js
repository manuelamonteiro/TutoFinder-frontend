import styled from "styled-components";

export const TutorPicture = styled.div`
    padding-left: 15px;

        @media(max-width: 700px) {
            padding-left: 0;
        }

        img{
            width: 250px;
            border-radius: 10px;
        }
`;

export const TutorInfo = styled.div`
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

export const BookingContainer = styled.div`
    padding-left: 15px;
`;

export const BookingButton = styled.button`
    background-color: #DCDCDC;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    height: 40px;
    width: 200px;
    margin-top: 15px;
    border-radius: 10px;
`;

export const PaymentContainer = styled.div`
    display: flex;
    padding-left: 15px;
    margin-top: 25px;
`;