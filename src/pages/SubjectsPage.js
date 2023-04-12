import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import Header from "../components/Header";
import { getSubjects } from "../services/subjectsApi";
import SubjectComponent from "../components/SubjectComponent";
import { AuthContext } from "../contexts/AuthContext";
import { ScreenCointanerSubjects } from "../assets/ScreenContainers-style";
import { SubjectsContainer } from "../assets/PrincipalContainers-style";

export default function SubjectsPage() {
    const { config: token } = useContext(AuthContext);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const subjects = await getSubjects(token);
                setSubjects(subjects);
            } catch (error) {
                toast("Erro inesperado!");
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Header />
            <ScreenCointanerSubjects>
                <h2>
                    Selecione a disciplina:
                </h2>

                <SubjectsContainer>
                    {subjects.map((s) => (
                        <SubjectComponent
                            name={s.name}
                            key={s.id}
                            id={s.id}
                        />
                    ))}
                </SubjectsContainer>
            </ScreenCointanerSubjects >
        </>
    )
}
