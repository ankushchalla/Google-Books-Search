import axios from "axios";

const API = {
    getAllBooks: function() {
        return axios.get('/api/books');
    },
    deleteBook: function(title) {
        return axios.delete(`/api/books/${title}`);
    },
    saveBook: function(bookData) {
        return axios.post('/api/books', bookData)
    }
}
export default API;