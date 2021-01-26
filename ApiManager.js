const axios = require('axios')

class ApiManager {
    constructor() {
        this.pHandler = promise => promise.then(data => {
            return data.data
        }).catch(error => null)
        this.sPath = "https://teamate.herokuapp.com"
    }

    signIn = async data => {
        console.log('apiManager received request');
        try {
            const user = await axios.post(`${this.sPath}/user/user/emailPass`, data)
            console.log('request resolved');
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
            return res

        } catch (error) {
            console.log(error)
            return error
        }
    }
    getUserById = async id =>{
        console.log(id);
        try {
        const data = await axios.get(`${this.sPath}/user/user/${id}`)
        return data.data 
        } catch (error) {
            console.log(error);
            return error
        }
    
    }
    getEvents = async () => await this.pHandler(axios.get(`${this.sPath}/posts`))
    getEventById = async id => await this.pHandler(axios.get(`${this.sPath}/posts/${id}`))
    getCountries = async () => await this.pHandler(axios.get(`${this.sPath}/user/user/all/column/country`))
    getSports = async () => await this.pHandler(axios.get(`${this.sPath}/user/user/all/column/sport`))
    
    addFriend = async data => { 
        try {
            const res = await axios.post(`${this.sPath}/user/user/addFriend`, data)
            return res
        } catch (err) { return err }
    }

    addEvent = async data => { 
        try {
            const res = await axios.post(`${this.sPath}/post`, data)
            return res
        } catch (err) { return err }
    }

    addComment = async data => {
        
        try {
            const res = await axios.post(`${this.sPath}/post/comment`, data)
            return res
        } catch (err) { return err }
    }
    getComments = async (id) => {
        console.log(id);
        try {
            const res = await axios.get(`${this.sPath}/post/comment/${id}`)
            return res
        } catch (err) { return err }
    }

    deleteComment = async id => {
        try {
            const res = await axios.delete(`${this.sPath}/post/comment/${id}`)
            return res
        } catch (err) { return err }
    }

    addParti = async data => {
        try {
            const res = await axios.post(`${this.sPath}/post/participant`, data)
            return res
        } catch (err) { return err }
    }
    
    deactivateEvent = async id =>{
        try {
            const res = await axios.put(`${this.sPath}/post/deactivate/${id}`)
            return res
        } catch (err) { return err }
        
    }

    deleteEvent = async id =>{
        try {
            const res = await axios.delete(`${this.sPath}/post/${id}`)
            return res
        } catch (err) { return err }
    }



}

export default ApiManager