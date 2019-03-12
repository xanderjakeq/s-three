import React from 'react'

export default (AuthPage) =>  (MainApp) => {
    if(localStorage.getItem('s3authToken')){
        return <MainApp/>
    }else{
        return <AuthPage/>
    }
}
