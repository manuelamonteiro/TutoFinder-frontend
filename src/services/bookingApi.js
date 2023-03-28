import api from './api';

export async function createBooking(tutorId, token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const res = await api.post('/booking', { tutorId }, config);

  return res.data;
}