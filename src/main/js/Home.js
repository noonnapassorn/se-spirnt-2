var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

import Laundry1 from './Laundry1';
import AccountWIFI from './AccountWIFI';
import Order from './Order';
import Checkin from './Checkin';
import Payment from './Payment';
import BallRoom from './BallRoom';
import ReservationRoom1 from './ReservationRoom1';
import Cleaning from './Cleaning';
import Maintenance from './Maintenance';
import CancelRoom from './CancelRoom';
import ChangeRoom from './ChangeRoom';
import Refund1 from './Refund1';


let imgUrl = 'https://sites.google.com/site/blogpixiefreebies/downloads/marble_desktop.png';
export default class Home extends React.Component {
   renderToolbar() {
    return (
      <Ons.Toolbar style={{backgroundColor: '#A9A9A9'}}>

        <div className='center'> ยินต้อนรับ </div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  PageLaundry1() {
      this.props.navigator.pushPage({ component: Laundry1, props: { key: 'Laundry1' } });
    }

    PageAccountWIFI() {
      this.props.navigator.pushPage({ component: AccountWIFI, props: { key: 'AccountWIFI' } });
    }

  PageOrder() {
    this.props.navigator.pushPage({ component: Order, props: { key: 'Order' } });
  }

  PageBallRoom() {
    this.props.navigator.pushPage({ component: BallRoom, props: { key: 'ballroom' } });
  }

  ReservationRoom1() {
    this.props.navigator.pushPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } });
  }

  Payment() {
    this.props.navigator.pushPage({ component: Payment, props: { key: 'payment' } });
  }

  Cleaning() {
    this.props.navigator.pushPage({ component: Cleaning, props: { key: 'cleaning' } });
  }

  Maintenance() {
    this.props.navigator.pushPage({ component: Maintenance, props: { key: 'maintenance' } });
  }

  CancelRoom() {
      this.props.navigator.pushPage({ component: CancelRoom, props: { key: 'cancelRoom' } });
    }

    ChangeRoom() {
      this.props.navigator.pushPage({ component: ChangeRoom, props: { key: 'changeRoom' } });
  }

   Checkin() {
        this.props.navigator.pushPage({ component: Checkin, props: { key: 'Checkin' } });
    }
    Refund1() {
         this.props.navigator.pushPage({ component: Refund1, props: { key: 'refund1' } });
     }



render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <Ons.Card style={{textAlign: 'center',backgroundImage: 'url(' + imgUrl + ')' }}>
      {/* <img src={"https://scontent.fbkk1-6.fna.fbcdn.net/v/t1.0-9/27545547_1998135836867189_1627246592107264843_n.jpg?_nc_fx=fbkk1-6&_nc_eui2=v1%3AAeHJ-XLDJ3llyeGYpb_VUZymiWANr8glr0O8QrJzBFgOJVQGe7bGC0vcTFGvug1UNz-HRTm12lxBWrbDMbdEu7urQ4ZtgDuYh71dbmwigAkjGg&oh=05cc5d0a8d7be241de6dcfb2b01c32d9&oe=5B0CADF5"} style={{paddingLeft: '-20%',width: '30%' }} /><br /><br /> */}
      <img src={"https://i.imgflip.com/246c0f.gif"} style={{ textAlign: 'center',width: '90%' }} />
         {/* <Ons.Card  style={{ textAlign: 'center',backgroundColor:'#FFFAFA',width: '60%'}}> */}
         <br />
         <br />


        <div style={{ textAlign: 'center'}}>
          <br />

          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.Checkin.bind(this)}>เช็คอิน เช็คเอาท์</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.PageBallRoom.bind(this)}>จองห้องจัดเลี้ยง</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.ReservationRoom1.bind(this)}>จองห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.PageOrder.bind(this)}>บริการอาหารและเครื่องดื่ม</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.Payment.bind(this)}>แจ้งชำระเงิน</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.ChangeRoom.bind(this)}>เปลี่ยนห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.CancelRoom.bind(this)}>ยกเลิกห้องพัก</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.PageLaundry1.bind(this)}>บริการซักอบรีด</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.Cleaning.bind(this)}>แจ้งทำความสะอาด</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.Refund1.bind(this)}>คืนเงิน</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.Maintenance.bind(this)}>แจ้งซ่อม</Ons.Button><br /><br />
          <Ons.Button style={{ width: '70%',backgroundColor: '#A9A9A9' }} onClick={this.PageAccountWIFI.bind(this)}>ลงทะเบียนขอแอคเค้าท์ไวไฟ</Ons.Button><br /><br />



        </div>
        {/* </Ons.Card> */}
        <br/>
        <br/>
        {/* <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/>
        <br/>
        <br/>
        <br/><br/> */}



      </Ons.Card>

      </Ons.Page>
    );
  }
}
