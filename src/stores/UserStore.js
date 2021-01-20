
import { observable, action, makeAutoObservable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'

 class UserStore {
    constructor () {
        this.user = {}
        this.friends = []
        this.events = []

        makeAutoObservable(this,{
            user: observable,
            friends: observable,
            events: observable,
            sign_in: action,
            sign_out: action,
            sign_up: action,
            create_event: action,
            get_events: action,
            get_user_by_id: action
        })
    }

    assingNewValues = (user) => {
        if(!user) return 
        this.user= user.userObj
        if(user.id)
            AsyncStorage.setitems('id',user.id)
        this.friends= user.friends
        this.events= user.events
    }
    sign_in = async credentials => {
        //TBD api sign in call
        const user = await null
        this.assingNewValues(user)
        return true // should return true if success
    }
    sign_out = () => {
     
        AsyncStorage.setitems('id',null)
}
    sign_up = async data => {
        //TBD api sign up
        console.log(data)
        const user = await null
        this.assingNewValues(user)
        return true
    }
    create_event = async newEvent => {
        //TBD api create event
        const event = await null
        if(event)
            this.events.splice(0,0,event)
    }
    get_events = async () => {
        //TBD api get events
        const events = await null
        this.events = events
    }
    get_user_by_id = async id => {
        //TBD api call
        const user = await null
        this.assingNewValues(user)
    }
    
}
export default UserStore
