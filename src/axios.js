import axios from "axios";

const instance = axios.create({
	baseURL:'http://localhost:5001/clone-837e9/us-central1/api' //The API (cloud fucntion)URL
});

export default instance;