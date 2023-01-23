import axios from 'axios';

const HTTP = axios.create({
    baseURL: process.env.REACT_APP_API,
});

export const spaceAPI = {
    async getAllArticle() {
        return await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
    }
}

export default HTTP;