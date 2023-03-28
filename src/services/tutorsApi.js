import api from './api';

export async function getTutorsBySubject(subjectId, token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await api.get(`/tutors/${subjectId}`, config);

    return res.data;
}

export async function getTutorInfo(tutorId, token) {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const res = await api.get(`/tutor/${tutorId}`, config);

    return res.data;
}