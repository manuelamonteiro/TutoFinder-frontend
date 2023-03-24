import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SubjectComponent({ name }) {
    const navigate = useNavigate();

    return (
        <>
            <Subject><p>{name}</p></Subject>
        </>
    )
}

const Subject = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DCDCDC;
    height: 60px;
    border-radius: 10px;
`;
