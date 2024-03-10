import axios from "axios";

//https://www.cttcodigopostal.pt/api/v1/f8e35eceef4346948c822394dd92c794/2835-457

const api = axios.create({
    baseURL: "https://www.cttcodigopostal.pt/api/v1/f8e35eceef4346948c822394dd92c794/"
})

export default api;