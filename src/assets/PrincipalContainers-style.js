import styled from "styled-components";

const PrincipalContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

const Flex = styled.div`
    display: flex;
    align-items: center;
`;

export const TutorsContainer = styled(PrincipalContainer)`
    padding-bottom: 40px;
    grid-template-columns: repeat(4, 220px);
    column-gap: 50px;
    row-gap: 30px;

    @media(max-width: 1150px) {
        grid-template-columns: repeat(3, 210px);
        column-gap: 25px;
    }

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 200px);
        column-gap: 25px;
    }

    @media(max-width: 550px) {
        grid-template-columns: repeat(1, 180px);
        column-gap: 25px;
    }
`;

export const SubjectsContainer = styled(PrincipalContainer)`
    grid-template-columns: repeat(4, 240px);
    column-gap: 15px;
    row-gap: 12px;

    @media(max-width: 1150px) {
        grid-template-columns: repeat(3, 240px);
    }

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 240px);
    }

    @media(max-width: 550px) {
        grid-template-columns: repeat(1, 240px);
        padding-bottom: 20px;
    }

    p{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        font-size: 22px;

        @media(max-width: 1150px) {
            font-size: 20px;
        }

        @media(max-width: 800px) {
            font-size: 16px;
        }

        @media(max-width: 550px) {
            font-size: 14px;
        }
    }
`;

export const TutorCointaner = styled(Flex)`
    padding-top: 100px;
    padding-bottom: 30px;

        @media(max-width: 700px) {
            flex-direction: column;
        }

        h2{
            font-family: 'Raleway', sans-serif; ;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            margin-top: 20px;
            font-size: 22px;
            cursor: pointer;

                @media(max-width: 1150px) {
                    font-size: 20px;
                }

                @media(max-width: 800px) {
                    font-size: 18px;
                }
        }
`;

export const BookingAndPaymentContainer = styled(Flex)`
    padding-bottom: 30px;

        @media(max-width: 700px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        h2{
            font-family: 'Raleway', sans-serif; ;
            font-style: normal;
            font-weight: 700;
            line-height: 24px;
            font-size: 22px;

                @media(max-width: 1150px) {
                    font-size: 20px;
                }

                @media(max-width: 800px) {
                    font-size: 18px;
                }
        }
`;
