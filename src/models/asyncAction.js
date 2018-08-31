import $ from 'jquery';
export const asyncAction = (actionName, lat,long)=>{
    return (dispatch)=>{
    $.ajax({
        url:'https://api.darksky.net/forecast/6ca3f78e3fdb1e95d1375e7b89b51e0b/'+lat+','+long,
        dataType:'jsonp',
        context:this,
        success: function(result){
         dispatch({type:actionName,pay:result});
       
                }
    });
}}