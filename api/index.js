import axios from 'axios';

const URL = 'http://192.168.1.7:5000';

export const handleLoginGuide = (data) =>
    axios.post(`${URL}/GuideAccount/login`, data);

export const getCalendarGuide = () => axios.get(`${URL}/CalendarGuide`);
