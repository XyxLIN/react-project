import  { NavBar , Icon} from 'antd-mobile'


import React , { Component} from 'react'

import {withRouter} from 'react-router-dom'







// const { Item } = List;

class ClassifyNavBar extends Component {
    
    render () {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#FF7043',color:'#fff',position:'relative'}}
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => {
                        // this.props.router.replace({
                        //     pathname: '/',     
                        // })
                    }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    >
                    <span style={{color:'#fff',fontSize:'20px',fontFamily:'Microsoft Yahei',textAlign:'center'}}>
                    周边游</span>
                    
                </NavBar>
                   


            </div>
        )
    }
}

export default withRouter(ClassifyNavBar)