import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";

export default function SignInPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    return (
        <ScreenCointaner>
            <Logo />
            <AuthForm>
                <form>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        placeholder="e-mail"
                        required
                    />

                    <input
                        name="password"
                        value={form.password}
                        onChange={handleForm}
                        type="password"
                        required
                        placeholder="senha"
                    />
                    <button type="submit">Entrar</button>
                </form>

                <h2 onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</h2>
            </AuthForm>
        </ScreenCointaner >
    )
}

const ScreenCointaner = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00CED1;

    h2{
        font-family: 'Raleway', sans-serif; ;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        cursor: pointer;

        @media(max-width: 600px) {
            font-size: 16px;
        }
    }
`;