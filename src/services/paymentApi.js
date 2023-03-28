import api from './api';

export async function createPayment(tutorId) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.post('/payment', { tutorId }, config);

  return res.data;
}