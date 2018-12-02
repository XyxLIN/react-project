import React, {Component} from 'react'
import {TravelDetail} from './styledComponent'
import connect from '../../connect'
class TravelContainer extends Component{
    constructor(props){
        super(props);
      
    }

    componentWillMount(){
        
        this.props.main_actions.getListAsync()
      

    }
    render(){
        let {list} = this.props.main
        console.log(list)
        let index = list.length-1
        return (
            <TravelDetail>
                <div className="detailFont" style={{height:'500px',width:'300px',fontSize:'16px'}}>
                {}
                </div>
            </TravelDetail>
            
        )
    }

}
export default connect(TravelContainer,[{ name:'main' , state:['list']}])