import axios from 'axios'

let base = 'api'

export default {
//above means provide a function with the name getHelloMessage
    getHelloMessage() {
        // below is the axios call that is making a get request to the api above
        // will auto convert the response into JSON
        return axios.get(base).then(response => {
            return response.data
        })
    }
}