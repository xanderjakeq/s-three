import React from 'react'

export default hasAuth = (Login) => (App) => {
    if(true){
        return <App/>
    }else{
        return <Login/>
    }
}