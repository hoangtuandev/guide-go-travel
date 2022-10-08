import axios from 'axios';

const URL = 'http://192.168.1.7:5000';

export const handleLoginGuide = (data) =>
    axios.post(`${URL}/GuideAccount/login`, data);

export const getCalendarGuide = () => axios.get(`${URL}/CalendarGuide`);

export const registerCalendarGuideTour = (data) =>
    axios.post(`${URL}/CalendarGuide/registerCalendarGuideTour`, data);

export const cancelCalendarGuideTour = (data) =>
    axios.post(`${URL}/CalendarGuide/cancelCalendarGuideTour`, data);

export const getCalendarGuideByAccount = (data) =>
    axios.post(`${URL}/CalendarGuide/getCalendarGuideByAccount`, data);

export const getAvairiableCalendarGuide = () =>
    axios.get(`${URL}/CalendarGuide/getAvairiableCalendarGuide`);
