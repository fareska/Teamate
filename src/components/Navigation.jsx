import { inject, observer } from 'mobx-react'
import React from 'react'
import { View } from 'react-native'
import SignIn from './SignIn';
import { SignUp } from './SignUp';
import Welcome from './welcome';

const Navigation = inject('navigator')(observer(({ navigator }) => {
    switch (navigator.currentPage) {
        case "welcome":
            return <Welcome />
        case "signIn":
            return <SignIn />
        case "signUp":
            return <SignUp/>
    }


}))

export default Navigation