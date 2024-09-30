import axios from "axios"

axios.defaults.baseURL = 'http://localhost:4001/';

async function get() {
    const response = await axios.get('/faculties')

    return response.data
}

async function getItem(id) {
    const response = await axios.get(`/faculties/${id}`)

    return response.data
}

async function create(item) {
    const response = await axios.post(`/faculties/`, item)

    return response.data
}

async function remove(itemId) {
    const response = await axios.delete(`/faculties/${itemId}`)

    return response.data
}

async function update(itemId, item) {
    const response = await axios.put(`/faculties/${itemId}`, item)

    return response.data
}

const facultiesService = {
    get,
    getItem,
    create,
    remove,
    update
}

export default facultiesService;