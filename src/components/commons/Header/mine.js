import  { NavBar , Icon, List} from 'antd-mobile'

import createBrowserHistory from "history/createBrowserHistory";

import {Link,withRouter} from 'react-router-dom'

import {Router} from 'react-router'

import React , { Component} from 'react'



const customHistory = createBrowserHistory();





// const { Item } = List;

class MineNavBar extends Component {

    constructor(props){
        super(props)
    }
    
    render () {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#FF7043',color:'#fff',display:'fixed'}}
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.goBack()
                        // this.props.router.replace({
                        //     pathname: '/',
                            
                        // })
                        // console.log(this.props.history)
                    }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    ><span style={{color:'#fff',textAlign:'center'}}>个人中心</span></NavBar>
                   


            </div>
        )
    }
}

export default withRouter(MineNavBar)