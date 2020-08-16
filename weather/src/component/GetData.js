import React from 'react';


const GetData = ({data}) =>{
    const {name,sys,main,cod} = data;
    console.log(data);
    return (
        <div>
            <div>city:{name}</div>
            <div>country:{sys.country} </div> 
            <div>temparture: {main.temp}</div>
            <div>humidity: {main.humidity}</div>
            <div>condition: {cod}</div>
        </div>
    )
}

export default GetData;