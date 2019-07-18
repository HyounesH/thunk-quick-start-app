import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/NewsActions";

let Button = ({ getPosts, channel }) => (
    <button
        onClick={() => { getPosts(channel) }}
        className="btn btn-primary btn-lg btn-block"
    >
        Get top News
    </button>
)
const mapStateToProps=(state)=>({
    channel:state.channel
});
const mapDispatchToProps={
    getPosts:fetchPosts
}
export default connect(mapStateToProps,mapDispatchToProps)(Button);
