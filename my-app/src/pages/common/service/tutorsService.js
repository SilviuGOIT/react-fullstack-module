import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4001/';

async function get() {
    const response = await axios.get('/tutors');

    return response.data;
}

const tutorsService = {
    get,
}

export default tutorsService;