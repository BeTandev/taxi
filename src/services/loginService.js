import API from "./api";

const loginServices = {
    getAll: function(){
        return API.call().get("users")
    }
}

export default loginServices