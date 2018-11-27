

import * as types from './actionTypes'

import axios from 'axios'

export default{
    getListAsync () {
        return {
            type: types.GET_LIST_ASYNC,
            payload: axios.get('/mock/travel.json')
        }                                                                                                                            
    },
    getSwiper(){
        return {
            type: types.GET_SWIPER,
            payload: axios.get('/mock/swiper.json')
            
        }    
    }
}