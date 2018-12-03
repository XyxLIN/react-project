import { WingBlank, WhiteSpace } from 'antd-mobile';

import React, {Component} from 'react'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );

class HomeList extends Component{

    render(){
        return (
            <div style={{ padding: '15px 0' }}>
                 <WhiteSpace size="lg" />
                    <WingBlank size="md"><PlaceHolder /></WingBlank>
            </div>
        )
    }
}

export default HomeList