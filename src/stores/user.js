
import { observable, action, makeAutoObservable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import apiManager from '../../ApiManager'

export class Client {
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


    sign_in = async data => {
        const user = await apiManager.signIn(data)
        this.assingNewValues(user)
    }
    sign_out = () => AsyncStorage.setitems('id',null)
    sign_up = async data => {
        const user = await apiManager.signUp(data)
        this.assingNewValues(user)
    }
    create_event = async event => {
        //TBD api create event
        const event = await null
        if(event)
            this.events.splice(0,0,event)
    }
    get_events = async () => {
        const events = await apiManager.getEvents()
        this.events = events
    }
    get_user_by_id = async id => {
        const user = await apiManager.getUserById(id)
        this.assingNewValues(user)
    }
    
}
