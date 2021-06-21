import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.npoint.io/869f817b230049e56b6d',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    getArticles() {
        return apiClient.get('/articles')
    },
    getArticle(id) {
        return apiClient.get('/articles/' + id)
    }
}