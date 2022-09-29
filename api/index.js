import axios from 'axios';

const URL = 'http://192.168.1.11:5000';

export const handleLoginGuide = (data) =>
    axios.post(`${URL}/GuideAccount/login`, data);

export const getAllVehicle = () => axios.get(`${URL}/Vehicle`);
