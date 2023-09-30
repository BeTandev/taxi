import API from "./api"

const userService = {
    user: function(data){
        return API.call().get("users")
    }
}

export default userService