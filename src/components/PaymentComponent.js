import styled from "styled-components";

export default function PaymentComponent() {
    return (
        <PaymentContainer>
            <h2>Agora realize o pagamento para confirmar:</h2>
        </PaymentContainer>
    );
}

const PaymentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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