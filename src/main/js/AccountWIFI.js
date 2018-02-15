var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class AccountwifiBill extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      roomnumber:''
    };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>AccountWIFI</div>
       <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
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

  popPage() {
    this.props.navigator.popPage();
  }

  handClick(){
    var user = u
    var pass = p
    var roomnumber = rn
    var date = date
    client({method: 'GET', path: '/user/'+user+'/pass/'+pass+'/roomnumber/'+roomnumber+'/date/'+date}).done(
      ons.notification.alert('บันทึกสำเร็จ')
    )
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{ textAlign: 'center' }}>
          <h1>ใบบันทึกแอคเค้าท์ไวไฟ</h1>

      </div>

 <form style={{ textAlign: 'center' }}>
 <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Oxygen480-apps-preferences-desktop-user-password.svg/2000px-Oxygen480-apps-preferences-desktop-user-password.svg.png"} style={{width: '300px'}} />
      <br/>

     user :
     {u} <br/>
     password :
     {p} <br/>
     หมายเลขห้อง :
      {rn} <br/>
    วันและเวลาที่ทำรายการ : {datechair}/{mounthchair}/{yearchair}: at : {hours}:{minut}:{sec}
    <br/>

    <div style={{ textAlign: 'center' }}>
    <br/>
      <Ons.Button onClick={this.handClick.bind(this)}>บันทึก</Ons.Button>
    </div>

 </form>

      </Ons.Page>
    );
  }
}





  var n;
  var rn;
  var date = '';
  var time;

var u;
var p;
var chaird = new Date();
var datechair = chaird.getDate();
var mounthchair = chaird.getMonth() + 1;
var yearchair = chaird.getYear() + 1900;
var hours = chaird.getHours();
var minut = chaird.getMinutes();
var sec = chaird.getSeconds();



var roomnumber;

export default class AccountWIFI extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      roomnumber:''
    };
  }


  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>AccountWIFI</div>
       <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
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

  popPage() {
    this.props.navigator.popPage();
  }

  handleRoomnum(e) {
    this.setState({roomnumber: e.target.value});
  }

  pageAccountwifi() {
    u = this.state.user
    p = this.state.password
    rn = this.state.roomnumber
    date = "" + (chaird.getFullYear()) +'-'+ (chaird.getMonth() + 1) +'-'+ (chaird.getDate());


    if(this.state.roomnumber !==  ''){

      fetch('http://localhost:8080/api/roomnumbers/search/findByroomnumber?'+
        'roomnumber=' + this.state.roomnumber)
         .then((response)=> response.json())
         .then((responseJson) => {

              this.props.navigator.pushPage({ component: AccountwifiBill, props: { key: 'accountwifibill'} });
            })
            .catch((error) => {
                ons.notification.alert('หมายเลขห้องผิดพลาด');

            });
    }else{
      ons.notification.alert('กรุณาป้อนหมายเลขห้อง');
    }
  }

  makeuser(){
          var text = "H";
          var possible = "0123456789";

          for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
            
          return text;
        }

    makepassword(){
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

          return text;
        }


  componentDidMount() {

          this.setState({user: this.makeuser(), password: this.makepassword()})
            }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{ textAlign: 'center' }}>
          <h1>ลงทะเบียนขอแอคเค้าท์ไวไฟ</h1>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/1200px-WiFi_Logo.svg.png"} style={{width: '300px'}} />
      </div>

<Ons.Card style={{ textAlign: 'center' }}>
    <h1>กรอกหมายเลขห้อง</h1>

     <br/>

     <form bordered>
        <item>
      <input
         style={{
            borderWidth: 2,
            borderColor: '',
            paddingLeft: 10,
            height: 20,
          }}
         placeholder="หมายเลขห้อง"
         value={this.state.roomnumber}
         onChange={this.handleRoomnum.bind(this)}
         />
       </item>
     </form>
   <br/>

              <Ons.Button  onClick={this.pageAccountwifi.bind(this)}>
                 ยืนยัน
              </Ons.Button>
              <br/>
</Ons.Card>


      </Ons.Page>
    );
  }
}
