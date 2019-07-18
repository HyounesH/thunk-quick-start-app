import { SELECT_CHANNEL, REQUEST_POSTS, RECEIVE_POSTS } from "./types";
import { MY_NEWS_API_KEY } from "./../constants/index";

const getChannel = channel => ({
    type: SELECT_CHANNEL,
    channel,
});
const requestPosts = () => ({
    type: REQUEST_POSTS,
});

const receivedPosts = (json) => ({
    type: RECEIVE_POSTS,
    payload: json.articles,
});
function fetchPosts(channel){
    return function(dispatch){
        dispatch(requestPosts());
        return fetch(`https://newsapi.org/v1/articles?source=${channel}&apiKey=${MY_NEWS_API_KEY}`)
               .then(
                   response=> response.json(),
                   error=> console.log("An error occured.",error),
               ).then((json)=>{
                   dispatch(receivedPosts(json));
               },);
    }
}
export { getChannel, requestPosts, receivedPosts, fetchPosts};