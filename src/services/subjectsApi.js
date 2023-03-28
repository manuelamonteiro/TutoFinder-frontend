import api from './api';

export async function getSubjects(token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await api.get('/subjects', config);

    return res.data;
}