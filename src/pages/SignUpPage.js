import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "../components/Logo";
import AuthForm from "../components/AuthForm";
import { signUp } from "../services/userApi";
import { ScreenCointanerSign } from "../assets/ScreenContainers-style";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(name, email, password, confirmPassword);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <ScreenCointanerSign>
      <Logo />
      <AuthForm>
        <form onSubmit={submit}>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            required
            placeholder="nome"
          />

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

          <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            required
            placeholder="confirme a senha"
          />
          <button type="submit">Cadastrar</button>
        </form>

        <h2 onClick={() => navigate("/")}>Já tem uma conta? Entre agora!</h2>
      </AuthForm>
    </ScreenCointanerSign >
  )
}