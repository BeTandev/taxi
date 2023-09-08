import axios from "axios"

const API = {
    call: function() {
        return axios.create({
            baseURL: 'https://apiuser-zavj.onrender.com/'
        })
    }
}

export default API