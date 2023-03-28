import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SubjectComponent({ name, id }) {

    return (
        <>
            <Link to={`/tutors/${id}`}>
                <Subject><p>{name}</p></Subject>
            </Link>
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

    p{
        text-decoration: none;;
    }
`;
