import API from "./api"

const messageService = {
    message: function(){
        return API.call().get("messages")
    },

}

export default messageService