var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

import Home from './Home';
let imgUrl = 'https://sites.google.com/site/blogpixiefreebies/downloads/marble_desktop.png';




class ChangeBill4 extends React.Component {
  renderToolbar() {

    return (
      
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
     
        <div className='center'>Hotel - Team15</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }


  Home1(page) {
    this.props.navigator.pushPage({ component: page ,props: { key: `${page}` } });
  }
  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.props.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
          <h1>เปลี่ยนห้องพักเรียบร้อยแล้ว</h1>
          เลขที่ใบบันทึกเปลี่ยนห้อง : {this.props.changeBill}

          <img src={"https://i.imgflip.com/246c0f.gif"} style={{ width: '90%' }} />
          {/* <a href="https://imgflip.com/gif/246c0f"><img src="https://i.imgflip.com/246c0f.gif" title="made at imgflip.com"/></a> */}
          <br /><br /><br /><br /><br />
          <p>
            <Ons.Button onClick={this.loadPage.bind(this, Home)}style={{ backgroundColor: '	#A9A9A9' }}>กลับไปหน้าหลัก</Ons.Button>
          </p>

        </div><br /><br /><br /><br />
        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}



















class ChangeBill3 extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      idBill:'',
      changeBill:'',
      nameroom:'',
      price:0.00,
      roomnumber:'',
      nameroom2:'',
      price2:0.00,
      roomnumber2:''

    }
  }
  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
      <div style={{textAlign: 'left' }}>
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>ย้อนกลับ</Ons.Button></Ons.BackButton>&ensp;&ensp;
                </div>
        <div className='center'>Hotel - Team15</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }


  Home1(page) {
    this.props.navigator.pushPage({ component: page ,props: { key: `${page}` } });
  }
  hide() {
    this.setState({ isOpen: false });
  }

  ChangeBill4(page) {
    this.props.navigator.pushPage({ component: page, props: { key: 'changeBill4'} });
  }

  UpSave(){
      var today = new Date();
      let  { roomnumber,price,nameroom} = this.state
      let  changeBill  = this.getChangRooom()
      this.setState({changeBill:changeBill})
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10) {
          dd = '0'+dd
      } 
      if(mm<10) {
          mm = '0'+mm
      } 
      today = yyyy + '-' + mm + '-' + dd; 
    client({method: 'GET', path: `/name/${this.state.name}/billid/${this.props.state.idBill}/roomname/${this.props.room}/roomnumber/${this.props.roomnumber2}/price/${this.state.price2}/changid/${changeBill}/date/${today.toString()}/oldroomname/${nameroom.nameroom}/oldroomnumber/${this.state.roomnumber}/oldprice/${this.state.price}`}).done(response => {
        //  console.log(response.entity)
        if(response.entity.status==="updated")
            this.props.navigator.pushPage({ component: ChangeBill4, props: { key: 'changeBill4',changeBill:changeBill} });
        else 
           ons.notification.alert(response.entity.status)
     
  });
  }
  getChangRooom() {
    var text = "CH";
    var possible = "0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
 
    return text;
  }
  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.props.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
  }
  componentDidMount() {
    // "/changeid/{changeid}",
        // console.log(this.props)
        const that = this
        client({method: 'GET', path: `/changeid/${this.props.state.idBill}`}).done(response => {
          // console.log(response.entity.roomnumber)
          that.setState({
              idBill:response.entity.billid,
              name:response.entity.name,
              nameroom:response.entity.nameroom,
              roomnumber:response.entity.roomnumber,
              price:response.entity.price
          });
      });
      client({method: 'GET', path: `/nameroom/${this.props.room}`}).done(response => {
        console.log(response.entity)
        this.setState({price2:response.entity.price})
               
    });


  }
  render() {
    let  { roomnumber,price,nameroom} = this.state
    // console.log(roomnumber,price,nameroom)
    return (

      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{textAlign: 'center'}}>

      <Ons.Card style={{  backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>ใบแจ้งเปลี่ยนห้อง</h1></b>

      <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '100%' }}>
      <div style={{textAlign: 'left' }}>
        
        <p>
          ชื่อ-สกุล : {this.state.name}
        </p>

        <p>
          เลขที่ใบบันทึกการจอง : {this.state.idBill}
        </p>
        <br/>
        <p>
          ชื่อห้องที่จอง : {nameroom.nameroom}
        </p>

        <p>
          เลขที่ห้องที่จอง : {this.state.roomnumber}
        </p>


        <p>
          ราคาที่จอง : {nameroom.price}
        </p>
        <br/>
        <p>
          ชื่อห้องที่เปลี่ยน : {this.props.room}
        </p>

        <p>
          เลขที่ห้องที่เปลี่ยน: {this.props.roomnumber2}
        </p>
        <p>
          ราคาที่เปลี่ยน : {this.state.price2}
        </p>
        <p>      
        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.UpSave.bind(this)}style={{ backgroundColor: '	#A9A9A9' , textAlign: 'center'  }}>ยืนยันการเปลี่ยนห้อง</Ons.Button>
        </div>
        </p>


        </div>
        </Ons.Card>
        </div>

        
        </Ons.Card>
        </div>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}



















