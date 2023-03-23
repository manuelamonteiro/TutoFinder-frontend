import styled from "styled-components";

export default function Logo() {
    return (
        <LogoContainer>
            <h1>TutoFinder</h1>
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-family: 'Saira Stencil One', cursive;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;

        @media(max-width: 600px) {
            font-size: 44px;
        }
    }
`;