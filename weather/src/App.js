import React from 'react';
import './App.css';
import FormCreate from './component/FormCreate';
import GetData from './component/GetData';


class App extends React.Component{
  constructor () {
    super();
    this.state = {
        city: '',
        country: '',
        temperature:'',
        humidity:'',
        condition:'',
        data: {name:'', sys:{country: ''}, main:{temp:'', humidity:''}, cod:''}
    }
  }

  componentDidMount(){

  }


  onTextClicked = (cityname, countryname) => {
    console.log(cityname, countryname);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname},${countryname}&appid=8ddceeacaf8b95fe943c88fc8389dee0&units=metric`)
    .then(res => res.json())
    .then(name => { 
      // console.log(name.name, name.sys.country, name.main.temp, name.main.humidity, name.cod);
      this.setState({data:name})
    })
    .catch(err => {
      console.log(err);
    })
  }


render() {
  const {data} = this.state;
    return (
      <div>
        <FormCreate 
        onTextClicked={this.onTextClicked} 
        cityValChg={this.cityValChg} 
        countryValChg={this.countryValChg} />
        <GetData data={data} />
      </div>
    );
  }
}
export default App;

/* <div>city:{city}</div>
<div>country:{country} </div> 
<div>temparture: {temparture}</div>
<div>humidity: {humidity}</div>
// <div>condition: {condition}</div> */
