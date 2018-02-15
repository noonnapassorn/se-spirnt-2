var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

var n;
var cancelbill;
var bankaccountnum;
var bankcheck;
let imgUrl = 'https://sites.google.com/site/blogpixiefreebies/downloads/marble_desktop.png';
class Refund2 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '#A9A9A9' }}>
       <Ons.BackButton> กลับ</Ons.BackButton>
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
  handleSave(){
         n = name
        cancelbill = cancelbill
        bankaccountnum = bankaccountnum
        bankcheck = bankcheck;
       client({method: 'GET', path: '/n/'+n+'/cancelbill/'+cancelbill+'/bankaccountnum/'+bankaccountnum+'/bankcheck/'+bankcheck}).done(
         ons.notification.alert('บันทึกข้อมูลเรียบร้อย')
       )
    }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card >
         <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
           <div style={{ textAlign: 'center' }}>
              <h2>ใบบันทึกการคืนเงิน</h2>
              <img src ={"https://firstjobber.adecco.co.th/uploads/first-jobber/051.financialanalyst.png"} style = {{width: '15%'}}/>
          </div>

        <p>
        ชื่อเจ้าของบัญชี :
        {name}
        </p>

        <p>
        เลขที่ใบบันทึกการยกเลิกห้อง:
        {cancelbill}
        </p>

        <p>
        หมายเลขบัญชีธนาคาร:
        {bankaccountnum}
        </p>

        <p>
        ธนาคาร:
        {bankcheck}
        </p>


        <div style={{ textAlign: 'center' }}>
         <Ons.Button onClick={this.handleSave.bind(this)}style={{ backgroundColor: '	#A9A9A9' }}>บันทึก</Ons.Button>
         </div>
        </Ons.Card>
       </Ons.Card>
       <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' , backgroundColor: '	#A9A9A9' }}>
          ขอบคุณที่ใช้บริการ!
       </p>
      </Ons.Page>
    );
  }
}


var bankcheck;
var pro = ['ธนาคารไทยพาณิชย์(SCB) 110-11212222','ธนาคารกรุงไทย(KTB) 120-11313333','ธนาคารกรุงเทพ(BBL) 132-11414444','ธนาคารกสิกรไทย(KBANK) 141-1234242'];
var URL = ["https://image.goosiam.com/imgupload/upload44/AyHljB4k3Acv.jpg","https://image.goosiam.com/imgupload/upload44/h81smkbmrcqT.jpg","https://image.goosiam.com/imgupload/upload44/PY7CxbuheJ3K.jpg","https://f.ptcdn.info/203/020/000/1402980872-kbanklogo-o.jpg"];
export default class Refund1 extends React.Component {
    constructor(){
    super()
    this.state={
      name: '',
      cancelbill:'',
      bankaccountnum:'',
      banks: [
        'ธนาคารไทยพาณิชย์(SCB) 110-11212222',
        'ธนาคารกรุงไทย(KTB) 120-11313333',
        'ธนาคารกรุงเทพ(BBL 132-11414444',
        'ธนาคารกสิกรไทย(KBANK) 141-1234242'
      ],
      selectedBanks: 'No'
    }
  }
   renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '#A9A9A9' }}>
        <div className='center'>โรงแรมTeam15</div>
        <Ons.BackButton> กลับ</Ons.BackButton>
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
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleCancelbillChange(e) {
    this.setState({cancelbill: e.target.value});
  }
  handleBankaccountnumChange(e) {
    this.setState({bankaccountnum: e.target.value});
  }
  handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
  }

    pushpageRefund2() {
       name = this.state.name
       bankaccountnum = this.state.bankaccountnum
       //bankname = this.state.bankname
       bankcheck = this.state.selectedBanks

      if(this.state.cancelbill !== ''){
        fetch('http://localhost:8080/api/cancelRooms/search/findByCancelbill?'+
          'cancelbill=' + this.state.cancelbill)
           .then((response)=> response.json())
           .then((responseJson) => {
    cancelbill = this.state.cancelbill
      this.props.navigator.pushPage({ component: Refund2, props: { key: 'refund2' } });
       })
              .catch((error) => {
                  ons.notification.alert('เลขที่ใบบันทึกการยกเลิกห้องผิด!');

              });
      }else{
        ons.notification.alert('กรุณากรอกเลขที่ใบบันทึกการยกเลิกห้อง');
      }
    }

  renderCheckboxRow(row,c) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedBanks}
            onChange={this.handleBanksChange.bind(this, row)}
          />
        </label>

        <label htmlFor={`checkbox-${pro[c]}`} className = 'center' >
          <img src={URL[c]} style={{width: '80',height: '75'}} />&emsp;{pro[c]}
        </label>

        <label htmlFor={`checkbox-${row}`} className='right'>

        </label>
      </Ons.ListItem>
    )
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
         <div style={{ textAlign: 'left' }}>
         <div style={{ textAlign: 'center' }}>
           <h1>ระบบคืนเงิน</h1>
           <img src ={"https://firstjobber.adecco.co.th/uploads/first-jobber/051.financialanalyst.png"} style = {{width: '15%'}}/>
          <p>
            <Ons.Input
              value={this.state.name}
              onChange={this.handleNameChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ชื่อเจ้าของบัญชี' />
          </p>
          <p>
            <Ons.Input
              value={this.state.cancelbill}
              onChange={this.handleCancelbillChange.bind(this)}
              modifier='underbar'
              float
              placeholder=' เลขที่ใบบันทึกการยกเลิกห้อง' />
          </p>
          <p>
            <Ons.Input
              value={this.state.bankaccountnum}
              onChange={this.handleBankaccountnumChange.bind(this)}
              modifier='underbar'
              float
              placeholder='หมายเลขบัญชีธนาคาร' />
          </p>

          <Ons.List
           dataSource={this.state.banks}
           renderHeader={() => <Ons.ListHeader>เลือกธนาคาร</Ons.ListHeader>}
           renderRow={this.renderCheckboxRow.bind(this)}
         />

           <Ons.Button value = {this.state.name} onClick={this.pushpageRefund2.bind(this, Refund2)}style={{ backgroundColor: '	#A9A9A9' }}>ถัดไป</Ons.Button><br /><br/>

        </div>
        </div>


        </Ons.Card>
        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px', backgroundColor: '	#A9A9A9' }}>
           ขอบคุณที่ใช้บริการ!
        </p>

      </Ons.Page>
    );
  }
}
