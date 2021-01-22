
import { observable, action, makeAutoObservable, runInAction } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import ApiManager from '../../ApiManager'
const apiManager = new ApiManager()

class UserStore {
    constructor() {
        this.user = {}
        this.friends = []
        this.match = []
        this.events = []

        makeAutoObservable(this, {
            user: observable,
            friends: observable,
            events: observable,
            assignNewValues: action,
            sign_in: action,
            sign_out: action,
            sign_up: action,
            create_event: action,
            get_events: action,
            get_user_by_id: action,
            askToJoin:action
        })
    }

    assignNewValues = (user) => {
        this.user = user.user
        this.friends = user.friends
        this.match = user.match
        this.user.sports = user.sport
    }
    askToJoin = async (userId, postId) => {
        console.log(userId,postId);
        try {
            const res = await apiManager.addParti({ userId, postId })
           await this.get_events()
           console.log(res);
           return res
        } catch (error) {
            console.log(error);
        }
    }


    sign_in = async data => {
        let user
        data.email = data.email.split(' ').join('')
        try {
            user = await apiManager.signIn(data)
        } catch (error) {
            console.log(error);
            return error
        }
        if (user !== null) {
            if (user.user) {
                this.assignNewValues(user)
                await this.get_events()
                AsyncStorage.setItem('userId', `${user.user.id}`)
                return { status: true }
            } else {
                return { status: false, res: user }
            }

        } else {
            return { status: false }
        }
    }
    sign_out = () => {
        AsyncStorage.setItem('userId', 'null')
        this.user = {}
        this.user = {}
        this.friends = []
        this.match = []
        this.events = []
    }
    sign_up = async data => {
        data.date = Date.now()
        data.birthDate = data.birthdate
        delete data.birthdate
        const signUpRes = await apiManager.signUp(data)
        console.log(signUpRes);
        // const signInRes = await this.sign_in({email: data.email, password: data.password})
        // this.assingNewValues(user)
        return signUpRes
    }
    create_event = async newEvent => {
        //TBD api create event
        console.log(newEvent);
        const event = await apiManager.addEvent(newEvent)
        console.log(event);
        this.get_events()
    }

    get_events = async () => {
        const events = await apiManager.getEvents()
        const sportsObj = {}
        this.user.sports.forEach(s => sportsObj[s] = true)
        if (events)
            events.sort((e1, e2) => {
                if (sportsObj[e1.sport] && !sportsObj[e2.sport])
                    return 1
                else if (sportsObj[e2.sport] && !sportsObj[e1.sport])
                    return -1
                return 0
            })
        runInAction(() => {
            this.events = events
        })
        console.log(this.events);
    }

    get_user_by_id = async id => {
        const user = await apiManager.getUserById(id)
        if (user !== null) {
            if (user.user) {
                runInAction(() => {
                    this.assignNewValues(user)
                    this.user.id = id
                })
                await this.get_events()
                return { status: true }
            } else {
                return { status: false, res: user }
            }
        } else {
            return { status: false }
        }
    }


}
export default UserStore
