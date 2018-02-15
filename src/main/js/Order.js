
var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

class Orderbill extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      name:'',
      roomnum:''
    };
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>Order</div>
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
  
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleRoomnum(e) {
    this.setState({roomnum: e.target.value});
  }
  

  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      
   <Ons.Card >
      <div style={{ textAlign: 'lift' }}>
          เลขที่ใบเสร็จ : 
          {bid}
      </div>
            <h1 style={{ textAlign: 'center' }}>ใบเสร็จ</h1>
      
     <form style={{ textAlign: 'center' }}> 
         ชื่อ : 
         {n} <br/>
         เลขห้อง : 
         {rn} <br/>
         รายการอาหาร : 
         {foodId} <br/>
         รายการเครื่องดื่ม : 
         {d} <br/>
         วันที่สั่ง : 
         {datechair}/{mounthchair}/{yearchair}<br/>
         เวลา
         {hours}:{minut}:{sec}<br/>
         ราคารวม&emsp;
         {sum+sum1}&emsp;บาท
     </form>
     
   <Ons.Card>
    
        </Ons.Card>
        <br/>
             
</Ons.Card>

       
      </Ons.Page>
    );
  }
}



  var n;
  var rn;
  var f;
  var d;
  var date = '';
  var time;
  
var bid;
var chaird = new Date();
var datechair = chaird.getDate();
var mounthchair = chaird.getMonth() + 1;
var yearchair = chaird.getYear() + 1900;
var hours = chaird.getHours();
var minut = chaird.getMinutes();
var sec = chaird.getSeconds();
var foodId;
var b;
var details;
var price;
var foodset;
var order = 0


var URL = ["https://www.img.in.th/images/d1a8f6d9cb53ec5be1dbe503fe0030f7.jpg",
"https://www.img.in.th/images/ee1b8b9c8952326bb382a0b5e6555e26.jpg",
"https://www.img.in.th/images/b5c50c3431f0b2b311bdd03cec307b96.jpg",
"https://www.img.in.th/images/7e1585243c4d219b3670d3566d3962ed.jpg"];

var URL1 = ["https://www.img.in.th/images/f19e6758395e262cea7947fade521a66.jpg",
"https://www.img.in.th/images/0963cf6416ec25ecdcfae783bf8b489a.jpg",
"https://www.img.in.th/images/8f148b85dd0675e5203278665b236a30.jpg",
"https://www.img.in.th/images/51ec034bf02a68ec1624a78648db8261.jpg"];

var price = [299,399,499,699];
var prices = [40,40,40,40];
var foodset = ["set1","set2","set3","set4"];

