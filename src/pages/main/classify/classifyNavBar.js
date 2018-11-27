import  { NavBar , Icon} from 'antd-mobile'


import React , { Component} from 'react'







// const { Item } = List;

class ClassifyNavBar extends Component {
    
    render () {
        return (
            <div>
                 <NavBar
                    style={{color:'#333',position:'relative'}}
                    mode="light"
                    icon={<Icon type="left"/>}
                    onLeftClick={() => {
                        this.props.router.replace({
                            pathname: '/',
                            
                        })
                    }}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                    ><span style={{color:'#333',fontSize:'20px',fontFamily:'Microsoft Yahei',textAlign:'center'}}>周边游</span>
                    
                </NavBar>
                   


            </div>
        )
    }
}

export default ClassifyNavBar