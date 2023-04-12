import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderContainer = styled(Flex)`
    position: fixed;
    width: 100%;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
    background-color: black;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;
        font-size: 36px;
        color: white;

        @media(max-width: 550px) {
            font-size: 30px;
        }
    }
`;

export const LogoContainer = styled(Flex)`
    justify-content: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;
        font-size: 48px;

        @media(max-width: 600px) {
            font-size: 44px;
        }
    }
`;

export const SubjectContainer = styled(Flex)`
    justify-content: center;
    background-color: #DCDCDC;
    height: 60px;
    border-radius: 10px;
    cursor: pointer;

    p{
        text-decoration: none;
    }
`;

export const TutorCard = styled(Flex)`
    flex-direction: column;
    width: 250px;
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

export const TutorInfo = styled(Flex)`
    flex-direction: column;
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