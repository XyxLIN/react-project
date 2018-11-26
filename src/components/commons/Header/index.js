
import React ,  { Component } from 'react'

import { HeaderContainer } from './styledComponent'

class Header extends Component{
    render(){
        return (
            <HeaderContainer>
                北京
                <div className="left">
                <i className="fa fa-angle-down"></i>
                </div>
                <div>
                    <input type="text" username="text"></input>
                </div>
                <div className="right fa fa-user"></div>
            </HeaderContainer>
        )
    }
}

export default Header