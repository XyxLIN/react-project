import { ListView } from 'antd-mobile';

import React  from 'react'

import connect from '../../../connect'

import {TravelList} from './styleComponent'

// const list =[
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
//     title: 'Meet hotel',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
//     title: 'McDonald\'s invites you',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
//   {
//     img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
//     title: 'Eat the week',
//     des: '不是所有的兼职汪都需要风吹日晒',
//   },
// ]
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {}
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }

  componentDidMount() {

    this.props.main_actions.getListAsync()

   
  
 
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.dataSource !== this.props.dataSource) {
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
  //     });
  //   }
  // }

  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    // console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }

  render() {

    const {list}=this.props.main
    // console.log(list)
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = list.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = list.length - 1;
      }
      const obj = list[index--];
      return (
        <div key={rowID} style={{ padding: '0 15px' }}>
          {/* <div
            style={{
              lineHeight: '50px',
              color: '#888',
              fontSize: 18,
              borderBottom: '1px solid #F6F6F6',
            }}
          >{obj.name}</div> */}
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                
                <img style={{ height: '70px', marginRight: '15px', width:'4.8rem'}} src={obj.frontImg} alt="" overflow="hidden"/>
                <div style={{ lineHeight: 1 }}>
                    {/* <br></br> */}
                   
                    <div style={{fontSize:"1rem",height:".34rem",lineHeight:".34rem",color:"#333"}}>{obj.name}
                        <img style={{marginLeft:".2rem", width:"1.5rem",height:"1rem"}} src={obj.poiIconTags[0]}/>           
                    </div>
                    <br></br>
                    <div style={{width:'15rem', display: '-webkit-box', display: 'flex',justifyContent:'space-between', marginBottom: '8px', fontWeight: 'bold',  color:'#FDB338',margin:'.5rem' }}>
                        {obj.rate}
                        
                        <TravelList><button  className="btn">购票</button></TravelList>
                        
                    </div>
                    <div  style={{width:'15rem', display: '-webkit-box', display: 'flex',justifyContent:'space-between'}}>
                      <span style={{ fontSize: '20px', color: '#FF6E27' }}>¥{obj.avgPrice}</span>
                      <div style={{color:'#333',marginTop:'.3rem'}}><span>{obj.consumers}</span> </div>
                      <div style={{color:'#333',marginTop:'.3rem'}}>{obj.areaName}</div>
                    </div>
                   
                   
                </div>

                {/* <div style={{display: '-webkit-box', display: 'flex',}}>
                    <span>{obj.tourPlaceStart}</span>
                    <span>{obj.parkingInfo}</span>
                </div> */}

               
               
          </div>
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
  }
}

export default  connect(Demo,[{ name:'main' , state:['list']}])
