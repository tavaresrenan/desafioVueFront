import axios from 'axios';

const ApiService = {
    init() {
        axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
    },
    get(resource) {
        return axios.get(resource);
    }
}

export default ApiService;