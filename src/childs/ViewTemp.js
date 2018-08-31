import React from 'react';
import './ViewTemp.css';
import {connect} from 'react-redux';
import {DataValid} from './dataValid';
export class ViewTemp extends React.Component{ 

    render(){
        let dataAvaiable;
        if(this.props.z){
            console.log(this.props.z);
            dataAvaiable=<DataValid data={this.props.z}/>;
        }
        else{
            dataAvaiable="";
        }
        return(
        <div>
            {dataAvaiable}       
        </div>
    )
}
}
const mapStateToProps= (state)=>{
    if(state==null){
        return{
            z:undefined
        };
    }
    else{
    return {
        z:state.resultasync
    };}
}
export default connect(mapStateToProps)(ViewTemp);