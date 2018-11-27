import { Accordion,ImagePicker, WingBlank,List} from 'antd-mobile';

import React from 'react'

import Header from '@commons/Header/mine'

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}];

class MineContainer extends React.Component {
  state = {
    files: data,
    multiple: false,
  }
  onChange = (files, type, index) => {
    // console.log(files, type, index);
    this.setState({
      files,
    });
  }
  onChange = (key) => {
    // console.log(key);
  }
  render() {
    const { files } = this.state;
    return (
      
      <div >
      <Header></Header>
      <WingBlank >
        <ImagePicker
            files={files}
            onChange={this.onChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
            multiple={this.state.multiple}
          />
      </WingBlank>

        <Accordion style={{ color:'#333'}} defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
            
          <Accordion.Panel header="我的锦囊">
            <List className="my-list">
              <List.Item><i className="iconfont icon-zizhi" style={{color :"#42A5F5"}}></i> &nbsp;我的荣誉</List.Item>
              <List.Item><i className="iconfont icon-icon_wuliu" style={{color:'#FFA726'}}></i>  &nbsp;物流信息</List.Item>
              <List.Item><i className="iconfont icon-ziyuan" style={{color:'#26A69A'}}></i> &nbsp;我的资源</List.Item> 
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="查询信息" className="pad">
          <List className="my-list">
              <List.Item><i className="iconfont icon-zizhi"></i>我的荣誉</List.Item>
              <List.Item><i className="iconfont icon-icon_wuliu"></i>物流信息</List.Item>
              <List.Item><i className="iconfont icon-ziyuan"></i>我的资源</List.Item> 
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default MineContainer