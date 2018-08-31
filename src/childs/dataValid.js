
import React from 'react';
import './ViewTemp.css';
export class DataValid extends React.Component{
    
render(){
    
return(
    <div className="view-temp">
        {props.data.latitude}
        {props.data.currently.summary}
       {props.data.cuurrently.temperature}
    </div>
)}
}