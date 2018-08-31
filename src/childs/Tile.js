import React from 'react';
import './tile.css';
import{centralStore} from '../models/store';
import {asyncAction} from '../models/asyncAction';

export class Tile extends React.Component{
    getData(lat, long){
        centralStore.dispatch(asyncAction('ASYNC',lat,long));
      }
    render(){
        return(
        <div className="tile left" onClick={()=>this.getData(this.props.dataObj.lat,this.props.dataObj.long)}>
                {this.props.dataObj.name}
        </div>
        )
    }
}