
import React , { Component } from 'react'

import { Carousel} from 'antd-mobile';

import  {HomeSwiperContainer } from './styleComponent'

import SwiperImage from '@As/images/swiper-1.png'

import connect from '../../../connect'

class HomeSwiper extends Component {
    
    componentDidMount(){

        this.props.main_actions.getListAsync()
    }
    
    render(){
        return(
            <HomeSwiperContainer>
                
              <Carousel
                autoplay={true}
                infinite
              >
              {/* {this.renderSwiperList()} */}
              {this.renderSwiperList()}
            <img  src={SwiperImage} ></img>
             
              </Carousel>
    
        
            </HomeSwiperContainer>
           
        )
    }

    renderSwiperList(){
        let { list } =  this.props.main
        list = list.splice(0,1)
        if( !list.length) return ' ';
        return list.map(val => (
            <img
                key={val.cityId}
                src={val.frontImg}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
        )) 
    }   
     
    
}

export default connect(HomeSwiper,[{ name:'main' , state:['list']}])