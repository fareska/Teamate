const axios = require('axios')

class ApiManager {
    constructor() {
        this.pHandler = promise => promise.then(data => data.data).catch(error => null)
        this.sPath = "https://teamate.herokuapp.com"
    }

    signIn = async data => this.pHandler(axios.post(`${this.sPath}/user/user/emailPass`, data))
    signUp = async data => this.pHandler(axios.post(`${this.sPath}/user/user`, data))
    getUserById = async id => this.pHandler(axios.get(`${this.sPath}/user/user/${id}`))
    getEvents = async () => this.pHandler(axios.get(`${this.sPath}/posts`))
}

export default ApiManager