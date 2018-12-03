import React, { Component } from 'react'

import  {HomeClassifyItem} from './styleComponent'

import Balloon from '@As/images/balloon.png'

import Drinks from '@As/images/drinks.png'

import News from '@As/images/news.png'

import Notice from '@As/images/notice.png'

import Search from '@As/images/search.png'

import Dynameic from '@As/images/dynamic.png'

import Employ from '@As/images/employ.png'

import Video from '@As/images/video.png'

import hasmore from '@As/images/hasmore.png'


import { Grid } from 'antd-mobile';

import uuid from 'uuid'

import {withRouter} from 'react-router-dom'

import Homeclassify from '@pages/main/classify/classifyContainer'


const HomeIcon=[
      {
        id:uuid(),title:'活动',url:"/Intel",Component:<Homeclassify/>,img:Balloon
      },
      {
        id:uuid(),title:'资源',url:"/mine",Component:<Homeclassify/>,img: Drinks
      },
      {
        id:uuid(),title:'公告',Component:<Homeclassify/>,img:Notice
      },
      {
        id:uuid(),title:'商城',Component:<Homeclassify/>,img:News
      },
      {
        id:uuid(),title:'搜索',Component:<Homeclassify/>,img:Search
      },
      {
        id:uuid(),title:'视频',Component:<Homeclassify/>,img:Video
      },
      {
        id:uuid(),title:'招聘',Component:<Homeclassify/>,img:Employ
      },
      {
        id:uuid(),title:'动态',Component:<Homeclassify/>,img:Dynameic
      },
      {
        id:uuid(),title:'更多',Component:<Homeclassify/>,img:hasmore
      },
]

const data = Array.from(HomeIcon).map((_val, i) => ({
    icon:_val.img,
    text: _val.title,
    Component:_val.Component,
    url:_val.url,
    index:i
  }));

const GridList = () =>(
      < div >
           <div className="sub-title"></div>
            <Grid data={data} isCarousel onClick={_el =>(data[_el.index].Component)} />
      </div>
  )

class HomeClassifyContainer extends Component {
    constructor(props){
      super(props)
     
    }

      
      render(){
          return (
            < HomeClassifyItem>
                <span style={{ marginTop:'1rem',fontSize:'16px',color:'#888'}}>---精品分类---</span>
                <Grid data={data} isCarousel onClick={_el =>(this.props.history.push(data[_el.index].url))} />
            </HomeClassifyItem>     
              
          )
      }
  }

export default withRouter(HomeClassifyContainer)