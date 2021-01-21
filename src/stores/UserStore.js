
import { observable, action, makeAutoObservable, runInAction } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import ApiManager from '../../ApiManager'
const apiManager = new ApiManager()

console.log(apiManager);

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
            get_user_by_id: action
        })
    }

    assignNewValues = (user) => {
        this.user = user.user
        this.friends = user.friends
        this.match = user.match
    }


    sign_in = async data => {
        const user = await apiManager.signIn(data)
        console.log(user);
        if (user !== null) {
            if (user.user) {
                this.assignNewValues(user)
                AsyncStorage.setItem('userId', user.user.id)
                return { status: true }
            } else {
                return { status: false, res: user }
            }

        } else {
            return { status: false }
        }
    }
    sign_out = () => {
        AsyncStorage.setitems('userId', null)
    }
    sign_up = async data => {
        const signUpRes = await apiManager.signUp(data)
        // const signInRes = await this.sign_in({email: data.email, password: data.password})
        // this.assingNewValues(user)
        console.log(signUpRes);
        return signUpRes
    }
    create_event = async newEvent => {
        //TBD api create event
        const event = await null
        if (event)
            this.events.splice(0, 0, event)
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
    }

    get_user_by_id = async id => {
        const user = await apiManager.getUserById(id)
        if (user !== null) {
            if (user.user.first) {
                this.assignNewValues(user)
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
