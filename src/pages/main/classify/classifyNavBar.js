import  { NavBar , Icon, List} from 'antd-mobile'

import createBrowserHistory from "history/createBrowserHistory";

import {Link} from 'react-router-dom'

import {Router} from 'react-router'

import React , { Component} from 'react'

const customHistory = createBrowserHistory();





// const { Item } = List;

class ClassifyNavBar extends Component {
    
    render () {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#FF7043',color:'#fff',display:'fixed'}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.router.replace({
                            pathname: '/',
                            
                        })
                    }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    ><span style={{color:'#fff',textAlign:'center'}}>周边游</span>
                    
                </NavBar>
                   


            </div>
        )
    }
}

export default ClassifyNavBar