class ChangeBill2 extends React.Component {

  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
      <div style={{textAlign: 'left' }}>
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>ย้อนกลับ</Ons.Button></Ons.BackButton>&ensp;&ensp;
                </div>
        <div className='center'>Hotel - Team15</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }
  ChangeBill3(page,roomnumber) {
    // /roomnuber/{roomnuber}
    client({method: 'GET', path: `/roomnuber/${roomnumber}`}).done(response => {
        if(response.entity.status==="insert")
             this.props.navigator.pushPage({ component: page, props: { key: 'changeBill3',state:this.props.state,roomnumber2:roomnumber,room:this.props.room} });
        else 
          ons.notification.alert(response.entity.status)
  });
   
  }

  Home1(page) {
    this.props.navigator.pushPage({ component: page ,props: { key: `${page}` } });
  }
  hide() {
    this.setState({ isOpen: false });
  }

  show() {
    this.setState({ isOpen: true });
  }

  loadPage(page) {
    this.hide();
    this.props.navigator.resetPage({ component: page, props: { key: page } }, { animation: 'fade' });
  }
  componentDidMount(){
      // console.log(this.props.state)
  }
  render() {
    // console.log(this.props.state)
    if(this.props.room==="Deluxe"){
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
        <h1>ประเภทห้อง : {this.props.room}</h1>
        <h1>กรุณาเลือกห้อง</h1>


          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          </b>

          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"A01")}style={{ backgroundColor: '	#A9A9A9' }}>A01</Ons.Button>
          </p>
          </Ons.Card>


          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          </b>

          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"A02")}style={{ backgroundColor: '	#A9A9A9' }}>A02</Ons.Button>
          </p>
          </Ons.Card>


          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          </b>

          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"A03")}style={{ backgroundColor: '	#A9A9A9' }}>A03</Ons.Button>
          </p>
          </Ons.Card>


          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          </b>

          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"A04")}style={{ backgroundColor: '	#A9A9A9' }}>A04</Ons.Button>
          </p>
          </Ons.Card>


          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          </b>

          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"A05")}style={{ backgroundColor: '	#A9A9A9' }}>A05</Ons.Button>
          </p>
          </Ons.Card>

        </div><br /><br /><br /><br />
      </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    
    );
  }else if(this.props.room==="Super Deluxe"){
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
          <div style={{ textAlign: 'center' }}>
          <h1>ประเภทห้อง : {this.props.room}</h1>
          <h1>กรุณาเลือกห้อง</h1>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"S01")}style={{ backgroundColor: '	#A9A9A9' }}>S01</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"S02")}style={{ backgroundColor: '	#A9A9A9' }}>S02</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"S03")}style={{ backgroundColor: '	#A9A9A9' }}>S03</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"S04")}style={{ backgroundColor: '	#A9A9A9' }}>S04</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"S05")}style={{ backgroundColor: '	#A9A9A9' }}>S05</Ons.Button>
            </p>
            </Ons.Card>
  
          </div><br /><br /><br /><br />
        </Ons.Card>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            ขอบคุณที่ใช้บริการ!
          </p>
        </Ons.Page>
      
      );
    }else if(this.props.room==="Gremier Deluxe"){
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
          <div style={{ textAlign: 'center' }}>
          <h1>ประเภทห้อง : {this.props.room}</h1>
          <h1>กรุณาเลือกห้อง</h1>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"G01")}style={{ backgroundColor: '	#A9A9A9' }}>G01</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"G02")}style={{ backgroundColor: '	#A9A9A9' }}>G02</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"G03")}style={{ backgroundColor: '	#A9A9A9' }}>G03</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"G04")}style={{ backgroundColor: '	#A9A9A9' }}>G04</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"G05")}style={{ backgroundColor: '	#A9A9A9' }}>G05</Ons.Button>
            </p>
            </Ons.Card>
  
          </div><br /><br /><br /><br />
        </Ons.Card>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            ขอบคุณที่ใช้บริการ!
          </p>
        </Ons.Page>
      
      );
    }else{
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>ประเภทห้อง : {this.props.room}</h1>
            <h1>กรุณาเลือกห้อง</h1>
            
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"P01")}style={{ backgroundColor: '	#A9A9A9' }}>P01</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"P02")}style={{ backgroundColor: '	#A9A9A9' }}>P02</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"P03")}style={{ backgroundColor: '	#A9A9A9' }}>P03</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"P04")}style={{ backgroundColor: '	#A9A9A9' }}>P04</Ons.Button>
            </p>
            </Ons.Card>
  
  
            <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8'}}>
            <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
            <b style={{color: '#1C1C1C'}}>
            </b>
  
            <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            <br/><Ons.Button onClick={this.ChangeBill3.bind(this, ChangeBill3,"P05")}style={{ backgroundColor: '	#A9A9A9' }}>P05</Ons.Button>
            </p>
            </Ons.Card>
  
          </div><br /><br /><br /><br />
        </Ons.Card>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            ขอบคุณที่ใช้บริการ!
          </p>
        </Ons.Page>
      
      );
    }
  
  }
}












