import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getTutorsBySubject } from "../services/tutorsApi";
import TutorComponent from "../components/TutorComponent";
import { AuthContext } from "../contexts/AuthContext";
import { ScreenCointanerTutors } from "../assets/ScreenContainers-style";
import { TutorsContainer } from "../assets/PrincipalContainers-style";

export default function TutorsPage() {
    const { config: token } = useContext(AuthContext);
    const [tutors, setTutors] = useState([]);
    const { subjectId } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const tutors = await getTutorsBySubject(subjectId, token);
                setTutors(tutors);
            } catch (error) {
                toast("Não existem tutores dessa disciplina ainda.")
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <ScreenCointanerTutors>
                <h2>
                    Escolha o seu tutor:
                </h2>
                <TutorsContainer>
                    {tutors.map((t) => (
                        <TutorComponent
                            key={t.id}
                            name={t.name}
                            price={t.pricePerHour}
                            picture={t.picture}
                            id={t.id}
                        />
                    ))}
                </TutorsContainer>
            </ScreenCointanerTutors >
        </>
    )
}