var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class Checkin2 extends React.Component {
  renderToolbar() {
    return (
      <Ons.Toolbar>
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

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
        <center>
        <b> Room Information </b>
        </center>
        <tr>
          <td>
          <p>Order: {billid} </p>
          </td>
        </tr>
          <center>
              <img src={"https://www.picz.in.th/images/2018/02/07/googlemaps_main_1499324335628.jpg"} style={{width: '30%'}}  />
              <tr>
                 <td>
                  <p>name: {a} &emsp;&emsp; room: {b}</p>
                  <p>CheckIn: {datein} &emsp;&emsp; CheckOut: {dateout} </p>
                 </td>
               </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
    );
  }
}

var datein;
var dateout;
var adult;
var child;
var billid;
var a;
var b;
export default class Checkin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
	  room:'',
	  startDate: '',
      endDate: '',
      Adult:'',
      Child:''
    };
  }
  
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
      </Ons.Toolbar>
    );
  }

  makepassword(){
                var text1 = "";
                var text2 = "";
                var text3 = "";
                var possible1 = "0123456789";
                var possible2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                var possible3 = "abcdefghijklmnopqrstuvwxyz";
                let bill = "";

                for (var i = 0; i < 2; i++)
                            text1 += possible1.charAt(Math.floor(Math.random() * possible1.length));

                for (var i = 0; i < 1; i++)
                              text3 += possible3.charAt(Math.floor(Math.random() * possible3.length));

                  bill = 'RC'+text1+text3;

            return bill;
          }


      componentDidMount() {
        this.setState({password: this.makepassword()})
      }

      handleStartDate(e) {
          this.setState({startDate: e.target.value});
        }

        handleEndDate(e) {
          this.setState({endDate: e.target.value});
        }

        editSelects(event) {
          this.setState({Adult: event.target.value});
        }

        editSelects2(event) {
          this.setState({Child: event.target.value});
        }

  pushPage() {
    a = this.state.billorder
    b = this.state.name
    datein = this.state.startDate
    dateout = this.state.endDate
    adult = this.state.Adult
    child = this.state.Child
    billid = this.state.password

     fetch('http://localhost:8080/api/reservationReceipts/search/findByBillidAndName?'+
       'billid=' + this.state.billorder + '&name=' + this.state.name )
       ///////
        .then((response)=> response.json())
        .then((responseJson) => {
         console.log(responseJson);
        client({method: 'GET', path: '/billid/' + billid +'/a/' + a +'/b/' + b +'/datein/' + datein +'/dateout/' + dateout}).done(
                       ons.notification.alert('Success')
          )
            this.props.navigator.pushPage({ component: Checkin2, props: { key: 'Checkin2' } })
            })
        .catch((error) => {
            ons.notification.alert('ไอดีหรือรหัสผิด');
        });
     }


  handleName(e) {
    this.setState({billorder: e.target.value});
  }
  
  handleroom(e) {
    this.setState({name: e.target.value});
  }

  showMenu() {
    this.props.showMenu();
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
          <center>
				      BillId:
            <input type="text"  value={this.state.billorder} onChange={this.handleName.bind(this)}/>&emsp;&emsp;
              <br/><br/>Name:
            <input type="text"  value={this.state.name} onChange={this.handleroom.bind(this)}/>&emsp;&emsp;
          <br/><br/>

          <Ons.Card style={{backgroundColor: '#536877', paddingLeft:'5%'}}>
                  <center>
                         <b  style={{color: 'white'}}> CheckIn: </b>
                      <input type="date"  value={this.state.startDate} onChange={this.handleStartDate.bind(this)}/>&emsp;&emsp;
                         <b  style={{color: 'white'}}> CheckOut: </b>
                      <input type="date"  value={this.state.endDate} onChange={this.handleEndDate.bind(this)}/>&emsp;&emsp;
                         <b  style={{color: 'white'}}> Adult: </b>
          			<select value={this.state.Adult}  Adult={this.state.Adult} onChange={this.editSelects.bind(this)}>&emsp;&emsp;
                        <option value='1'>1 </option>
                        <option value='2'>2 </option>
                      </select>&emsp;&emsp;
                        <b  style={{color: 'white'}}> Child: </b>
                      <select value={this.state.Child}  Child={this.state.Child} onChange={this.editSelects2.bind(this)}>
                        <option value='0'>0 </option>
                        <option value='1'>1 </option>
                      </select>&emsp;&emsp;
                      <Ons.Button style={{backgroundColor: '#800000'}} onClick={this.pushPage.bind(this)}>
                      Check availabllity
                      </Ons.Button>
                  </center>
          		  </Ons.Card>
          </center>
        </Ons.Card>
      </Ons.Page>
    );
  }
}


