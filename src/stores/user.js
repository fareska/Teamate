
import { observable, action, makeAutoObservable } from 'mobx'
import AsyncStorage from '@react-native-community/async-storage'

export class Client {
    constructor () {
        

        makeAutoObservable(this,{
            first: observable,
            last: observable,
            mobile: observable,
            country: observable,
            city: observable,
            email: observable,
            password: observable,
            birthday: observable,
            date: observable,
            image: observable,
            gender: observable,
            active: observable,
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
        this.first= user.first,
        this.last= user.last,
        this.mobile= user.mobile,
        this.country= user.country,
        this.city= user.city,
        this.email= user.email,
        this.password= user.password,
        this.birthday= user.birthday,
        this.date= user.date,
        this.image= user.image,
        this.gender= user.gender,
        this.active= user.active,
        this.friends= user.friends,
        this.events= user.events
    }


    sign_in = async user => {
        //TBD api sign in call
        const user = await null
        this.assingNewValues(user)
    }
    sign_out = () => {
 
    }
    sign_up = async data => {

    }
    create_event = async event => {

    }
    get_events = async () => {

    }
    get_user_by_id = async id => {
        //TBD api call
        const user = await null
        this.assingNewValues(user)
    }
    
}


// {
//     userObj:
//     {
//         first:"fname",
//         last:"lname",
//         mobile:"string",
//         country:"country",
//         city:"city",
//         email:"email",
//         password:"string",
//         birthday:"string",
//         date:"INT",
//         image:"string",
//         gender: BOOL,
//         active: BOOL
//         }
//     friends:
//         [{"friendName":"fName","image":"string"}]
//     events:
//         [
//         0:{sport:"string", frequency:INT, date:"string", time:"string", people_num: INT, city:"city", country:"country", description:"string", active: BOOLEAN}
//         1:{sport:"string", frequency:INT, date:"string", time:"string", people_num: INT, city:"city", country:"country", description:"string", active: BOOLEAN}
//         2:{sport:"string", frequency:INT, date:"string", time:"string", people_num: INT, city:"city", country:"country", description:"string", active: BOOLEAN}
//         3:{sport:"string", frequency:INT, date:"string", time:"string", people_num: INT, city:"city", country:"country", description:"string", active: BOOLEAN}
//         4:{sport:"string", frequency:INT, date:"string", time:"string", people_num: INT, city:"city", country:"country", description:"string", active: BOOLEAN}
//         ]
// }