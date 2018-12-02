

import * as types from './actionTypes'

import axios from 'axios'

export default{
    getListAsync () {
        return {
            type: types.GET_LIST_ASYNC,
            payload: axios.get('/mock/travel.json')
        }                                                                                                                            
    },
    getDetail(){
        console.log(111)
        return {
            type: types.GET_DETAIL,
            payload: axios.get('/mock/detail.json')
            
        }    
    }
}