var index = [0,0];
var num = 0, sum = 0,sum1 = 0,coin = 100;
export default class Order extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      vegetables: [
        price[0],
        price[1],
        price[2],
        price[3],
      ],
      
      food: [
        'set1',
        'set2',
        'set3',
        'set4'
        
      ],
      
      selectedFood: 'set1',

      beverages: [
        prices[0],
        prices[1],
        prices[2],
        prices[3]


      ],

       drinks: [
        'Ice Tea',
        'Ice Coffe',
        'Green Tea',
        'Lemon Tea'
      ],
      selectedDrink: '-',
      name:'',
      roomnum:''
    };
  }
  renderToolbar() {
    return (
      <Ons.Toolbar>
       <div className='center'>Order</div>
        <div className='right'>
          <Ons.ToolbarButton onClick={this.showMenu.bind(this)}>
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
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

              bill = 'OR'+text1+text3;

        return bill;
      }


  
  

  pushPageNext() {
    
   
    bid = this.state.password
    n = this.state.name
    rn = this.state.roomnum
    f = this.state.selectedVegetable
    d = this.state.selectedDrink
    
  
    date = "" + (chaird.getFullYear()) +'-'+ (chaird.getMonth() + 1) +'-'+ (chaird.getDate());

    if(f==299){
    foodId = "F01";
    }else if(f==399){
    foodId = "F02";
    }else if(f==499){
    foodId = "F03";
    }else if(f==699){
    foodId = "F04";
    }

    if(d=='Ice Tea'){
      b = "BR01";
      sum1 = 40;
    }else if(d=='Ice Coffe'){
      b = "BR02";
      sum1 = 40;
    }else if(d=='Green Tea'){
      b = "BR03";
      sum1 = 40;
    }else if(d=='Lemon Tea'){
      b = "BR04";
      sum1 = 40;
    }else{
      sum1 = 0;
    }
    
      const tol = sum + sum1;
    
    

      if(n != '' && rn != ''){

          client({method: 'GET', path: `/name/${this.state.name.trim()}/roomnumber/${this.state.roomnum.trim()}`}).done(response => {
           console.log(response.entity.status)
           if(response.entity.status==="not found"){
              ons.notification.alert('ชื่อหรือเลขห้องไม่ถูกต้อง')
            
           }else if(response.entity.status="found"){

                    client({method: 'GET', path: '/billid/'+bid+'/name/'+n+'/roomnumber/'+rn+'/food/'+foodId+'/drink/'+b+'/date/'+date+'/price/'+tol}).done(
                               ons.notification.alert('Success')
                          )
                          
                 this.props.navigator.pushPage({ component: Orderbill, props: { key: 'orderbill' } })
             
            
           }else{
               ons.notification.alert('server error'+response.status.code);
        }
      });

      }else{
        ons.notification.alert('กรอกข้อมูลไม่ครบ')

    
      }
    
 }
  
//   pushPage() {
//       bid = this.state.password
//       n = this.state.name
//       rn = this.state.roomnum
//       f = this.state.selectedFood
//       d = this.state.selectedDrink
//       date = "" + (chaird.getFullYear()) +'-'+ (chaird.getMonth() + 1) +'-'+ (chaird.getDate());
      
      
//       if(n=='aa' && rn =='A001'){
        
//            client({method: 'GET', path: '/billid/'+bid+'/name/'+n+'/roomnumber/'+rn+'/food/'+f+'/drink/'+d+'/date/'+date}).done(
//                 ons.notification.alert('Success')
//            )

//            //client({method: 'GET', path: '/billid/'+billid+'/name/'+n+'/roonnum/'+rn+'/food/'+f+'/drink/'+d}).done(
//           this.props.navigator.pushPage({ component: Orderbill, props: { key: 'orderbill' } });
//       }else{
//             ons.notification.alert('ข้อมูลไม่ถูกต้อง');
//       }
//   }
  

  showMenu() {
    this.props.showMenu();
  }
  
  
  handleName(e) {
    this.setState({name: e.target.value});
  }
  handleRoomnum(e) {
    this.setState({roomnum: e.target.value});
  }
 
  handleDrinkChange(drinks) {
    // if(drinks == 'Ice Tea'){
    //   sum1 = 40;
    // }else if(drinks == 'Ice Coffe'){
    //   sum1 = 40;
    // }else if(drinks == 'Green Tea'){
    //   sum1 = 40;
    // } else if(drinks == 'Lemon Tea'){
    //   sum1 = 40;
    // }else {
    //   sum1 = 0;
    // }
   

    this.setState({selectedDrink: drinks});
  }

  componentDidMount() {
    client({ method: 'GET', path: '/api/foods' }).done(response => {
      this.setState({ foods: response.entity._embedded.foods});
    });

    client({ method: 'GET', path: '/api/beverages' }).done(response => {
      this.setState({ beverages: response.entity._embedded.beverages});
    });
    this.setState({password: this.makepassword()})
  }

  handleVegetableChange(vegetable) {
   
          sum = vegetable;
      
    this.setState({selectedVegetable: vegetable});
    
  }

  
  

  
  
  
  
  renderCheckboxFoodRow(row, c) {
    return (
      <Ons.ListItem>
         <div style={{width: '100%', backgroundColor: '#faebd7'}}>
      <Ons.ListItem key={row} tappable >
        
        <div className='left'>
        <Ons.Checkbox 
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedVegetable}
            onChange={this.handleVegetableChange.bind(this, row)}
          />
          <span style={{ textAlign: 'left' }}>&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src={URL[c]} style={{ width: '200' }} /></span>
        </div>
        <b style={{color: 'red'}} htmlFor={`checkbox-${price[c]},${row}`} className = 'center'>
         {foodset[c]}<br/><br/>
           ราคา {price[c]} บาท
               </b>


        <div>
        
                 <br/>&emsp;&emsp;
                 <br/>&emsp;&emsp; 

                 <br/><br/><br/><br/><br/>
                   
         </div>

       </Ons.ListItem>
      </div>
    </Ons.ListItem>
    )
  }

  
  renderCheckboxBeveragesRow(row, c) {
    return (
      <Ons.ListItem>
         <div style={{width: '100%', backgroundColor: '#faebd7'}}>
      <Ons.ListItem key={row} tappable >
        
        <div className='left'>
        <Ons.Checkbox 
            inputId={`checkbox-${row}`}
            checked={row === this.state.selectedDrink}
            onChange={this.handleDrinkChange.bind(this, row)}
          />
          <span style={{ textAlign: 'left' }}>&emsp;&emsp;&emsp;&emsp;&emsp;
          <img src={URL1[c]} style={{ width: '200' }} /></span>
        </div>
        <b style={{color: 'red'}} htmlFor={`checkbox-${prices[c]},${row}`} className = 'center'>
         {row}<br/><br/>
           ราคา {prices[c]} บาท
               </b>

        <div>
        
                 <br/>&emsp;&emsp;
                 <br/>&emsp;&emsp; 

                 <br/><br/><br/><br/><br/>
                   
         </div>

       </Ons.ListItem>
      </div>
    </Ons.ListItem>
    )
  }
  


  
  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      <div style={{ textAlign: 'center' }}>
          <h1>สั่งอาหารและเครื่องดื่ม</h1>
      </div>
      
