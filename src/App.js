import React, { Component } from 'react';

// import { Button,WhiteSpace } from 'antd-mobile'
import MainContainer from '../src/pages/main/MainContainer'

// import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
import 'antd-mobile/lib/date-picker/style/css'; 


class App extends Component {
  render() {
    return (
      <div className="App">
      <MainContainer/>

       {/* <WhiteSpace />
    <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button>
    <Button type="primary" inline size="small" disabled>primary disabled</Button>
    <WhiteSpace /> */}
      </div>
    );
  }
}

export default App;