class ChangeBill extends React.Component {

  constructor(props){
    super(props);
    this.state={
      date: "2018-01-26",
      nameroom:'',
      price:0.00,
      roomnumber:'',
      idroom:'',
      price2:0.00,
      roomnumber2:'',
      idBill:''
    }
  }
  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
      

        <div style={{textAlign: 'left' }}>
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>ย้อนกลับ</Ons.Button></Ons.BackButton>&ensp;&ensp;
                </div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>

      </Ons.Toolbar>
    );
  }
  componentDidMount() {
    //  console.log(this.props.state.idBill)
     this.setState({idBill:this.props.state.idBill})
  }
  showMenu() {
    this.props.showMenu();
  }
  ChangeBill2(page,room) {
    this.props.navigator.pushPage({ component: page, props: { key: 'changeBill2' ,room:room,state:this.state} });
  }
   
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      {/* <img src={"https://media.giphy.com/media/l1KcQipMDcS3BgNOM/giphy.gif"}style={{width: '100%'}}  /> */}
        

      
      <Ons.Card style={{  backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>เลือกประเภทห้องพัก</h1></b>

            

          <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8',}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          <br/>Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/>Adult(s) : 2 , Children 1
          <br/>*Include breakfast
          <br/><Ons.Button onClick={this.ChangeBill2.bind(this, ChangeBill2,"Deluxe")}style={{ backgroundColor: '	#A9A9A9' }}>ยืนยัน</Ons.Button>
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8',}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '90%',textAlign: 'center'  }} />
          <b style={{color: '#1C1C1C'}}>
          <br/>Super Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/>Adult(s) : 2 , Children 1
          <br/>*Include breakfast
          <br/><Ons.Button onClick={this.ChangeBill2.bind(this, ChangeBill2,"Super Deluxe")}style={{ backgroundColor: '	#A9A9A9' }}>ยืนยัน</Ons.Button>
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8',}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '90%' ,textAlign: 'center' }} />
          <b style={{color: '#1C1C1C'}}>
          <br/>Gremier Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/>Adult(s) : 2 , Children 1
          <br/>*Include breakfast
          <br/><Ons.Button onClick={this.ChangeBill2.bind(this, ChangeBill2,"Gremier Deluxe")}style={{ backgroundColor: '	#A9A9A9' }}>ยืนยัน</Ons.Button>
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card style={{textAlign: 'center'  ,backgroundColor: '#E8E8E8',}}>
          <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '90%' ,textAlign: 'center' }} />
          <b style={{color: '#1C1C1C'}}>
          <br/>Premier Grand Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          <br/>Adult(s) : 2 , Children 1
          <br/>*Include breakfast
          <br/><Ons.Button onClick={this.ChangeBill2.bind(this, ChangeBill2,"Premier Grand Deluxe")}style={{ backgroundColor: '	#A9A9A9' }}>ยืนยัน</Ons.Button>
          </p>
        </Ons.Card>










            

              

             
            <br />
            
          </div>
          </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>

      </Ons.Page>
    );
  }
}



















