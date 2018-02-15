var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

var roomnumber;
var name;
var telnum;
var service;
var date;

class Laundry3 extends React.Component {
    
    renderToolbar() {
    return (
      <Ons.Toolbar>
      <Ons.Toolbar style={{backgroundColor: '#809fff'}}>
        <div className='center'>โรงแรมTeam15</div>
        <Ons.BackButton>กลับ</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        </Ons.Toolbar>
      </Ons.Toolbar>
    );
  }
  

  showMenu() {
    this.props.showMenu();
  }
  
  popPage() {
    this.props.navigator.popPage();
  }
  
  handClick(){
    
    roomnumber = roomnumber
    name = name
    telnum = telnum
    service = service
    date = date

 ons.notification.alert('บันทึกสำเร็จ')
    client({method: 'GET', path: '/roomnumber/'+roomnumber+'/name/'+name+'/telnum/'+telnum+'/service/'+service+'/date/'+date}).done(
  
    )
  }
 
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
         <Ons.Card>
         <div>
          <h2><font color="##000099">ใบบันทึกบริการซักอบรีด</font></h2>
       </div>
        
        <p>
        หมายเลขห้อง : {roomnumber}
        </p>
        
       <p>
        ชื่อ : {name}
        </p>
        
         <p>
        หมายเลขโทรศัพท์ : {telnum}
        </p>
        
         <p>
        บริการที่เลือกใช้ : {service}
        </p>
        
         <p>
        วันที่ต้องการส่งซักอบรีด : {date}
        </p>
        
        
       <div style={{ textAlign: 'center' }}>
        <Ons.Button onClick={this.handClick.bind(this)} style={{backgroundColor: '#4d79ff'}}>บันทึก</Ons.Button>
        </div>
          </Ons.Card>
         </Ons.Card>
      </Ons.Page>
    );
  }
}


var name;
var roomnumber;
var telnum;
var service;
var date;
class Laundry2 extends React.Component {
    constructor(){
    super()
    this.state={
      name: '',
      roomnumber:'',
      telnum: '',
      service: [ 
        'ซัก อบ รีด',
        'ซัก อบ',
        'อบ รีด',
        'อบ',
        'รีด'
      ],
      date:'',
      selected: 'No'
    }
  }
    renderToolbar() {
    return (
      <Ons.Toolbar>
      <Ons.Toolbar style={{backgroundColor: '#809fff'}}>
        <div className='center'>โรงแรมTeam15</div>
        <Ons.BackButton>กลับ</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        </Ons.Toolbar>
      </Ons.Toolbar>
    );
  }
  

  showMenu() {
    this.props.showMenu();
  }
  
   handleName(e) {
    this.setState({name: e.target.value});
  }
  
  handleTelnum(e) {
    this.setState({telnum: e.target.value});
  }
  
  handleserviceChange(service) {
    this.setState({selected: service});
  }
  
  handleDate(e) {
    this.setState({date: e.target.value});
  }
  
  popPage() {
    this.props.navigator.popPage();
  }
  
   clickLaundry3() {
    name = this.state.name
    telnum = this.state.telnum
    service = this.state.selected
    date = this.state.date
    this.props.navigator.pushPage({ component: Laundry3, props: { key: 'laundry3' } });
  }
  
  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selected}
            onChange={this.handleserviceChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${row}`} className='center'>
          {row}
        </label>
      </Ons.ListItem>
    )
  }

 
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
         <Ons.Card>
           <div style={{ textAlign: 'center' }}>
          <h2><font color="##000099">บริการซักอบรีด</font></h2>
            </div>
            
    <p>
    หมายเลขห้อง : {roomnumber}
  </p>
   
        <div>
              <label>ชื่อ-นามสกุล:</label>
              </div>
              
              <div>
              <input type="text" value={this.state.name} onChange={this.handleName.bind(this)}/>
              </div>
               <br/>
   
        <div>
              <label>หมายเลขโทรศัพท์:</label>
              </div>
              
              <div>
              <input type="text" value={this.state.telnum} onChange={this.handleTelnum.bind(this)}/>
              </div>
               <br/>
   
      <div>
        <label>เลือกบริการ:</label>
              <Ons.List
               dataSource={this.state.service}
               renderRow={this.renderCheckboxRow.bind(this)}
                />
                </div>
              <br/>
              
               <div>
              <label>เลือกวันที่ต้องการซักอบรีด:</label>
              </div>
              <div>
              <input type="date" value={this.state.date} onChange={this.handleDate.bind(this)}/>
              </div>
               <br/>
               
           
           <div style={{ textAlign: 'center' }}>
           <Ons.Button value = {this.state.name} onClick={this.clickLaundry3.bind(this,Laundry3)} style={{backgroundColor: '#4d79ff'}}>ยืนยัน</Ons.Button><br /><br/>
          </div>
               </Ons.Card>
        </Ons.Card>
      </Ons.Page>
    );
  }
}


var roomnumber;

export default class Laundry1 extends React.Component {
    constructor(){
    super()
    this.state={
      roomnumber:''

    }
  }
   renderToolbar() {
    return (
      <Ons.Toolbar>
      <Ons.Toolbar style={{backgroundColor: '#809fff'}}>
        <div className='center'>โรงแรมTeam15</div>
        <Ons.BackButton>กลับ</Ons.BackButton>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        </Ons.Toolbar>
      </Ons.Toolbar>
    );
  }
  

  showMenu() {
    this.props.showMenu();
  }
  
  popPage() {
    this.props.navigator.popPage();
  }
  
  clickLaundry2() {
    if(this.state.roomnumber !==  ''){
      fetch('http://localhost:8080/api/roomnumbers/search/findByroomnumber?'+
        'roomnumber=' + this.state.roomnumber)
         .then((response)=> response.json())
         .then((responseJson) => {
    roomnumber = this.state.roomnumber
    this.props.navigator.pushPage({ component: Laundry2, props: { key: 'laundry2' } });
     })
            .catch((error) => {
                ons.notification.alert('ไม่พบข้อมูล');

            });
    }else{
      ons.notification.alert('กรุณาป้อนหมายเลขห้อง');
    }
  }

  handleRoomnumberChange(e) {
    this.setState({roomnumber: e.target.value});
  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
         <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h2><font color="##000099">บริการซักอบรีด</font></h2>
           <img src={"http://www.smeleader.com/wp-content/uploads/2014/04/%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%99%E0%B9%84%E0%B8%8A%E0%B8%AA%E0%B9%8C-%E0%B8%8B%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%A3%E0%B8%B5%E0%B8%94-%E2%80%9C-%E0%B8%9F%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%9F%E0%B9%89%E0%B8%9A-%E2%80%9C-%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%AB%E0%B8%99%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%A2-%E0%B8%81%E0%B8%B3%E0%B9%84%E0%B8%A3%E0%B9%80%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%B2%E0%B8%94-1.jpg"} style={{width: '10%'}}  />
           
          
           <p>
            <Ons.Input
              value={this.state.billcancel}
              onChange={this.handleRoomnumberChange.bind(this)}
              modifier='underbar'
              float
              placeholder='หมายเลขห้อง' />
          </p>
          <Ons.Button onClick={this.clickLaundry2.bind(this)} style={{backgroundColor: '#4d79ff'}}>ถัดไป</Ons.Button>
        </div>
        </div>


        </Ons.Card>
      </Ons.Page>
    );
  }
}