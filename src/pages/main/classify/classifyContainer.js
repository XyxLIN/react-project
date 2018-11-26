import React, { Component } from 'react'

import ClassifyNavBar from './classifyNavBar'

import {ClassifyMainContainer} from './styleComponent'


import ListView from '../../../components/commons/List'

const data =[ 

    {id:1,title:'热门推荐',type:"now-playing"},
    {id:2,title:"热门活动",type:"coming-soon"},
    {id:3,title:"筛选",type_shop:""}

]

class  classifyContainer extends Component{
   
    render(){      
            // var index = data.length-1;
            // let items=[];
            // for( var val=0;val<index;val--){
            //     items.push(   
            //         <div className="shop-nav" key={val.id} >     
            //             <div className="shop-icon" >                  
            //                 <span>{val.title}</span>
            //                 <i className="fa fa-sort-desc"></i>
            //             </div>
            //         </div>
            //     )
            //  }
    
        return (
            <div>
                <ClassifyNavBar></ClassifyNavBar>
                
                <ClassifyMainContainer >
                    
                        {/* {items} */}
                    
                </ClassifyMainContainer>

                <ListView></ListView>
            </div>

        )
    }

}

export default classifyContainer