export default class ChangeRoom extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      idBill: ''
    }
  }
  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
      <div style={{textAlign: 'left' }}>
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>ย้อนกลับ</Ons.Button></Ons.BackButton>&ensp;&ensp;
                </div>
        <div className='center'>Hotel - Team15</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }


  showMenu() {
    this.props.showMenu();
  }

  ChangeBill() {
    if (this.state.idBill === '' && this.state.name === '') {
         ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
    }
    else{
      // /changeroomid/{changeroomid}
      client({method: 'GET', path: `changeroomid/${this.state.idBill}/name/${this.state.name}`}).done(response => {
        // console.log(response.entity.status)
        if(response.entity.status==="found")
            this.props.navigator.pushPage({ component: ChangeBill, props: { key: 'changeBill', state: this.state }});
        else if(response.entity.status==="not found")
            ons.notification.alert("ไม่พบข้อมูล กรุณาตรวจสอบ");
    });
        // this.props.navigator.pushPage({ component: ChangeBill, props: { key: 'changeBill', state: this.state }});
  }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleIdBillChange(e) {
    this.setState({ idBill: e.target.value });
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{  backgroundImage: 'url(' + imgUrl + ')' }}>

          <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>แจ้งเปลี่ยนห้องพัก</h1></b>

            <img src={"http://cdn.home-designing.com/wp-content/uploads/2016/07/adorable-small-home-library-inspiration.jpg"} style={{ width: '80%' }} /><br /><br />


            <div style={{ paddingLeft: '13%' }}>
              <Ons.Card style={{ backgroundColor: '#E8E8E8', width: '85%' }}>
                <div style={{ paddingLeft: '-13%', textAlign: 'center' }}>
                  <p>
                    <Ons.Input
                      value={this.state.name}
                      onChange={this.handleNameChange.bind(this)}
                      modifier='underbar'
                      float
                      placeholder='ชื่อ-สกุล' />
                  </p>

                  <p>
                    <Ons.Input
                      value={this.state.idBill}
                      onChange={this.handleIdBillChange.bind(this)}
                      modifier='underbar'
                      float
                      placeholder='เลขที่ใบบันทึกการจอง' />
                  </p>

                  <p>
                    <Ons.Button onClick={this.ChangeBill.bind(this)} style={{ backgroundColor: '	#A9A9A9' }}>ส่งคำร้อง เปลี่ยนห้องพัก</Ons.Button>
                  </p>
                </div>
              </Ons.Card>
            </div>

          </div><br /><br /><br /><br />
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank You!
        </p>

      </Ons.Page>
    );
  }

}
