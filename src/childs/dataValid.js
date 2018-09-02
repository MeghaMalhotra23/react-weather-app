
import React from 'react';
import './ViewTemp.css';
export const DataValid =(props)=>{
    let temp;
    if(props.data.currently.temperature)
        temp=parseInt((parseInt(props.data.currently.temperature)-32)*5/9);
return(
    <div className="view-temp">
        <div className="temp">
        Temperature: {temp} °C
        </div>
        <div className="summary">
        Summary: {props.data.currently.summary}
        </div>
    </div>
)
}