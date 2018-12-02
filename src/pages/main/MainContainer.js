import React , {Component } from 'react'
import { TabBar } from 'antd-mobile';
import * as MainStyled from './styledComponent'
import uuid from 'uuid'
import HomeContainer from '@pages/main/home/homeContainer'
import ClassifyContainer from './classify/classifyContainer'
import {withRouter, Redirect,Switch,Route } from 'react-router-dom'
import MineContainer from './mine'
class MainContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {    
          selectedTab: 'Market',
          hidden:false,
          tabs:[
            {id:uuid(),title:"商场",selected:'Market',Component:<HomeContainer />,class:{default:'iconfont icon-ziyuan'}},
            {id:uuid(),title:"物流",selected:'logistics',Component:<HomeContainer/>,class:{default:'iconfont icon-icon_wuliu'}},
            {id:uuid(),title:"互联网", selected:'Intel',Component:<ClassifyContainer />,class:{default:"iconfont icon-icon_hulianwang"}},
            {id:uuid(),title:'个人中心',selected:'mine',Component:<MineContainer />,class:{default:'iconfont icon-icon_jianzhi'}}
          ]
        };
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
                this.setState({selectedTab:tab.selected})
                this.props.history.push(tab.selected)
              }}
          >
              {/* {tab.Component} */}
               
             <Switch>
             <Route path="/" exact render={()=>{
              return  <Redirect to='/Market'/>}}></Route>
                  <Route path="/Market"   component={HomeContainer} />
                  <Route path="/logistics"   component={HomeContainer} />
                  <Route path="/mine"   component={MineContainer} />
                  <Route path="/Intel" component={ClassifyContainer} />
              </Switch>    
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
                       hidden= {this.props.location.pathname.startsWith('/Detail')}
                       >
                       {this.renderContentItems()}
                       </TabBar>
               </MainStyled.MainWrapper>
        )
      }
}

export default withRouter(MainContainer)