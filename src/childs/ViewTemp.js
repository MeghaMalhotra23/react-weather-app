import React from 'react';
import './ViewTemp.css';
import {connect} from 'react-redux';
import {DataValid} from './dataValid';
export class ViewTemp extends React.Component{ 

    render(){
        let dataAvailable;
        if(this.props.z){
            dataAvailable=<DataValid data={this.props.z}/>;
        }
        else{
            dataAvailable="";
        }
        return(
        <div>
            {dataAvailable}       
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