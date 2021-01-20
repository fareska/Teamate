const axios = require('axios')

const pHandler = promise => promise.then(data => data.data).catch(error => null)
const sPath = "https://teamate.herokuapp.com"

const apiManager = {
    signIn: data => pHandler(axios.post(`${sPath}/user/emailPass`,data)),
    singUp: data => pHandler(axios.post(`${sPath}/user/user`,data)),
    getUserById: id => pHandler(axios.get(`${sPath}/user/user/${id}`,data)),
}

module.exports = apiManager