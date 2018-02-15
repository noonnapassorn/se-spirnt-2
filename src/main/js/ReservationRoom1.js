var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class DataRoom extends React.Component {
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

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <img src={"https://www.picz.in.th/images/2018/01/03/anigif.gif"}
				  style={{width: '100%'}}  />
				  &emsp;&emsp;&emsp;&emsp;
        <Ons.Card>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} style={{ width: '500' }} />
          <b style={{color: 'red'}}>
              &emsp;&emsp;Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            The deluxe rooms, located at the Tower Wing,
            cover a standard size of 32 m2 with twin beds,
            providing high-speed Internet access, hairdryer,
            cable TV and telephone with bathroom extension.
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} style={{ width: '500' }} />
          <b style={{color: 'red'}}>
              &emsp;&emsp;Super Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            These comfortable 32-m2 rooms are located at the Tower Wing and Sima Wing.
            The rooms at the Tower Wing offer twin beds and those at the Sima Wing offer either king size or twin beds.
            Convenient amenities are provided such as high-speed Internet access, hairdryer,
            cable TV and telephone with bathroom extension.
            These rooms are beautifully furnished with teak in a tradition Thai style.
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} style={{ width: '500' }} />
          <b style={{color: 'red'}}>
              &emsp;&emsp;Premier Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            These rooms, adorned in teak, are fitted with either king size or twin beds and a sofa.
            They are 32-m2 ; offering complete comfort with welcome fruit basket, high-speed Internet access,
            hairdryers, cable TV, telephone with bathroom extension, bathrobes, slippers, tea/coffee facilities,
            a personal electronic safe and a variety of pillows on request.
            Express check-in and check-out services are also offered at the Premier Class.
            Complimentary breakfast is served at the Premier Lounge, Nai-Ruen Restaurant.
          </p>
        </Ons.Card>
        &emsp;&emsp;&emsp;&emsp;
        <Ons.Card>
          <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} style={{ width: '500' }} />
          <b style={{color: 'red'}}>
              &emsp;&emsp;Premier Grand Deluxe
          </b>
          <p style={{ textAlign: 'center', opacity: '0.6', paddingTop: '20px' }}>
            Our 40-m2 Premier Legacy rooms are situated at the corners of the building.
            Decorated in traditional teak, the rooms offer a relaxing ambiance.
            You can make your choice of either king size or twin beds. Full amenities are provided,
            including welcome fruit basket, high-speed Internet access, hairdryer, cable TV,
            telephone with bathroom extension, slippers, tea/coffee facilities,
            a personal electronic safe and a variety of pillows on request.
            Express check-in and check-out services are offered at the Premier Class.
            Complimentary breakfast is served in your exclusive lounge at the Premier Lounge,
            Nai-Ruen Restaurant.
          </p>
        </Ons.Card>
      </Ons.Page>
    );
  }
}
var pokemon;
var chaird = new Date();
var datechair = chaird.getDate();
var mounthchair = chaird.getMonth() + 1;
var yearchair = chaird.getYear() + 1900;
var hours = chaird.getHours();
var minut = chaird.getMinutes();
var sec = chaird.getSeconds();
class ReservationRoom2 extends React.Component {
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

  loadPage() {
    this.props.navigator.resetPage({ component: ReservationRoom1, props: { key: 'ReservationRoom1' } }, { animation: 'fade' });
  }

