import React , {Component } from 'react'

import { TabBar } from 'antd-mobile';

import * as MainStyled from './styledComponent'

import {withRouter} from 'react-router-dom'

import uuid from 'uuid'

import HomeContainer from '@pages/main/home/homeContainer'

import ClassifyContainer from './classify/classifyContainer'

import MineContainer from './mine'




class MainContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'Market',
          hidden: false,
          tabs:[
            {id:uuid(),title:"商场",selected:'Market',Component:<HomeContainer/>,class:{default:'iconfont icon-ziyuan'}},
            {id:uuid(),title:"物流",selected:'logistics',Component:<HomeContainer/>,class:{default:'iconfont icon-icon_wuliu'}},
            {id:uuid(),title:"互联网", selected:'Intel',Component:<ClassifyContainer/>,class:{default:"iconfont icon-icon_hulianwang"}},
            {id:uuid(),title:'个人中心',selected:'mine',Component:<MineContainer/>,class:{default:'iconfont icon-icon_jianzhi'}}

          ]
        };
      }

      componentDidUpdate(props,{selectedTab}){
        let {selected:stab} =this.state
        if( selectedTab!==stab && selectedTab === 'logistics'){
            
        }
      }

      renderContentItems() {
        let { tabs } =this.state
        return tabs.map(tab => (
          <TabBar.Item
              title={tab.title} key={tab.id}
              icon={<div className={tab.class.default} />}
              selectedIcon={ <div className={tab.class.default}  />}
              selected={this.state.selectedTab===tab.selected}
              onPress={()=>{
                this.setState({selectedTab:tab.selected});
              }}
          >
            {tab.Component}
          </TabBar.Item>
        ))
     
      }
    

    render(){
        return (
                <MainStyled.MainWrapper >
                    <TabBar
                       unselectedTintColor="#949494"
                       tintColor="#FF7043"
                       barTintColor="white"
                       >
                       {this.renderContentItems()}
                       </TabBar>
                    
               </MainStyled.MainWrapper>
        )
                 
                
        

}
}

export default withRouter(MainContainer) 