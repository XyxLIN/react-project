import { ListView } from 'antd-mobile';

import React  from 'react'

import connect from '../../../connect'

import {TravelList} from './styleComponent'

import {withRouter,Link} from 'react-router-dom'


function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}></span>
      {props.children}
    </div>
  );
}

const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

class Demo extends React.Component {
  constructor(props) {
    super(props);
    const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
    const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

    const dataSource = new ListView.DataSource({
      getRowData,
      getSectionHeaderData: getSectionData,
      rowHasChanged: (row1, row2) => row1 !== row2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });

    this.state = {
      dataSource,
      isLoading: true,
      height: document.documentElement.clientHeight * 3 / 4,
    };
  }

  componentDidMount() {

    this.props.main_actions.getListAsync()

   
  
 
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, sectionIDs),
        isLoading: false,
        // height: hei,
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
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      genData(++pageIndex);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
        isLoading: false,
      });
    }, 1000);
  }


  render() {
    const {list} = this.props.main
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
      <div key={rowID} style={{ padding: '0 15px' }} onClick={()=>{this.handle(obj)}} >
        
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
                
                <img style={{ height: '70px', marginRight: '15px', width:'4.8rem'}} src={obj.frontImg} alt="" overflow="hidden"/>
                <div style={{ lineHeight: 1 }}>                                   
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
          </div>
          
        </div>
      );
    };
    return (
      <ListView
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderFooter={() => (<div style={{ padding: 15, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        // renderSectionHeader={sectionData => (
        //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
        // )}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        renderSeparator={separator}
        style={{
          height:'645px',
          overflow: 'auto',
        }}
        pageSize={4}
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
    );
   
  }
  handle(v){
    // console.log(this.props,'111')
  
    this.props.history.push(`/Detail/${v.poiid}`)

    if(this.props.location.pathname.startsWith('/Detail')){

        
    }
    // this.props.history.replace(`/Detail/${v.poiid}`)
     

    }
}

export default  withRouter(connect(Demo,[{ name:'main' , state:['list']}]))
