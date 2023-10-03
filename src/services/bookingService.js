import API from "./api"

const bookingService = {
    booking: function(data){
        return API.call().get("bookings")
    }
}

export default bookingService