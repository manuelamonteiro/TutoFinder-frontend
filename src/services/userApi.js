import api from './api';

export async function signIn(email, password) {
  const res = await api.post('/sign-in', { email, password });

  return res.data;
}

export async function signUp(name, email, password, confirmPassword) {
  const res = await api.post('/sign-up', { name, email, password, confirmPassword });

  return res.data;
}