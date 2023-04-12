import styled from "styled-components";

export const ScreenContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F5F5F5;
`;

export const ScreenCointanerSign = styled(ScreenContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        font-size: 20px;
        cursor: pointer;

        @media(max-width: 600px) {
            font-size: 16px;
        }
    }
`;

export const ScreenCointanerSubjects = styled(ScreenContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;

    h2{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        font-size: 28px;

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

export const ScreenCointanerTutors = styled(ScreenContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;

    h2{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        margin-top: 50px;
        font-size: 28px;

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



