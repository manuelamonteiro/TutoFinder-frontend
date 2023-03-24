import api from './api';

export async function getSubjects() {
    const res = await api.get('/subjects');

    return res.data;
}