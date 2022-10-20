import Axios from 'axios';


const AxiosClient = Axios.create({
    baseURL: "http://localhost:5000",
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export default AxiosClient;