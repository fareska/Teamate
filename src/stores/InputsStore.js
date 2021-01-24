import { makeObservable, observable, action, computed } from "mobx"

class InputsStore {
    constructor() {
        this.signInInputs = {
            email: '',
            password: ''
        }
        this.signUpInputs = {
            first: 'rami',
            last: "naser",
            email: "rami@naser.com",
            city: "Jerusalem",
            country: "Israel",
            birthdate: Date.now(),
            mobile: "02323",
            image: null,
            gender: 1,
            date: 0,
            password: 'qweqweqwe',
            confirmPassword: 'qweqweqwe',
            sports: ["basketball"]
        }
        this.newEventForm = {
            sport: '',
            frequency: '',
            date: 0,
            time: 0,
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
            handleSelectableInput: action


        })
    }

    handleTextInput = (form, property, value) => {
        console.log(value);
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
    handleSelectableInput = (id) => {
        const sport = this.sports.find(s => id === s.id)
        sport.selected = !sport.selected
        const sports = this.sports.filter(s => s.selected).map(s => s.sport)
        this.signUpInputs.sports = sports
    }


}


export default InputsStore

const sports = [
    { id: 0, selected: false, sport: '' },
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