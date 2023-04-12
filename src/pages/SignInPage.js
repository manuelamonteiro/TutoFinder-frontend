import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import qs from "query-string";
import axios from "axios";

import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";
import { signIn } from "../services/userApi";
import { AuthContext } from "../contexts/AuthContext";
import { ScreenCointanerSign } from "../assets/ScreenContainers-style";

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

    function redirectToGithub() {
        const GITHUB_AUTH_URL = 'https://github.com/login/oauth/authorize/';
        const params = {
            response_type: 'code',
            scope: 'user public_repo',
            client_id: "0dab468f6b5ac69fed8f",
            redirect_uri: "http://localhost:3000",
        }

        const queryStrings = qs.stringify(params);
        const authorizationUrl = `${GITHUB_AUTH_URL}?${queryStrings}`;
        window.location.href = authorizationUrl;
    }

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParam = urlParams.get("code");
        console.log(codeParam)
        console.log(localStorage.getItem("token") === null)

        if (codeParam) {
            async function getAcessToken() {
                try {
                    const response = await axios.post(`http://localhost:5000/sign-in-oauth`, { code : codeParam });
                    const token = response.data;
                    setConfig(token.token);
                    localStorage.setItem("token", token);
                    navigate('/subjects');
                    toast('Login realizado com sucesso!');
                } catch (err) {
                    toast("Erro inesperado!");
                }
            }
            getAcessToken();
        }
    }, []);

    return (
        <ScreenCointanerSign>
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

                <button onClick={() => redirectToGithub()}>Entrar pelo Github</button>

                <h2 onClick={() => navigate("/sign-up")}>Primeira vez? Cadastre-se!</h2>
            </AuthForm>
        </ScreenCointanerSign>
    )
}