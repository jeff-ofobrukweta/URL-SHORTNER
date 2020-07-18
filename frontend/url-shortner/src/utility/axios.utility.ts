import axios from 'axios'

const baseURL = process.env.VUE_APP_API_URL;
const instance = axios.create({
    baseURL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: {
            toString() {
                return `Bearer ${localStorage.getItem('AUTH_TOKEN')}`;
            }
        },
        'Access-Control-Allow-Origin': '*'
    }
    /**
     * TO-DO::Waiting for API to give a timeout
     */
    // timeout: 5000
});



export default instance
