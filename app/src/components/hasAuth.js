import React from 'react'
import firebase from '../firebaseApp'

export default (AuthPage) =>  (MainApp) => {
    let user = firebase.auth().currentUser
    if(user){
        return <MainApp/>
    }else{
        return <AuthPage/>
    }
}