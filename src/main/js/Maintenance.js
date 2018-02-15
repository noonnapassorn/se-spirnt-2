var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
var name;
var cal;
var roomnumber;
var listname;
var data;
var date;
var roomID='';

class Bill extends React.Component {
 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรมTeam15</div>
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

  handClick(){
    name = this.props.state.name
    cal = this.props.state.cal
    roomnumber = sendroom
    listname = deluxecheck
    data = this.props.state.data
    date =this.props.state.date
    client({method: 'GET', path: '/name/'+name+'/cal/'+cal+'/roomnumber/'+roomnumber+'/listname/'+listname+'/data/'+data+'/date/'+date}).done(
      ons.notification.alert('บันทึกสำเร็จ')
    )
  }


  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>

       <Ons.Card>
        <Ons.Card>
           <div style={{ textAlign: 'center' }}>
              <h2>ใบบันทึกการแจ้งชำระเงิน</h2>
          </div>

                <p>
                  ชื่อ-สกุล : {this.props.state.name}
                </p>

                <p>
                  เบอร์โทรศัพท์ : {this.props.state.cal}
                </p>

                <p>
                  หมายเลขห้อง : {sendroom}
                </p>

                <p>
                  รายการแจงซ่อม : {deluxecheck}
                </p>

                <p>
                  ข้อมูลเพิ่มเติมที่แจ้งซ่อม : {this.props.state.data}
                </p>

                <p>
                  วันที่โอน: {this.props.state.date}
                </p>



        <div style={{ textAlign: 'center' }}>
          <Ons.Button onClick={this.handClick.bind(this)}>บันทึก</Ons.Button>
        </div>

        </Ons.Card>
      </Ons.Card>

      <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
        Thank. You!
      </p>

      </Ons.Page>
    );
  }
}

class List extends React.Component {

  constructor(){
    super()
    this.state={
      name: '',
      cal: '',
      data: '',
      date: ''
    }
  }

 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรมTeam15</div>
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

  PageBill() {
    if( (this.state.name !==  '') && (this.state.cal) && (this.state.data) && (this.state.date)){
    this.props.navigator.pushPage({ component: Bill, props: { key: 'bill',state:this.state } });
    }else{
      ons.notification.alert('กรุณากรอกข้อมูลให้ครบถ้วน');

    }
  }

  handleNameChange(e) {
    this.setState({name: e.target.value});
  }

  handleCalChange(e) {
    this.setState({cal: e.target.value});
  }

  handleDataChange(e) {
    this.setState({data: e.target.value});
  }

  handleDateChange(e) {
    this.setState({date: e.target.value});
  }



  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
       <Ons.Card>
        <div style={{ textAlign: 'center' }}>

            <h3>*กรอกรายละเอียดเพิ่มเติม</h3>

          <p>
            <Ons.Input
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ชื่อ-สกุล พนักงาน' />
          </p>

          <p>
            <Ons.Input
            value={this.state.cal}
            onChange={this.handleCalChange.bind(this)}
              modifier='underbar'
              float
              placeholder='เบอร์โทรศัพท์' />
          </p>

          <p>
            <Ons.Input
            value={this.state.data}
            onChange={this.handleDataChange.bind(this)}
              modifier='underbar'
              float
              placeholder='ข้อมูลเพิ่มเติมที่แจ้งซ่อม' />
          </p>

        <form >
           <div>
              <label>วันที่แจ้งซ่อม</label>
               <div>
                <input type="date" size="30" value={this.state.date}
                onChange={this.handleDateChange.bind(this)}/>
               </div>
           </div>
           <br/>
        </form>

        </div>
        <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.PageBill.bind(this, Bill)}>เสร็จสิ้น </Ons.Button><br/><br/>
        </p>
        </Ons.Card>


        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
        </p>
      </Ons.Page>
    );
  }
}

var deluxecheck;
class ReserveDeluxe extends React.Component {
  constructor(){
    super()
    this.state={
      maintenanceList: [
        'อินเทอร์เน็ต',
        'โทรทัศน์',
        'โทรศัพท์',
        'เครื่องเป่าผม',
        'เครื่องทำน้ำอุ่น',
        'เครื่องปรับอากาศ',
        'ไฟฟ้า'
      ],
      selectedMaintenanceList: 'No'

    }
  }

  renderToolbar() {

    return (
      <Ons.Toolbar>
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

 handleMaintenanceListChange(maintenanceList) {
    this.setState({selectedMaintenanceList: maintenanceList});
  }

  PageList() {
    deluxecheck = this.state.selectedMaintenanceList
    this.props.navigator.pushPage({ component: List, props: { key: 'list' } });
  }

renderCheckboxRow(row) {
    return (
      <Ons.ListItem key={row} tappable>
        <label className='left'>
          <Ons.Checkbox
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedMaintenanceList}
            onChange={this.handleMaintenanceListChange.bind(this, row)}
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
            <Ons.List
              dataSource={this.state.maintenanceList}
              renderHeader={() => <Ons.ListHeader>*เลือกรายการแจ้งซ่อม</Ons.ListHeader>}
              renderRow={this.renderCheckboxRow.bind(this)}
            />
          </Ons.Card>
          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.PageList.bind(this, List)}>ยืนยัน </Ons.Button><br/><br/>
          </p>
      </Ons.Card>

      <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
      </p>

      </Ons.Page>
    );
  }
}

var sendroom='';
export default  class Maintenance extends React.Component {

  constructor(){
    super()
    this.state={
      roomnumber: ''
    }
  }

 renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>โรงแรมTeam15</div>
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

  PageReserveDeluxe() {

    if(this.state.roomnumber !==  ''){

      fetch('http://localhost:8080/api/roomnumbers/search/findByroomnumber?'+
        'roomnumber=' + this.state.roomnumber)
         .then((response)=> response.json())
         .then((responseJson) => {
              sendroom =this.state.roomnumber;
              this.props.navigator.pushPage({ component: ReserveDeluxe, props: { key: 'reserveDeluxe'} });
            })
            .catch((error) => {
                ons.notification.alert('หมายเลขห้องผิดพลาด');

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
        <div style={{ textAlign: 'center' }}>
           <h1>บริการแจ้งซ่อม</h1>

            <img src={"http://image.free.in.th/v/2013/ia/180123121723.jpg"} style={{width: '100%'}}  />
        </div>

        </Ons.Card>

           <Ons.ListTitle>ค้นหาห้องแจ้งซ่อม</Ons.ListTitle>


           <Ons.Card>
            <div style={{ textAlign: 'center' }}>

            <form >
              <div>
                <label>หมายเลขห้อง:</label>
                <p>
                  <Ons.SearchInput
                  value={this.state.roomnumber}
                  onChange={this.handleRoomnumberChange.bind(this)}
                  placeholder='Search' />
                </p>
              </div>
              <br/>
            </form>

            <p style={{ textAlign: 'center' }}>
              <Ons.Button onClick={this.PageReserveDeluxe.bind(this, ReserveDeluxe)}>ยืนยัน </Ons.Button><br/><br/>
            </p>
          </div>
           </Ons.Card>


        <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
          Thank. You!
        </p>
      </Ons.Page>
    );
  }
}
