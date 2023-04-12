import { useNavigate } from "react-router-dom";
import { SubjectContainer } from "../assets/ComponentsContainers-style";

export default function SubjectComponent({ name, id }) {
    let navigate = useNavigate();
    return (
        <>
            <SubjectContainer onClick={() => navigate(`/tutors/${id}`)}><p>{name}</p></SubjectContainer>
        </>
    )
}
