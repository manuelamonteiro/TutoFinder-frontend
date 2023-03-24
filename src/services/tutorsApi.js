import api from './api';

export async function getDaysOfActivities(subjectId) {
    const res = await api.get(`/tutors/${subjectId}`);

    return res.data;
}

export async function getDaysOfActivities(tutorId) {
    const res = await api.get(`/tutors/${tutorId}`);

    return res.data;
}