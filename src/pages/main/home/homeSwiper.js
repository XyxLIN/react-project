
import React , { Component } from 'react'

import { Carousel} from 'antd-mobile';

import  {HomeSwiperContainer } from './styleComponent'

// import SwiperImage from '@As/images/swiper-1.png'

import {withRouter} from 'react-router-dom'

import connect from '../../../connect'



class HomeSwiper extends Component {
    
    constructor (props){
        super(props)
        this.state = {
            items:[]
        }
        
    }

  
    
    componentDidMount(){

        this.props.main_actions.getListAsync()
    }
    render(){
        return(
            <HomeSwiperContainer>                             
                 
                {this.renderSwiperList()}
                  
            </HomeSwiperContainer>
           
        )
    }

    renderSwiperList(){
        
        let { list } =  this.props.main     
        if( !list.length) return ' ';
        list = list.splice(0,2)
        return (
            <Carousel
                autoplay={true}
                infinite
            >    
               
                { list.map(val =>(
                    <img
                        key={val.cityId}
                        src={val.frontImg}
                        alt=""
                        style={{ width: '100%',verticalAlign: 'top' }}
                />
                ))}
            </Carousel>
        )
 
    }   
     
    
}

export default withRouter(connect(HomeSwiper,['main']))