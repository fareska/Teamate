import { makeObservable, observable, action, computed, runInAction } from "mobx"
import ApiManager from "../../ApiManager"
const apiManager = new ApiManager()
class InputsStore {
    constructor() {
        this.signInInputs = {
            email: '',
            password: ''
        }
        this.signUpInputs = {
            first: '',
            last: "",
            email: "",
            city: "",
            country: "",
            birthdate: Date.now(),
            mobile: "",
            image: null,
            gender: 0,
            date: 0,
            password: '',
            confirmPassword: '',
            sports: []
        }
        this.newEventForm = {
            sport: '',
            frequency: '',
            date: Date.now(),
            time: Date.now(),
            people_num: 0,
            city: '',
            country: '',
            description: '',
            lon: 0,
            lat: 0,
            address: ''
        }
        this.countries = countries
        this.sports = sports
        this.getCountries()
        makeObservable(this, {
            signInInputs: observable,
            signUpInputs: observable,
            newEventForm: observable,
            sports: observable,
            countries: observable,
            handleTextInput: action,
            emptySignUpForm: action,
            emptySignInForm: action,
            emptySignPassword: action,
            handleSelectableInput: action,
            emptyNewEventForm: action,
            getCountries:action,
            getSports:action,


        })
    }

    handleTextInput = (form, property, value) => {

        this[form][property] = value

    }
    emptySignUpForm = () => {
        this.signUpInputs = {
            first: '',
            last: "",
            email: "",
            city: "",
            country: "",
            birthdate: Date.now(),
            mobile: "",
            image: null,
            gender: 1,
            date: 0,
            password: '',
            confirmPassword: '',
            sports: []
        }
        this.sports.forEach(s => s.selected = false)
    }
    emptySignInForm = () => {
        this.signInInputs = {
            email: '',
            password: ''
        }
    }
    emptySignPassword = () => {
        this.signInInputs.password = ''
    }
    emptyNewEventForm = () => {
        this.newEventForm = {
            sport: '',
            frequency: '',
            date: Date.now(),
            time: Date.now(),
            people_num: 0,
            city: '',
            country: '',
            description: '',
            lon: 0,
            lat: 0,
            address: ''
        }
    }
    handleSelectableInput = (id) => {
        const sport = this.sports.find(s => id === s.id)
        sport.selected = !sport.selected
        const sports = this.sports.filter(s => s.selected).map(s => s.sport)
        this.signUpInputs.sports = sports
    }
    getCountries = async ()=>{
        const res = await apiManager.getCountries()
        res.sort()
        const countries = res.map((c,i) => {
          return { id: i, country: c} 
        })
        runInAction(()=>{
            this.countries=countries
        })
    }
    getSports = async ()=>{
        const res = await apiManager.getSports()
        res.sort((a,b)=> a>b)
        const sports = res.map((s,i) => {
          return s && { id: i, selected: false, sport: s } 
        })
        runInAction(()=>{
            this.sports=sports
        })
    }


}


export default InputsStore

const sports = [

    { id: 1, selected: false, sport: 'Football' },
    { id: 2, selected: false, sport: 'Boxing' },
    { id: 3, selected: false, sport: 'Surfing' },
    { id: 4, selected: false, sport: 'Krav Magaa' },
    { id: 5, selected: false, sport: 'Basketball' },
    { id: 6, selected: false, sport: 'Running' },
    { id: 7, selected: false, sport: 'Swimming' },
    { id: 9, selected: false, sport: 'Tennis' },
    { id: 10, selected: false, sport: 'Climbing' },
    { id: 11, selected: false, sport: 'Scootering' },
    { id: 12, selected: false, sport: 'jiu jitsu' },
    { id: 13, selected: false, sport: 'Hiking' },
    { id: 14, selected: false, sport: 'Muay Thai' },
    { id: 15, selected: false, sport: 'Diving' }
]

const countries = [
    { id: 0, country: '' },
    { id: 8497, country: 'Andorra' },
    { id: 8498, country: 'United Arab Emirates' },
    { id: 8499, country: 'Afghanistan' },
    { id: 8500, country: 'Antigua and Barbuda' },
    { id: 8501, country: 'Anguilla' },
    { id: 8502, country: 'Albania' },
    { id: 8503, country: 'Armenia' },
    { id: 8504, country: 'Angola' },
    { id: 8505, country: 'American Samoa' },
    { id: 8506, country: 'Argentina' },
    { id: 8507, country: 'Austria' },
    { id: 8508, country: 'Australia' },
    { id: 8509, country: 'Aruba' },
    { id: 8510, country: 'Aland Islands' },
    { id: 8511, country: 'Azerbaijan' },
    { id: 8512, country: 'Bosnia and Herzegovina' },
    { id: 8513, country: 'Barbados' },
    { id: 8514, country: 'Bangladesh' },
    { id: 8515, country: 'Belgium' },
    { id: 8516, country: 'Burkina Faso' },
    { id: 8517, country: 'Bulgaria' },
]