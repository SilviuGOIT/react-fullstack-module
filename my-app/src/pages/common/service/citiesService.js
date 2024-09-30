import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4001/';

async function get() {
    const response = await axios.get('/cities/');

    return response.data;
}

async function create(city) {
    const response = await axios.post('/cities/', city);

    return response.data;
}

async function remove(cityId) {
    const response = await axios.delete(`/cities/${cityId}`);
}

async function update(cityId, city) {
    const response = await axios.put(`/cities/${cityId}`, city);
}

const citiesService = {
    get,
    create,
    remove,
    update
}

export default citiesService;