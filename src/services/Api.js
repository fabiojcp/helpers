import axios from "axios";

const Api = axios.create({
    baseURL: "https://helpers-server.herokuapp.com/"
})

export default Api