  render() {
      if(nameroom == 'Deluxe'){
        return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
        <tr>
          <td>
          <p>เลขใบบันทึก: &ensp; {billid}</p>
          </td>
        </tr>
          <center>
            <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg"} alt="Onsen UI" style={{ width: 500 }} />
            <tr>
              <td>
                <p>ชื่อผู้จอง:  &ensp; {name} &ensp;&ensp; อีเมลล์: &ensp; {email} &ensp;&ensp; เบอร์โทร: &ensp; {tel} </p>
                <p>ชื่อห้อง: &ensp; {nameroom}  &ensp;&ensp;&ensp;&ensp;&ensp;  หมายเลขห้อง &ensp; {roomnumber}</p>
                <p>ราคา:  &ensp; {price}</p>
                <p>วันเวลาที่ทำการจอง: &ensp; {datechair}/{mounthchair}/{yearchair}&nbsp;at&nbsp;{hours}:{minut}:{sec}</p>
              </td>
            </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
      );
      }else if(nameroom == 'Super Deluxe'){
        return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
        <tr>
          <td>
          <p>เลขใบบันทึก: &ensp; {billid}</p>
          </td>
        </tr>
          <center>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg"} alt="Onsen UI" style={{ width: 500 }} />
        <tr>
              <td>
                <p>ชื่อผู้จอง:  &ensp; {name} &ensp;&ensp; อีเมลล์: &ensp; {email} &ensp;&ensp; เบอร์โทร: &ensp; {tel} </p>
                <p>ชื่อห้อง: &ensp; {nameroom}  &ensp;&ensp;&ensp;&ensp;&ensp;  หมายเลขห้อง &ensp; {roomnumber}</p>
                <p>ราคา:  &ensp; {price}</p>
                <p>วันเวลาที่ทำการจอง: &ensp; {datechair}/{mounthchair}/{yearchair}&nbsp;at&nbsp;{hours}:{minut}:{sec}</p>
              </td>
            </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
      );
      }else if(nameroom == 'Gremier Deluxe'){
        return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
        <tr>
          <td>
          <p>เลขใบบันทึก: &ensp; {billid}</p>
          </td>
        </tr>
          <center>
          <img src={"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg"} alt="Onsen UI" style={{ width: 500 }} />
        <tr>
              <td>
                <p>ชื่อผู้จอง:  &ensp; {name} &ensp;&ensp; อีเมลล์: &ensp; {email} &ensp;&ensp; เบอร์โทร: &ensp; {tel} </p>
                <p>ชื่อห้อง: &ensp; {nameroom}  &ensp;&ensp;&ensp;&ensp;&ensp;  หมายเลขห้อง &ensp; {roomnumber}</p>
                <p>ราคา:  &ensp; {price}</p>
                <p>วันเวลาที่ทำการจอง: &ensp; {datechair}/{mounthchair}/{yearchair}&nbsp;at&nbsp;{hours}:{minut}:{sec}</p>
              </td>
            </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
      );
      }else if(nameroom == 'Premier Grand Deluxe'){
        return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <Ons.Card>
        <tr>
          <td>
          <p>เลขใบบันทึก: &ensp; {billid}</p>
          </td>
        </tr>
          <center>
          <img src={"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"} alt="Onsen UI" style={{ width: 500 }} />
        <tr>
              <td>
                <p>ชื่อผู้จอง:  &ensp; {name} &ensp;&ensp; อีเมลล์: &ensp; {email} &ensp;&ensp; เบอร์โทร: &ensp; {tel} </p>
                <p>ชื่อห้อง: &ensp; {nameroom}  &ensp;&ensp;&ensp;&ensp;&ensp;  หมายเลขห้อง: &ensp; {roomnumber}</p>
                <p>ราคา:  &ensp; {price}</p>
                <p>วันเวลาที่ทำการจอง: &ensp; {datechair}/{mounthchair}/{yearchair}&nbsp;at&nbsp;{hours}:{minut}:{sec}</p>
              </td>
            </tr>
          </center>
        </Ons.Card>
      </Ons.Page>
      );
      }
  }
}

