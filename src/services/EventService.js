import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/nmmoffit-su/wallace-burgess',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getArticles(perPage, page) {
        return apiClient.get('/articles?_limit=' + perPage + '&_page=' + page)
    },
    getArticle(id) {
        return apiClient.get('/articles/' + id)
    }
}