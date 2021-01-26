
import { observable, action, makeAutoObservable, runInAction } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'
import ApiManager from '../../ApiManager'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const apiManager = new ApiManager()

class UserStore {
    constructor() {
        this.user = {}
        this.friends = []
        this.match = []
        this.events = []
        this.profile = {}
        this.currentCoordinates = {}
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
            askToJoin: action,
            get_profile_by_id: action,
            profile: observable,
            currentCoordinates:observable,
            getLocationAsync: action

        })
    }

    assignNewValues = (user) => {
        this.user = user.user
        this.friends = user.friends
        this.match = user.match
        this.user.sports = user.sport
    }
    askToJoin = async (userId, postId) => {
        try {
            const res = await apiManager.addParti({ userId, postId })
            await this.get_events()
            return res
        } catch (error) {
        }
    }
    sign_in = async data => {
        let user
        data.email = data.email.split(' ').join('')
        try {
            user = await apiManager.signIn(data)
        } catch (error) {
            return error
        }
        if (user !== null) {
            if (user.user) {
                this.assignNewValues(user)
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
        // const signInRes = await this.sign_in({email: data.email, password: data.password})
        // this.assingNewValues(user)
        return signUpRes
    }
    create_event = async newEvent => {
        //TBD api create event

        const event = await apiManager.addEvent(newEvent)
        await this.get_events()
        return event
    }

    get_events = async () => {
        const events = await apiManager.getEvents()
        const sportsObj = {}
        this.user.sports.forEach(s => sportsObj[s] = true)
        if (events)
            events.sort((e1, e2) => {
                if (sportsObj[e1.sport] && !sportsObj[e2.sport])
                    return -1
                else if (sportsObj[e2.sport] && !sportsObj[e1.sport])
                    return 1
                return 0
            })
        runInAction(() => {
            this.events = events
        })
    }

    get_user_by_id = async id => {
        const user = await apiManager.getUserById(id)
        if (user !== null) {
            if (user.user) {
                runInAction(() => {
                    this.assignNewValues(user)
                    this.user.id = id
                })
                return { status: true }
            } else {
                return { status: false, res: user }
            }
        } else {
            return { status: false }
        }
    }
    get_profile_by_id = async id => {
        const user = await apiManager.getUserById(id)
        if (user !== null) {
            if (user.user) {
                runInAction(() => {
                    this.profile = user
                    this.profile.id = id
                })
                return { status: true }
            } else {
                return { status: false, res: user }
            }
        } else {
            return { status: false }
        }
    }

    add_friend = async (usersIds) => {
        const friends = await apiManager.addEvent(usersIds)
        this.get_user_by_id(usersIds.mainUserId)

    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          return {
            error: 'Permission to access location was denied',
          }
        }
      
        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
        const { latitude, longitude } = location.coords
        
        runInAction(()=>{

            this.currentCoordinates = { latitude, longitude, latitudeDelta: latitude, longitudeDelta: longitude }
        })
        
      
      };

}
export default UserStore
