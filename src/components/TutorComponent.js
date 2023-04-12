import { useNavigate } from "react-router-dom";
import { TutorCard, TutorInfo } from "../assets/ComponentsContainers-style";

export default function TutorComponent({ name, price, picture, id }) {
    let navigate = useNavigate();

    return (
        <>
            <TutorCard onClick={() => navigate(`/tutor/${id}`)}>
                <img src={picture} />
                <TutorInfo >
                    <p>{name}</p>
                    <p>R${price},00/hora</p>
                </TutorInfo>
            </TutorCard>
        </>
    )
}