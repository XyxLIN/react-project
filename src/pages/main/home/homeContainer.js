

import React,  { Component } from 'react'

import { Header } from '@commons'

import { HomeWrapper } from './styleComponent'

import HomeSwiper from './homeSwiper'

import HomeClassifyContainer from './homeClassify'

import {withRouter} from 'react-router-dom'

import HomeList from './homeList'
class HomeContainer extends Component{

    render(){
        
        return (
            <HomeWrapper>
                <Header></Header>
                <HomeSwiper></HomeSwiper>
                <HomeClassifyContainer></HomeClassifyContainer>
                <HomeList className="home"></HomeList>
            </HomeWrapper>
           
        )
    }
}

export default withRouter(HomeContainer)    