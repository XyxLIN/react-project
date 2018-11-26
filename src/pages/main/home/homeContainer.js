

import React,  { Component } from 'react'

import { Header } from '@commons'

import { HomeWrapper } from './styleComponent'

import HomeSwiper from './homeSwiper'

import HomeClassifyContainer from './homeClassify'

class HomeContainer extends Component{

    render(){
        
        return (
            <HomeWrapper>
                <Header></Header>
                <HomeSwiper></HomeSwiper>
                <HomeClassifyContainer></HomeClassifyContainer>
            </HomeWrapper>
           
        )
    }
}

export default HomeContainer