var date = '';
var billid;
var roomnumber;
var name;
var name2;
var email;
var tel;
class numberRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
		  email: '',
		  tel:''
    };
    this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
      </Ons.Toolbar>
    );
  }

  showMenu() {
    this.props.showMenu();
  }

  handleChange(key) {
	 return function (e) {
		 var state = {};
		 state[key] = e.target.value;
		 this.setState(state);
	 }.bind(this);

 }

 handleSubmit(event) {
	 var data = {
			 name: this.state.name,
			 email: this.state.email,
			 tel: this.state.tel
	 }
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

  pushPage(event) {
    roomnumber = event;
    billid = this.state.password
    name = this.state.name
    email = this.state.email
	tel = this.state.tel
    date = "" + (chaird.getFullYear()) + (chaird.getMonth() + 1) + (chaird.getDate());
    client({method: 'POST', path: '/billid/' + billid +'/name/' + name + '/nameroom/' + nameroom  + '/roomnumber/' + roomnumber + '/date/' + date + '/price/' + price}).done(
      ons.notification.alert('Success')
    )
    this.props.navigator.pushPage({ component: ReservationRoom2, props: { key: 'ReservationRoom2' } })

  }

  render() {
    if(nameroom == 'Deluxe'){
        return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <center>
		    	  <table style={{width:'50%'}}>
			      <tr>
				      <td>
				        <div>
				          <style dangerouslySetInnerHTML={{__html: "\ninput[type=text]{\n   width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ninput[type=email]{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ntextarea{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nselect {\n    width: 23.3%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 70%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n" }} />
                  <div>
				            <form onSubmit={this.handleSubmit}>
                    <table style={{width:'100%'}}>
                    <tr>
                      Name:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>
                    <tr>
                      Email:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.email} onChange={this.handleChange('email')} required />
                    </tr>
                    <tr>
                      Tel:&emsp;&emsp;&emsp;
                      <input style={{ width: '35%'}} type="text" value={this.state.tel} onChange={this.handleChange('tel')} required />
                    </tr>
					          </table>
				            </form>
				          </div>
				        </div>
				      </td>
			      </tr>
			      </table>
		      </center>
          <p style={{ textAlign: 'center' }}>
            <img src={"https://tipsdditcomputer.files.wordpress.com/2017/08/21081954_874785886021505_693642735_o.png"} style={{ margin: '0px', width: '100%' }} />
          </p>
          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.pushPage.bind(this, 'A01')}><img src={"https://www.picz.in.th/images/2018/01/25/A01.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'A02')}><img src={"https://www.picz.in.th/images/2018/01/25/A02.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'A03')}><img src={"https://www.picz.in.th/images/2018/01/25/A03.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'A04')}><img src={"https://www.picz.in.th/images/2018/01/25/A04.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'A05')}><img src={"https://www.picz.in.th/images/2018/01/25/A05.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
          </p>
        </Ons.Page>
      );
      }else if(nameroom == 'Super Deluxe'){
        return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <center>
		    	  <table style={{width:'50%'}}>
			      <tr>
				      <td>
				        <div>
				          <style dangerouslySetInnerHTML={{__html: "\ninput[type=text]{\n   width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ninput[type=email]{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ntextarea{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nselect {\n    width: 23.3%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 70%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n" }} />
                  <div>
				            <form onSubmit={this.handleSubmit}>
                    <table style={{width:'100%'}}>
                    <tr>
                      Name:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>
                    <tr>
                      Email:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.email} onChange={this.handleChange('email')} required />
                    </tr>
                    <tr>
                      Tel:&emsp;&emsp;&emsp;
                      <input style={{ width: '35%'}} type="text" value={this.state.tel} onChange={this.handleChange('tel')} required />
                    </tr>
					          </table>
				            </form>
				          </div>
				        </div>
				      </td>
			      </tr>
			      </table>
		      </center>
          <p style={{ textAlign: 'center' }}>
            <img src={"https://tipsdditcomputer.files.wordpress.com/2017/08/21081954_874785886021505_693642735_o.png"} style={{ margin: '0px', width: '100%' }} />
          </p>
          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.pushPage.bind(this, 'S01')}><img src={"https://www.picz.in.th/images/2018/01/25/S01.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'S02')}><img src={"https://www.picz.in.th/images/2018/01/25/S02.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'S03')}><img src={"https://www.picz.in.th/images/2018/01/25/S03.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'S04')}><img src={"https://www.picz.in.th/images/2018/01/25/S04.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'S05')}><img src={"https://www.picz.in.th/images/2018/01/25/S05.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
          </p>
        </Ons.Page>
      );
      }else if(nameroom == 'Gremier Deluxe'){
       return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <center>
		    	  <table style={{width:'50%'}}>
			      <tr>
				      <td>
				        <div>
				          <style dangerouslySetInnerHTML={{__html: "\ninput[type=text]{\n   width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ninput[type=email]{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ntextarea{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nselect {\n    width: 23.3%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 70%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n" }} />
                  <div>
				            <form onSubmit={this.handleSubmit}>
                    <table style={{width:'100%'}}>
                    <tr>
                      Name:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>
                    <tr>
                      Email:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.email} onChange={this.handleChange('email')} required />
                    </tr>
                    <tr>
                      Tel:&emsp;&emsp;&emsp;
                      <input style={{ width: '35%'}} type="text" value={this.state.tel} onChange={this.handleChange('tel')} required />
                    </tr>
					          </table>
				            </form>
				          </div>
				        </div>
				      </td>
			      </tr>
			      </table>
		      </center>
          <p style={{ textAlign: 'center' }}>
            <img src={"https://tipsdditcomputer.files.wordpress.com/2017/08/21081954_874785886021505_693642735_o.png"} style={{ margin: '0px', width: '100%' }} />
          </p>
          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.pushPage.bind(this, 'G01')}><img src={"https://www.picz.in.th/images/2018/01/25/G01.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'G02')}><img src={"https://www.picz.in.th/images/2018/01/25/G02.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'G03')}><img src={"https://www.picz.in.th/images/2018/01/25/G03.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'G04')}><img src={"https://www.picz.in.th/images/2018/01/25/G04.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'G05')}><img src={"https://www.picz.in.th/images/2018/01/25/G05.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
          </p>
        </Ons.Page>
      );
      }else if(nameroom == 'Premier Grand Deluxe'){
        return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <center>
		    	  <table style={{width:'50%'}}>
			      <tr>
				      <td>
				        <div>
				          <style dangerouslySetInnerHTML={{__html: "\ninput[type=text]{\n   width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ninput[type=email]{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\ntextarea{\n    width: 70%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nselect {\n    width: 23.3%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    width: 70%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\ninput[type=submit]:hover {\n    background-color: #45a049;\n}\n" }} />
                  <div>
				            <form onSubmit={this.handleSubmit}>
                    <table style={{width:'100%'}}>
                    <tr>
                      Name:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.name} onChange={this.handleChange('name')} required />
                    </tr>
                    <tr>
                      Email:&emsp;&emsp;
                      <input style={{ width: '70%'}} type="text" value={this.state.email} onChange={this.handleChange('email')} required />
                    </tr>
                    <tr>
                      Tel:&emsp;&emsp;&emsp;
                      <input style={{ width: '35%'}} type="text" value={this.state.tel} onChange={this.handleChange('tel')} required />
                    </tr>
					          </table>
				            </form>
				          </div>
				        </div>
				      </td>
			      </tr>
			      </table>
		      </center>
          <p style={{ textAlign: 'center' }}>
            <img src={"https://tipsdditcomputer.files.wordpress.com/2017/08/21081954_874785886021505_693642735_o.png"} style={{ margin: '0px', width: '100%' }} />
          </p>
          <p style={{ textAlign: 'center' }}>
            <Ons.Button onClick={this.pushPage.bind(this, 'P01')}><img src={"https://www.picz.in.th/images/2018/01/25/P01.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'P02')}><img src={"https://www.picz.in.th/images/2018/01/25/P02.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'P03')}><img src={"https://www.picz.in.th/images/2018/01/25/P03.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'P04')}><img src={"https://www.picz.in.th/images/2018/01/25/P04.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
            &ensp;&ensp;&ensp;
            <Ons.Button onClick={this.pushPage.bind(this, 'P05')}><img src={"https://www.picz.in.th/images/2018/01/25/P05.png"} style={{ margin: '0px', width: '100' }} /></Ons.Button>
          </p>
        </Ons.Page>
      );
      }
  }
}

