import { Accordion, List } from 'antd-mobile';

import React from 'react'

import Header from '@commons/Header/mine'

import News from '@As/images/news.png'

import Notice from '@As/images/notice.png'

import Search from '@As/images/search.png'

class MineContainer extends React.Component {
  onChange = (key) => {
    console.log(key);
  }
  render() {
    return (
      <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Header></Header>
        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
            
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item> 
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </div>
    );
  }
}

export default MineContainer