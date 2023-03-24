import api from './api';

export async function getTutorsBySubject(subjectId) {
    const res = await api.get(`/tutors/${subjectId}`);

    return res.data;
}

export async function getTutorInfo(tutorId) {
    const res = await api.get(`/tutors/${tutorId}`);

    return res.data;
}