var URL = ["https://www.picz.in.th/images/2018/01/26/201707-11-164720_lG-0.jpg",
"https://www.picz.in.th/images/2018/01/26/201707-11-165259_9F-0.jpg",
"https://www.picz.in.th/images/2018/01/26/201707-11-172457_DJ-0.jpg",
"https://www.picz.in.th/images/2018/01/26/201709-12-144657_yV-0.jpg"];
var nameroom;
var price;
var order = 0;
export default class ReservationRoom1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rooms: [] };
  }

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='left'><Ons.BackButton>Back</Ons.BackButton></div>
      </Ons.Toolbar>
    );
  }
  showMenu() {
    this.props.showMenu();
  }


  pushPage(event,event2) {
    nameroom = event;
    price = event2;
      this.props.navigator.pushPage({ component: numberRoom, props: { key: 'numberRoom' } });
  }

  pushPage2() {
    this.props.navigator.pushPage({ component: DataRoom, props: { key: 'DataRoom1' } });
  }

  popPage() {
    this.props.navigator.popPage();
  }

  componentDidMount() {
    client({ method: 'GET', path: '/api/rooms' }).done(response => {
      this.setState({ rooms: response.entity._embedded.rooms});
    });
  }

  renderRow(row, c) {
    return (
        <Ons.List>
        <div style={{width: '100%', backgroundColor: '#faebd7'}}>
            <Ons.ListHeader></Ons.ListHeader>
      <Ons.ListItem key={row._links.self.href} tappable>
        <div className='left'>
          <span style={{ textAlign: 'left' }}>&emsp;
          <img src={URL[c]} style={{ width: '500' }} /></span>
        </div>
        <div>
          <b style={{color: 'red'}}>
                &emsp;&emsp;{row.nameroom}
              </b>
                <br/>&emsp;&emsp;Adult(s) : 2 , Children 1
                <br/>&emsp;&emsp;*Include breakfast

                <br/><br/><br/><br/><br/>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  &emsp;&emsp;Room Rate {row.price} THB /night
        </div>
        <div className='right'>
          <Ons.Button style={{ margin: '6px', textAlign: 'right' }} onClick={this.pushPage.bind(this, row.nameroom, row.price)}>Select</Ons.Button>
        </div>
      </Ons.ListItem>
      </div>
        </Ons.List>
    )
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
        <img src={"https://www.picz.in.th/images/2018/01/03/anigif.gif"} style={{width: '100%'}}  />
        <div style={{ textAlign: 'right' }}>
          <Ons.Button onClick={this.pushPage2.bind(this)}>Room & Suties</Ons.Button>
          </div>
        <Ons.List
          dataSource={this.state.rooms}
          renderRow={this.renderRow.bind(this)}
        />
      </Ons.Page>
    );
  }
}