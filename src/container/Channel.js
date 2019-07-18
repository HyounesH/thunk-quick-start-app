import React from "react";
import {connect} from "react-redux";
import { getChannel } from "../actions/NewsActions";

let Channel=({channelName,channelValue,OnClick,active})=>(
    <div className="col-lg-2 col-md-4 col-sm-6">
     <div className="channel-button" onClick={OnClick}
     style={{backgroundColor:active===channelValue? 'orange':''}}>
     <p>{channelName}</p>
     </div>
    </div>
)

const mapStateToProps=(state)=>({
    active: state.channel
})

const mapDispatchProps=(dispatch,ownProps)=>({
    OnClick:()=>{
      dispatch(getChannel(ownProps.channelValue));
    }
})
export default connect(mapStateToProps,mapDispatchProps)(Channel);
