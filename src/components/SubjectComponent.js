import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SubjectComponent({ name, id }) {
    let navigate = useNavigate();
    return (
        <>
            <Subject onClick={() => navigate(`/tutors/${id}`)}><p>{name}</p></Subject>
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
    cursor: pointer;

    p{
        text-decoration: none;;
    }
`;
