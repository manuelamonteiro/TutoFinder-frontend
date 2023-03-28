import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast } from "react-toastify";

import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";
import { signIn } from "../services/userApi";
import { AuthContext } from "../contexts/AuthContext";

export default function SignInPage() {
    const navigate = useNavigate();
    const { setConfig, config } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(event) {
        event.preventDefault();

        try {
            const userData = await signIn(email, password);
            setConfig(userData.token);
            localStorage.setItem("token", userData.token);
            toast('Login realizado com sucesso!');
            navigate('/subjects');
        } catch (err) {
            toast('Não foi possível fazer o login!');
        }
    }

    return (
        <ScreenCointaner>
            <Logo />
            <AuthForm>
                <form onSubmit={submit}>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e-mail"
                        required
                    />

                    <input
                        name="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
    background-color: #F5F5F5;

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