<Ons.Card style={{ textAlign: 'center' }}>
    <h1>กรอกข้อมูล</h1>
      
  <form style={{ textAlign: 'center' }}> 
      <form bordered>
        <item>
      <input 
         style={{
            borderWidth: 2,  
            borderColor: '',  
            paddingLeft: 10,
            height: 20,
          }}
         placeholder="ชื่อ" 
         value={this.state.name}
         onChange={this.handleName.bind(this)}
         
         />
       </item>
     </form>
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
         placeholder="เลขห้อง" 
         value={this.state.roomnum}
         onChange={this.handleRoomnum.bind(this)}
         />
       </item>
     </form>
   </form>
   <br/>
   <Ons.Card>
    
       <Ons.Card>    
        <Ons.List style={{ textAlign: 'center' }}
          
          dataSource={this.state.vegetables}
          
          renderHeader={() => <Ons.ListHeader style={{ textAlign: 'center' }}>Choose Food Set</Ons.ListHeader>}
          renderRow={this.renderCheckboxFoodRow.bind(this)}
        />
        </Ons.Card>
        <Ons.Card>
        <Ons.List style={{ textAlign: 'center' }}
          dataSource={this.state.drinks}
          renderHeader={() => <Ons.ListHeader style={{ textAlign: 'center' }}>Choose Drinks</Ons.ListHeader>}
          renderRow={this.renderCheckboxBeveragesRow.bind(this)}
        />
        </Ons.Card>
        
       
        </Ons.Card>
        <br/>
        
              <Ons.Button  onClick={this.pushPageNext.bind(this)}>
                 <Ons.Icon >สั่งอาหาร</Ons.Icon>
              </Ons.Button>
              <br/>
</Ons.Card>

       
      </Ons.Page>
    );
  }
}


