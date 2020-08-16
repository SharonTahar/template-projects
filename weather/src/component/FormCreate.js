import React from 'react';

class FormCreate extends React.Component{
    constructor () {
       super()
       this.state = {
        cityval: '',
        countryval: ''
       }
    }

    cityValChg = (e) => {
        this.setState({cityval:e.target.value})
    }
    
    countryValChg = (e) => {
        this.setState({countryval:e.target.value})
    }

    render(){
        const {onTextClicked} = this.props;
        const {cityval, countryval} = this.state;
        return (
            <div>
                <input type="text" onChange={this.cityValChg} />
                <input type="text" onChange={this.countryValChg} />
                <button className="btn" onClick={() => onTextClicked(cityval, countryval)}>Click</button>
            </div>
            )
    }
    
}

export default FormCreate;