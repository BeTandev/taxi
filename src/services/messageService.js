import API from "./api"

const messageService = {
    message: function(data){
        return API.call().get("messages")
    }
}

export default messageService