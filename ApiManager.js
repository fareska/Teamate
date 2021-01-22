const axios = require('axios')

class ApiManager {
    constructor() {
        this.pHandler = promise => promise.then(data => {
            return data.data
        }).catch(error => null)
        this.sPath = "https://teamate.herokuapp.com"
    }

    signIn = async data => {
        console.log(data);
        console.log('apiManager received request');
        try {
            const user = await axios.post(`${this.sPath}/user/user/emailPass`, data)
            console.log('request resolved');
            console.log(user.data)
            return user.data
        } catch (error) {
            console.log(error)
            return error
        }

    }
    signUp = async data => {
        try {
            const res = await axios.post(`${this.sPath}/user/user`, data)
            console.log(res);
            return  res

        } catch (error) {
            console.log(error)
            return error
        }
    }
    getUserById = async id => await this.pHandler(axios.get(`${this.sPath}/user/user/${id}`))
    getEvents = async () => await this.pHandler(axios.get(`${this.sPath}/posts`))
}

export default ApiManager