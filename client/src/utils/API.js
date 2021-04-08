import axios from "axios";

const API = {
    getAllBooks: function() {
        return axios.get('/api/books');
    },
    deleteBook: function(title) {
        return axios.delete(`/api/books/${title}`);
    }
}
export default API;