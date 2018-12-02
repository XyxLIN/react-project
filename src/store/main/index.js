import default_state from './defaultState'

import * as types from './actionTypes'

import connect from '../../connect'

import actionCreators from './actionCreators'

connect.addAction({
    main:actionCreators
})

const reducer = (
    previous_state = default_state,
    action
)=>{
    console.log(action.type)
    let new_state = Object.assign({},previous_state)

    switch(action.type){

        case types.GET_LIST_ASYNC+'_FULFILLED':

            new_state.list = action.payload.data.data;break;
        
        case types.GET_DETAIL+'_FULFILLED':
            
            new_state.detail= action.payload.data.data;break;


        
        default : return previous_state;
    }
    
    return new_state
}

export default reducer