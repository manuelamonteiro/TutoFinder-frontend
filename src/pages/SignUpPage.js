import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";

export default function SignUpPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
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
                        name="name"
                        value={form.name}
                        onChange={handleForm}
                        type="text"
                        required
                        placeholder="nome"
                    />

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

                    <input
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleForm}
                        type="password"
                        required
                        placeholder="confirme a senha"
                    />
                    <button type="submit">Cadastrar</button>
                </form>

                <h2 onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</h2>
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