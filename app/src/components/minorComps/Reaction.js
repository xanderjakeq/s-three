import React from 'react'
import {connect} from 'react-redux'

import {reacted} from '../../actions'

import {Smile,Frown} from 'react-feather'

const Reaction = (props) => {
    return (
        <div>
            <Smile size = {30}/>
            <Frown color = 'grey' size = {30}/>
        </div>
    )
}

export default connect(null, {reacted})(Reaction)