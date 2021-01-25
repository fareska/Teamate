import { inject, observer } from 'mobx-react'
import React from 'react'
import EventsMap from './EventsMap';
import { Feeds } from './Feeds';
import ProfilePage from './ProfilePage';
import SignIn from './SignIn';
import { SignUp } from './SignUp';
import Welcome from './welcome';

const Navigation = inject('navigator', 'user')(observer(({ navigator, user }) => {
    const isSignedIn = () => {
        return user.user.id ? true : false
    }
    
    switch (navigator.currentPage) {
        case "welcome":
            return isSignedIn() ? navigator.redirect('feeds') : <Welcome />
        case "signIn":
            return isSignedIn() ? navigator.redirect('feeds') : <SignIn />
        case "signUp":
            return isSignedIn() ? navigator.redirect('feeds') : <SignUp />
        case 'feeds':
            return isSignedIn() ? <Feeds /> : navigator.redirect('signIn')
        case 'profilePage':
            return isSignedIn() ? <ProfilePage /> : navigator.redirect('signIn')
        case 'eventsMap':
            return isSignedIn() ? <EventsMap /> : navigator.redirect('signIn')
    }


}))

export default Navigation
