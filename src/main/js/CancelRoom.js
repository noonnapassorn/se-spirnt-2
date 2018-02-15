var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

import Home from './Home';
let imgUrl = 'https://sites.google.com/site/blogpixiefreebies/downloads/marble_desktop.png';
class CancelBill1 extends React.Component {
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
          <h1>ยกเลิกห้องพักเรียบร้อยแล้ว</h1>
          เลขที่ใบบันทึกยกเลิกห้อง : {this.props.cancelbill}

          <img src={"http://da954e15a2c91dbf5db4-f413c3824e566fbbefc6c06114d30279.r65.cf1.rackcdn.com/XLGallery/she172gr.190380-Deluxe-River-View-Room.jpg"} style={{ width: '80%' }} />
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



class CancelBill extends React.Component {

  constructor(props){
    super(props);
    this.state={
      date: "2018-01-26",
      nameroom:'',
      price:0.00,
      roomnumber:''
    }
  }
  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
        
        <div style={{textAlign: 'left' }}>
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>แก้ไขข้อมูล</Ons.Button></Ons.BackButton>&ensp;&ensp;
                </div>
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
  CancelBill1() {
    let  { roomnumber,price,nameroom} = this.state
    //this.props.navigator.pushPage({ component: CancelBill1, props: { key: 'cancelBill1' } });
      var today = new Date();
      let cancelbill = this.getCancelRooom()
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
      client({method: 'GET', path: `/cancelbill/${cancelbill}/billid/${this.props.state.idBill}/name/${this.props.state.name}/nameroom/${nameroom.nameroom}/roomnumber/${this.state.roomnumber}/date/${today.toString()}/price/${this.state.price}`}).done(response => {
        // console.log(response.entity.status)
        if(response.entity.status==="Deleted"){
            this.props.navigator.pushPage({ component: CancelBill1, props: { key: 'cancelBill1',cancelbill:cancelbill} });
        }
        else if(response.entity.status==="not found")
            ons.notification.alert(response.entity.status);
    });
  }
getCancelRooom() {
    var text = "C";
    var possible = "0123456789";
  
    for (var i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
 componentDidMount(){
   const that = this;
  client({method: 'GET', path: `/billid/${this.props.state.idBill}`}).done(response => {
    console.log(response.entity.nameroom,response.entity.price)
    that.setState({
      date:response.entity.date,
      nameroom:response.entity.nameroom,
      price:response.entity.price,
      roomnumber:response.entity.roomnumber
    })
});
 }
  render() {
    let  { roomnumber,price,nameroom} = this.state
    // console.log(roomnumber,price,nameroom)
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
        <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>แจ้งยกเลิกห้องพัก</h1></b>

          <div style={{ textAlign: 'center' }}>
            <img src={"http://www.hotelsinheaven.com/wp-content/uploads/hilton-pattaya-2048x1121.jpg"} style={{ width: '80%' }} /><br /><br />
            



            <div style={{ paddingLeft: '10%' }}>
            <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '85%' }}>
            <div style={{ paddingLeft: '-10%', textAlign: 'center' }}>
            

            <div style={{textAlign: 'center'}}>
            <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '100%' }}>
            <div style={{textAlign: 'left' }}>
              

              <p>
                ชื่อ-สกุล : {this.props.state.name}
              </p>

              <p>
                เลขที่ใบบันทึกการจอง : {this.props.state.idBill}
              </p>

              <p>
                ชื่อห้อง : {nameroom.nameroom}
              </p>

              <p>
                เลขที่ห้อง : {this.state.roomnumber}
              </p>


              <p>
                ราคา : {nameroom.price}
              </p>


              </div>
              </Ons.Card>
              </div>

              <p>
                
                <div>
                <Ons.Button onClick={this.CancelBill1.bind(this, CancelBill1)}style={{ backgroundColor: '	#FF3366' }}>ยืนยัน</Ons.Button>
                </div>
              </p>
              
              </div>
            </Ons.Card>
            </div>
            <br />


            </div>
          </div>
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          ขอบคุณที่ใช้บริการ!
        </p>

      </Ons.Page>
    );
  }
}

export default class CancelRoom extends React.Component {
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
                <Ons.BackButton style={{ backgroundColor: '	#A9A9A9'  }}><Ons.Button style={{ backgroundColor: '	#A9A9A9' }}>แก้ไขข้อมูล</Ons.Button></Ons.BackButton>&ensp;&ensp;
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
  CancelBill() {
    if (this.state.idBill === '' && this.state.name === '') {
      ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
    }else {
        client({method: 'GET', path: `/name/${this.state.name.trim()}/billid/${this.state.idBill.trim()}`}).done(response => {
         console.log(response.entity.status)
         
         if(response.entity.status==="not found"){
            
            ons.notification.alert('ข้อมูลไม่ถูกต้อง');}
          else if("found")
             this.props.navigator.pushPage({ component: CancelBill, props: { key: 'cancelBill', state: this.state } });
          else
             ons.notification.alert('server error'+response.status.code);
    });

    }
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleIdBillChange(e) {
    this.setState({ idBill: e.target.value });
  }
  componentDidMount() {
//     client({method: 'GET', path: `/name`}).done(response => {
//       console.log(response)
//  });
  }
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{  backgroundImage: 'url(' + imgUrl + ')' }}>

          <div style={{ textAlign: 'center' }}>
            <b><h1 style={{ size: '75%' }}>แจ้งยกเลิกห้องพัก</h1></b>

            <img src={"https://amazingthaisea.com/wp-content/uploads/2014/05/1-1.jpg"} style={{ width: '80%' }} /><br /><br />




            <div style={{ paddingLeft: '13%' }}>
              <Ons.Card style={{ backgroundColor: '#FFFAFA', width: '85%' }}>
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
                    <Ons.Button onClick={this.CancelBill.bind(this)} style={{ backgroundColor: '	#A9A9A9' }}>ส่งคำร้อง</Ons.Button>
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
