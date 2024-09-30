import axios from 'axios';
axios.defaults.baseURL = "https://hn.algolia.com/api/v12";

async function retreiveArticles() {
    const response = await axios.get("/search?query=react");

    return response.data.hits;
}

const newsService = {
    retreiveArticles,
}

export default newsService;