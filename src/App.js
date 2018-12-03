import React, { Component } from 'react';
import {Switch,Route,Redirect }  from 'react-router-dom' 
import 'antd-mobile/lib/date-picker/style/css'; 
import  TravelContainer from '@pages/detail/travel'
import MainContainer from '@pages/main/MainContainer'
import ClassifyContainer from '@pages/main/classify/classifyContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Switch>
            {/* <Redirect from='/' to='/Market' exact></Redirect> */}
            <Route path="/Intel"   component={ClassifyContainer} />
            <Route path="/Detail/:id" component={TravelContainer} />
          </Switch>  
          <MainContainer/>

      </div>
    );
  } 
}

export default App;
