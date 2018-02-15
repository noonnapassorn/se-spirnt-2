var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
let imgUrl = 'https://sites.google.com/site/blogpixiefreebies/downloads/marble_desktop.png';
class  Payment2 extends React.Component {

  renderToolbar() {

    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
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
    let {name,idBill,bankcheck,time,date,selectedBanks} = this.props.state
    // /name/{name}/idBill/{idBill}/bank/{bank}/time/{time}/date/{date}
    client({method: 'GET', path: `/name/${name}/idBill/${idBill}/bank/${selectedBanks}/time/${time}/date/${date}`}).done(response => {
             console.log(response)
               ons.notification.alert('บันทึกข้อมูลเรียบร้อย');
     });
  }
  render() {

    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

      <Ons.Card style={{ backgroundColor: '	#D3D3D3' }}>
         <Ons.Card style={{ paddingLeft: '0%', backgroundImage: 'url(' + imgUrl + ')' }}>
           <div style={{ textAlign: 'center' }}>
              <h2>ใบบันทึกการแจ้งชำระเงิน</h2>
              <img src ={"https://firstjobber.adecco.co.th/uploads/first-jobber/051.financialanalyst.png"} style = {{width: '15%', }}/>
          </div>

          <p>
        ชื่อ-สกุล :{this.props.state.name}
        </p>

        <p>
        เลขที่ใบบันทึกการจอง :{this.props.state.idBill}
        </p>

        <p>
        ธนาคาร: : {bankcheck}
        </p>

        <p>
        วันที่โอน: {this.props.state.date}
      </p>

        <p>
        เวลาที่โอน : {this.props.state.time}
        </p>
        <div style={{ textAlign: 'center' }}>
        <Ons.Button onClick={this.handleSave.bind(this)}>บันทึก</Ons.Button>
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
var sendroom = '';
var bankcheck;
var pro = ['ธนาคารไทยพาณิชย์(SCB) 110-11212222','ธนาคารกรุงไทย(KTB) 120-11313333','ธนาคารกรุงเทพ(BBL 132-11414444)'];
var URL = ["https://image.goosiam.com/imgupload/upload44/AyHljB4k3Acv.jpg","https://image.goosiam.com/imgupload/upload44/h81smkbmrcqT.jpg","https://image.goosiam.com/imgupload/upload44/PY7CxbuheJ3K.jpg"];
export default class Payment extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      idBill: '',
      date: '',
      time:'',
      banks: [
        'ธนาคารไทยพาณิชย์(SCB) 110-11212222',
        'ธนาคารกรุงไทย(KTB) 120-11313333',
        'ธนาคารกรุงเทพ(BBL 132-11414444'
      ],
      selectedBanks: 'No'

    }
  }

 renderToolbar() {
    return (
      <Ons.Toolbar style={{ backgroundColor: '	#A9A9A9' }}>
        <div className='center'>โรงแรงTeam15</div>
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

  popPage() {
    this.props.navigator.popPage();
  }

  Payment2() {
     bankcheck = this.state.selectedBanks
     if(this.state.selectedBanks ==  ''){
            ons.notification.alert('กรุณากรอกข้อมูลให้ครบ');
       }else {
           client({method: 'GET', path: `/name/${this.state.name.trim()}/billid/${this.state.idBill.trim()}`}).done(response => {
            console.log(response.entity.status)
            if(response.entity.status==="not found")
               ons.notification.alert('ชื่อหรือเลขที่ใบบันทึกไม่ถูกต้อง');
             else if("found")
                this.props.navigator.pushPage({ component: Payment2, props: { key: 'payment2', state: this.state } });
             else
                ons.notification.alert('server error'+response.status.code);
       });

       }


  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleIdBillChange(e) {
    this.setState({idBill: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleBanksChange(banks) {
    this.setState({selectedBanks: banks});
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
           <h1>แจ้งชำระเงิน</h1>
           <img src ={"https://firstjobber.adecco.co.th/uploads/first-jobber/051.financialanalyst.png"} style = {{width: '15%'}}/>
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

           <Ons.List
          dataSource={this.state.banks}
          renderHeader={() => <Ons.ListHeader>เลือกธนาคาร</Ons.ListHeader>}
          renderRow={this.renderCheckboxRow.bind(this)}
        />



         </div>
               <form >
           <div>
           <br/>
           <br/>
                <label>เลือกวันที่โอน:</label> &ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

              <div>
               <input type="date"  value={this.state.date}
            onChange={this.handleDateChange.bind(this)}/>
                &ensp;&ensp;&ensp;

              </div>
           </div>
           <br/>
           <br/>
           <div>
                 <label>เลือกเวลาที่โอน:</label> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
              <div>
               <input type="time" value={this.state.time}
            onChange={this.handleTimeChange.bind(this)}  />
              </div>
           </div>
           <br/>  <div style={{ textAlign: 'center' }}>
                         <Ons.Button value = {this.state.banks} onClick={this.Payment2.bind(this, Payment2)}>ถัดไป </Ons.Button><br/><br/>
                  </div>

        </form>
             </div>
        </Ons.Card>

        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px', backgroundColor: '	#A9A9A9'  }}>

           ขอบคุณที่ใช้บริการ!
        </p>
      </Ons.Page>
    );
  }
}
